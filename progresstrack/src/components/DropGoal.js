import axios from 'axios'
import {Link, useNavigate,useParams} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
function DropGoal(){

    const {id} = useParams();
    const navigate = useNavigate();
    const handleDelete = (event)=>{
        event.preventDefault();
        console.log(id);
        axios.delete('https://ide-ffeccbbbeccbcfdcdacaceeeddaecbbcddbdc.project.examly.io/proxy/8080/goals'+id)
        .then(res=>{
            alert("deleted successfully");
            navigate('/')
        }).catch(err=>console.log(err))
    }

    return(
        <>
            <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
                <div className='w-80 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                        
                        <div className="container text-center align-center">
                            <div className='row'><h3>Do you want to delete this goal</h3></div>
                            <div className='row'></div>
                            <div className="row">
                                <div className="col">
                                    <button type='button' className='btn btn-success' onClick={handleDelete}>Delete</button>
                                </div>
                                <div className="col">
                                    <Link to='/' className='btn btn-danger'>Cancel</Link>
                                </div>
                            </div>
                        </div>
                </div>

            </div>
        </>
    );
}
export default DropGoal;