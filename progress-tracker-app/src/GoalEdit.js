import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const GoalEdit = () => {
  const { goalId } = useParams();
  const navigate = useNavigate();

  const [id, idchange] = useState("");
  const [title, titlechange] = useState("");
  const [description, descriptionchange] = useState("");
  const [targetValue, targetValuechange] = useState("");
  const [active, activechange] = useState(true);
  const [validation, valchange] = useState(false);
  const [currentValue, setCurrentValue] = useState("");
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    fetch(`https://ide-fccbcedbaffbcfdcdacaceeeddaecbbcddbdc.project.examly.io/proxy/8080/goals/${goalId}`)
      .then((res) => res.json())
      .then((resp) => {
        idchange(resp.id);
        titlechange(resp.title);
        descriptionchange(resp.description);
        targetValuechange(resp.targetValue);
        activechange(resp.isactive);
        setCurrentValue(resp.currentValue);
        setPercentage((resp.currentValue / resp.targetValue) * 100 || 0);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [goalId]);

  const handlesubmit = (e) => {
    e.preventDefault();
    const goaldata = { id, title, description, targetValue, active, currentValue };

    fetch(`https://ide-fccbcedbaffbcfdcdacaceeeddaecbbcddbdc.project.examly.io/proxy/8080/goals/${goalId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(goaldata),
    })
      .then((res) => {
        alert("Saved successfully.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2>Update Goal Details</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        value={id}
                        disabled="disabled"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Title</label>
                      <input
                        required
                        value={title}
                        onMouseDown={(e) => valchange(true)}
                        onChange={(e) => titlechange(e.target.value)}
                        className="form-control"
                      />
                      {title.length === 0 && validation && (
                        <span className="text-danger">Enter the title</span>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Description</label>
                      <input
                        value={description}
                        onChange={(e) => descriptionchange(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Target Value</label>
                      <input
                        value={targetValue}
                        onChange={(e) => targetValuechange(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  {/* New input for Current Value */}
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Current Value</label>
                      <input
                        value={currentValue}
                        onChange={(e) => setCurrentValue(e.target.value)}
                        type="number"
                        className="form-control"
                      />
                    </div>
                  </div>
                  {/* Display Completion Percentage */}
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Completion Percentage</label>
                      <input
                        value={`${percentage.toFixed(2)}%`}
                        disabled
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-check">
                      <input
                        checked={active}
                        onChange={(e) => activechange(e.target.checked)}
                        type="checkbox"
                        className="form-check-input"
                      />
                      <label className="form-check-label">Is Active</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Save
                      </button>
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GoalEdit;
