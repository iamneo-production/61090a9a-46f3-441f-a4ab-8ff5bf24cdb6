import React,{useState, useEffect} from "react"
import axios from 'axios'
import {Link} from 'react-router-dom'
function Home(){
    const [goal, setGoal] = useState([])
    useEffect(()=>{
        axios.get('https://ide-ffeccbbbeccbcfdcdacaceeeddaecbbcddbdc.project.examly.io/proxy/8080/goals')
        .then(res=>{setGoal(res.data);
           // console.log(goal);
        }
    )
        .catch(err=>console.log(err));
    },[])
    //console.log('hey')
    //console.log(goal[0])
    return(
        <>
        <h1 className="nav justify-content-center">Users with goals</h1>
        <div className="d-flex justify-content-end">
            <Link to='/set' className='btn btn-success'>Add goal</Link>
        </div>
        <div>
            <div>
                <table className='table table-striped'>
                    <thead>
                    <tr>
                        <th>Goal</th>
                        <th>Description</th>
                        <th>Target</th>
                        <th>Progress</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            goal.map((item,index)=>(
                                <tr key={index}>
                                    <td>{item.title}</td>
                                    <td>{item.description}</td>
                                    <td>{item.Target}</td>
                                    <td style={{width:100}}>
                                        <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar bg-success" style={ { width: `${item.progress}%` } }>{item.progress}</div>
                                        </div>
                                    </td>
                                    <td><Link to={`/updategoal/${item.id}`} className="btn btn-sm btn-primary">goal edit</Link></td>
                                    <td><Link to={`/update/${item.id}`} className="btn btn-primary">progress edit</Link></td>
                                    <td><Link to={`/drop/${item.id}`} className="btn btn-danger">delete goal</Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
}

export default Home;