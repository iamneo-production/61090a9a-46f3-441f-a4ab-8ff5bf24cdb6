import React, { useState } from 'react';

function ProgressUpdateScreen({ goal, updateProgress }) {
  const [currentValue, setCurrentValue] = useState('');

  const handleSubmit = () => {
    updateProgress(goal.id, parseInt(currentValue));
  };

  return (
    <div>
      <h1>Update Progress</h1>
      <p>Goal: {goal.title}</p>
      <input type="number" placeholder="Current Value" value={currentValue} onChange={(e) => setCurrentValue(e.target.value)} />
      <button onClick={handleSubmit}>Update Progress</button>
    </div>
  );
}

export default ProgressUpdateScreen;
