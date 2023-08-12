import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import React, {useState, useParm} from 'react'

function UpdateProgress(){
    const [progress, UpdateProgress] = useState();
    const {name} = useParm();
    const handleSubmit=(event)=>{
        event.preventDefault()
        axios.put('http://localhost:8080/users',goal)
        .then(res=>{
            UpdateProgress(res.data);
            navigate('/');
    }
    return(
        <>
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
                <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                    <h1>Add a user with goal</h1>
                    <form onsubmit={handleSubmit}>
                        <div class="mb-2">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" className="form-control" placeholder="Enter Name"/>
                        </div>
                        <div class="mb-2">
                            <label htmlFor="goal">Goal:</label>
                            <input type="text" name="goal" className="form-control" readonly/>
                        </div>
                        <div class="mb-2">
                            <label htmlFor="progress">progress:</label>
                            <input type="Number" name="progress" className="form-control" readonly/>
                        </div>
                        <button className='btn btn-success'>submit</button>
                        <Link to='/' className='btn btn-primary ms-3'>Back</Link>
                    </form>

                </div>

            </div>
        </>
    );
}
export default UpdateProgress;