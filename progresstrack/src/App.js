import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import SetGoal from './components/SetGoal';
import DropGoal from './components/DropGoal';
import UpdateProgress from './components/UpdateProgress';
import Updategoal from './components/UpdateGoal';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/set' element={<SetGoal/>}></Route>
        <Route path='/drop/:id' element={<DropGoal/>}></Route>
        <Route path='/update/:id' element={<UpdateProgress/>}></Route>
        <Route path='/updategoal/:id' element={<Updategoal/>}></Route>
        <Route path='/:id' element={<UpdateProgress/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
