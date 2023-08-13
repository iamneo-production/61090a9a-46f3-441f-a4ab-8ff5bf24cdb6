import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const GoalsList = () => {
  const [goaldata, goaldatachange] = useState(null);
  const navigate = useNavigate();

  const LoadEdit = (id) => {
    navigate(`/goals/edit/${id}`);
  };

  const Removefunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch(`https://ide-fccbcedbaffbcfdcdacaceeeddaecbbcddbdc.project.examly.io/proxy/8080/goals/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    fetch("https://ide-fccbcedbaffbcfdcdacaceeeddaecbbcddbdc.project.examly.io/proxy/8080/goals")
      .then((res) => res.json())
      .then((resp) => {
        // Calculate completion percentage and add it to the data
        const dataWithCompletion = resp.map((item) => ({
          ...item,
          completionPercentage:
            (item.currentValue / item.targetValue) * 100 || 0,
        }));
        goaldatachange(dataWithCompletion);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Goal List</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="goals/create" className="btn btn-success">
              Set a goal
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Title</td>
                <td>Description</td>
                <td>Target Value</td>
                <td>Current Value</td>
                <td>Progress</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {goaldata &&
                goaldata.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.targetValue}</td>
                    <td>{item.currentValue}</td>
                    <td>{item.completionPercentage.toFixed(2)}%</td>
                    <td>
                      <Link
                        to={{
                          pathname: `/goals/detail/${item.id}`,
                          state: {
                            currentValue: item.currentValue,
                            completionPercentage: item.completionPercentage.toFixed(2),
                          },
                        }}
                        className="btn btn-primary"
                      >
                        View
                      </Link>{" "}
                      <a
                        onClick={() => {
                          LoadEdit(item.id);
                        }}
                        className="btn btn-success"
                      >
                        Update
                      </a>{" "}
                      <a
                        onClick={() => {
                          Removefunction(item.id);
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GoalsList;
