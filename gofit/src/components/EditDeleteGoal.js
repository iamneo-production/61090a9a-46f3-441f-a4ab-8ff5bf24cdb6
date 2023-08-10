import React from 'react';
//import { useParams } from 'react-router-dom';

function EditDeleteGoal() {
 // const { id } = useParams();

  // Fetch goal data using API call

  const handleEditGoal = () => {
    // Implement API call to edit goal
  };

  const handleDeleteGoal = () => {
    // Implement API call to delete goal
  };

  return (
    <div>
      <h2>Edit/Delete Goal</h2>
      {/* Display and edit goal information */}
      <button onClick={handleEditGoal}>Edit Goal</button>
      <button onClick={handleDeleteGoal}>Delete Goal</button>
    </div>
  );
}

export default EditDeleteGoal;
