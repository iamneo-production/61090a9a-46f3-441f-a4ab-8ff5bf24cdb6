import React, { useState } from 'react';

function NewGoalScreen({ addGoal }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [targetValue, setTargetValue] = useState('');

  const handleSubmit = () => {
    const newGoal = {
      title,
      description,
      targetValue: parseInt(targetValue),
      currentValue: 0,
    };
    addGoal(newGoal);
  };

  return (
    <div>
      <h1>New Goal</h1>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="number" placeholder="Target Value" value={targetValue} onChange={(e) => setTargetValue(e.target.value)} />
      <button onClick={handleSubmit}>Create Goal</button>
    </div>
  );
}

export default NewGoalScreen;
