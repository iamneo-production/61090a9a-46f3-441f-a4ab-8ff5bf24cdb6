import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './components/HomeScreen';
import NewGoalScreen from './components/NewGoalScreen';
import GoalsListScreen from './components/GoalsListScreen';
import ProgressUpdateScreen from './components/ProgressUpdateScreen';
import ProgressVisualizationScreen from './components/ProgressVisualizationScreen';

function App() {
  const [goals, setGoals] = useState([]);
  const [currentGoalId, setCurrentGoalId] = useState(null);

  useEffect(() => {
    fetchGoals();
  }, []);

  const fetchGoals = async () => {
    try {
      const response = await fetch('/api/goals');
      const data = await response.json();
      setGoals(data);
    } catch (error) {
      console.error('Error fetching goals:', error);
    }
  }

  const addGoal = async (newGoal) => {
    try {
      const response = await fetch('/api/goals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newGoal),
      });
      const data = await response.json();
      setGoals([...goals, data]);
    } catch (error) {
      console.error('Error adding goal:', error);
    }
  };

  const updateProgress = async (goalId, currentValue) => {
    try {
      const response = await fetch(`/api/goals/${goalId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ currentValue }),
      });
      const updatedGoal = await response.json();
      setGoals(goals.map(goal => (goal.id === goalId ? updatedGoal : goal)));
    } catch (error) {
      console.error('Error updating progress:', error);
    }
  };

  const deleteGoal = async (goalId) => {
    try {
      await fetch(`/api/goals/${goalId}`, {
        method: 'DELETE',
      });
      setGoals(goals.filter(goal => goal.id !== goalId));
      setCurrentGoalId(null);
    } catch (error) {
      console.error('Error deleting goal:', error);
    }
  };

  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/new-goal">Set a New Goal</Link>
            </li>
            <li>
              <Link to="/goals">View Existing Progress</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/new-goal" element={<NewGoalScreen addGoal={addGoal} />} />
          <Route path="/goals" element={<GoalsListScreen goals={goals} setCurrentGoalId={setCurrentGoalId} />} />
          <Route path="/update-progress/:goalId" element={<ProgressUpdateScreen goal={goals.find(goal => goal.id === currentGoalId)} updateProgress={updateProgress} deleteGoal={deleteGoal} />} />
          <Route path="/visualization/:goalId" element={<ProgressVisualizationScreen goal={goals.find(goal => goal.id === currentGoalId)} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
