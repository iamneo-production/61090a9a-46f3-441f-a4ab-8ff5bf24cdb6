import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GoalsList from './GoalsList';
import GoalCreate from './GoalCreate';
import GoalDetail from './GoalDetail';
import GoalEdit from './GoalEdit';
function App() {
  return (
    <div className="App">
      <h1>Progress Tracker</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GoalsList />}></Route>
          <Route path='/goals/create' element={<GoalCreate />}></Route>
          <Route path='/goals/detail/:goalId' element={<GoalDetail />}></Route>
          <Route path='/goals/edit/:goalId' element={<GoalEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
