import React,{useState, useEffect} from "react"
import axios from 'axios'
import {Link} from 'react-router-dom'
function Home(){
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8080/goals')
        .then(res=>setData(res.data))
        .catch(err=>console.log(err));
    },[])
    return(
        <div class="d-flex flex-column mb-3">
            <h1>Users with goals</h1>
            <Link to='/set'><button class='btn btn-success'>Add goal</button></Link>
            <div>
                <table class='table table-striped'>
                    <tr>
                        <th>Goal</th>
                        <th>Description</th>
                        <th>Target</th>
                        <th>Progress</th>
                    </tr>
                    <tbody>
                        {
                            data.map((d,index) => (
                                <tr key={index}>
                                    <td>d.goal-tittle</td>
                                    <td>d.description</td>
                                    <td>d.target-value</td>
                                    <td>d.progress</td>
                                    <td><Link to='/updategoal' className="btn btn-sm btn-primary">goal edit</Link></td>
                                    <td><Link to='/update'className="btn btn-primary">progress edit</Link></td>
                                    <td><Link to='/drop' className="btn btn-danger">delete goal</Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;