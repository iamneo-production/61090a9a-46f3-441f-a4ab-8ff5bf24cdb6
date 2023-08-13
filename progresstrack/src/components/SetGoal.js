import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
function SetGoal(){
    const [goals,setGoals] = useState({
        title:'',
        description:'',
        Target:0,
        progress:0
    });
    
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('hello')
        axios.post('https://ide-ffeccbbbeccbcfdcdacaceeeddaecbbcddbdc.project.examly.io/proxy/8080/goals',goals)
        .then(res=>{
            console.log("i am in")
            setGoals(res.data);
            navigate('/');
        }).catch(err=>console.log(err));
    }
    return(
        <>
            <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
                <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                    <h1>Add a user with goal</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label htmlFor="title">Goal:</label>
                            <input type="text" name="title" className="form-control" placeholder="Enter Name" onChange={e=>setGoals({...goals, title:e.target.value})}/>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="description">Description:</label>
                            <input type="text" name="description" className="form-control" placeholder="Enter Name" onChange={e=>setGoals({...goals, description:e.target.value})}/>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="Target">Target:</label>
                            <input type="Number" name="Target" className="form-control" placeholder="Enter Name" onChange={e=>setGoals({...goals, Target:e.target.value})}/>
                        </div>
                        <div className="mb-2">
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