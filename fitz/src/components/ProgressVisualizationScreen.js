import React from 'react';

function ProgressVisualizationScreen({ goal }) {
  const percentage = (goal.currentValue / goal.targetValue) * 100;

  return (
    <div>
      <h1>Progress Visualization</h1>
      <p>Goal: {goal.title}</p>
      <p>Current Progress: {goal.currentValue}</p>
      <p>Target: {goal.targetValue}</p>
      <p>Percentage: {percentage.toFixed(2)}%</p>
    </div>
  );
}

export default ProgressVisualizationScreen;
