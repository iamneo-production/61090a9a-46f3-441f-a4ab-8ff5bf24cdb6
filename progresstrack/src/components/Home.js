import React,{useState, useEffect} from "react"
import axios from 'axios'
import {Link} from 'react-router-dom'
function Home(){
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8080/users')
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
                        <th>UserName</th>
                        <th>Goal</th>
                        <th>Description</th>
                        <th>Target</th>
                        <th>Progress</th>
                    </tr>
                    <tbody>
                        {
                            data.map((d,index) => (
                                <tr key={index}>
                                    <td>d.UserName</td>
                                    <td>d.goal-tittle</td>
                                    <td>d.description</td>
                                    <td>d.target-value</td>
                                    <td>d.progress</td>
                                    <td><button className="btn btn-sm btn-primary">goal edit</button></td>
                                    <td><Link to='/update'><button className="btn btn-primary">progress edit</button></Link></td>
                                    <td><Link to='/drop'><button className="btn btn-danger">delete goal</button></Link></td>
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