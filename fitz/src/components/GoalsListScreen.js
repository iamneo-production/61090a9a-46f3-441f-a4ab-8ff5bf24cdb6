import React from 'react';

function GoalsListScreen({ goals, setCurrentGoalId }) {
  return (
    <div>
      <h1>Goals List</h1>
      <ul>
        {goals.map(goal => (
          <li key={goal.id}>
            <p>{goal.title}</p>
            <button onClick={() => setCurrentGoalId(goal.id)}>Update Progress</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GoalsListScreen;
