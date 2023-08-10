import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Progress Tracker</h1>
      <Link to="/set-goal">Set a New Goal</Link>
      <Link to="/update-progress">Update Progress</Link>
      {/* ... */}
    </div>
  );
}

export default Home;