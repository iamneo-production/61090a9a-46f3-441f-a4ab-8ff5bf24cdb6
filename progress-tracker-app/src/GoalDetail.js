import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const GoalDetail = () => {
  const { goalId } = useParams();

  const [goaldata, setGoalData] = useState({});
  const [currentValue, setCurrentValue] = useState(0);
  const [completionPercentage, setCompletionPercentage] = useState(0);

  useEffect(() => {
    fetch(`https://ide-fccbcedbaffbcfdcdacaceeeddaecbbcddbdc.project.examly.io/proxy/8080/goals/${goalId}`)
      .then((res) => res.json())
      .then((resp) => {
        setGoalData(resp);
        setCurrentValue(resp.currentValue);
        setCompletionPercentage(
          (resp.currentValue / resp.targetValue) * 100 || 0
        );
      })
      .catch((err) => {
        console.log(err.message);
      });

    // Set a timeout to display a reminder after 2 minutes
    const reminderTimeout = setTimeout(() => {
      alert("Don't forget to update your progress!");
    }, 2 * 60 * 1000); // 2 minutes in milliseconds

    // Clear the timeout when the component unmounts
    return () => {
      clearTimeout(reminderTimeout);
    };
  }, [goalId]);

  return (
    <div className="container">
      <div className="card row" style={{ textAlign: "left" }}>
        <div className="card-title">
          <h2>View Details</h2>
        </div>
        <div className="card-body">
          <div>
            <h5>
              Goal title: <b>{goaldata.title}</b> ({goaldata.id})
            </h5>
            <h5>Description is: {goaldata.description}</h5>
            <h5>Target Value is: {goaldata.targetValue}</h5>
            <h5>Current Value is: {currentValue}</h5>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${completionPercentage}%` }}
                aria-valuenow={completionPercentage}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {completionPercentage.toFixed(2)}%
              </div>
            </div>
            <Link className="btn btn-danger" to="/">
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalDetail;
