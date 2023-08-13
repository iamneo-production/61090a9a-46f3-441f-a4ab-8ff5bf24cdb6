import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useNavigate,useParams} from 'react-router-dom'

function UpdateProgress(){

    const {id} = useParams();
    const [goals, setGoals] = useState([]);
    /*const [progres,setProgres] = useState({
        id:id,
        title:'',
        description:'',
        Target:0,
        progress:0
    });*/

    //get goal with given id    
    useEffect(()=>{
        axios.get('https://ide-ffeccbbbeccbcfdcdacaceeeddaecbbcddbdc.project.examly.io/proxy/8080/goals'+id)
        .then(res=>{setGoals(res.data);
            console.log(res.data)
        }
    )
        .catch(err=>console.log(err));
    },[])

   /* const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put('https://ide-ffeccbbbeccbcfdcdacaceeeddaecbbcddbdc.project.examly.io/proxy/8080/goals'+id,{progres})
        .then(res=>{
            console.log(res.data);
            navigate('/');
        }).catch(err=>console.log(err));
    }

    const calPercentage = (event)=>{
        var targetValue = Number(goals.Target);
        var goalComplete = Number(event.target.value);
        var percentage = (goalComplete/targetValue)*100;
        setProgres({...progres, progress:percentage})
    }*/

    

    return(
        <>
            <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
                <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                    <h1>Update Prohress of a Goal</h1>
                    <form>
                        <div className="mb-2">
                            <label htmlFor="title">Goal:</label>
                            <input type="text" name="title" className="form-control"  placeholder="Enter Name" value={goals.title} readOnly/>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="description">Description:</label>
                            <input type="text" name="description" className="form-control" placeholder="Enter Name" value={goals.description} readOnly/>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="Target">Target:</label>
                            <input type="Number" id='targetVal' name="Target" className="form-control" placeholder="Enter Name" value={goals.Target} readOnly/>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="progress">progress:</label>
                            <input type="Number" name="progress" className="form-control" placeholder="Enter Name" value={goals.progress}/>
                        </div>
                        <button type='submit' className='btn btn-success'>submit</button>
                        <Link to='/' className='btn btn-primary ms-3'>Back</Link>
                    </form>

                </div>

            </div>
        </>
    )
}
export default UpdateProgress;