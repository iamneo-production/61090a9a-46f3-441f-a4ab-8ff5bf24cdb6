import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
function SetGoal(){
    const [goals,setGoals] = useState({
        title:'',
        description:'',
        target:0,
        progress:0
    });
    
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('https://ide-ffeccbbbeccbcfdcdacaceeeddaecbbcddbdc.project.examly.io/proxy/8080/goals',goals)
        .then(res=>{
            setGoals(res.data);
            navigate('/');
        }).catch(err=>console.log(err));
    }
    return(
        <>
            <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
                <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                    <h1>Add a user with goal</h1>
                    <form onsubmit={handleSubmit}>
                        <div class="mb-2">
                            <label htmlFor="goal">Goal:</label>
                            <input type="text" name="goal" className="form-control" placeholder="Enter Name" onChange={e=>setGoals({...goals, title:e.target.value})}/>
                        </div>
                        <div class="mb-2">
                            <label htmlFor="desc">Description:</label>
                            <input type="text" name="desc" className="form-control" placeholder="Enter Name" onChange={e=>setGoals({...goals, description:e.target.value})}/>
                        </div>
                        <div class="mb-2">
                            <label htmlFor="target">Target:</label>
                            <input type="Number" name="target" className="form-control" placeholder="Enter Name" onChange={e=>setGoals({...goals, target:e.target.value})}/>
                        </div>
                        <div class="mb-2">
                            <label htmlFor="progress">progress:</label>
                            <input type="Number" name="progress" className="form-control" placeholder="Enter Name" onChange={e=>setGoals({...goals, progress:e.target.value})}/>
                        </div>
                        <button className='btn btn-success'>submit</button>
                        <Link to='/' className='btn btn-primary ms-3'>Back</Link>
                    </form>

                </div>

            </div>
        </>
    );
}
export default SetGoal;