import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes ,Route as RouterRoute } from 'react-router'; 
import Home from './components/Home';
import SetGoal from './components/SetGoal';
import UpdateProgress from './components/UpdateProgress';
import ProgressDisplay from './components/ProgressDisplay';
import EditDeleteGoal from './components/EditDeleteGoal';

function App() {
  return (
    <Router>
      <Routes>
        <RouterRoute path="/" element={<Home />} />
        <RouterRoute path="/set-goal" element={<SetGoal />} />
        <RouterRoute path="/update-progress" element={<UpdateProgress />} />
        <RouterRoute path="/progress-display" element={<ProgressDisplay />} />
        <RouterRoute path="/edit-delete-goal/:id" element={<EditDeleteGoal />} />
      </Routes>
    </Router>
  );
}


export default App