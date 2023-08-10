import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button, TextField, Container, Typography } from '@mui/material';

function SetGoal() {
  const navigate = useNavigate();
  const [goal, setGoal] = useState({ title: '', description: '', targetValue: 0 });

  const handleSaveGoal = () => {
    // Implement API call to save the goal
    navigate('/update-progress');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Set New Goal
      </Typography>
      <TextField
        label="Goal Title"
        fullWidth
        value={goal.title}
        onChange={(e) => setGoal({ ...goal, title: e.target.value })}
        margin="normal"
      />
      <TextField
        label="Description"
        fullWidth
        value={goal.description}
        onChange={(e) => setGoal({ ...goal, description: e.target.value })}
        margin="normal"
      />
      <TextField
        type="number"
        label="Target Value"
        fullWidth
        value={goal.targetValue}
        onChange={(e) => setGoal({ ...goal, targetValue: e.target.value })}
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSaveGoal}>
        Save Goal
      </Button>
    </Container>
  );
}

export default SetGoal;
