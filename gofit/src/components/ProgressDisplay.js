import React from 'react';
import { Link } from 'react-router-dom';

function ProgressDisplay() {
  // Fetch progress data using API call
const goalId=123;
  return (
    <div>
      <h2>Progress Display</h2>
      {/* Display progress information */}
      <Link to={`/edit-delete-goal/${goalId}`}>Edit/Delete Goal</Link>
    </div>
  );
}

export default ProgressDisplay;
