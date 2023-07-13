import React, { useState } from 'react'
import'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'
import { Link } from 'react-router-dom'

function View() {
    const[empList,setEmplist]=useState([])
    const ViewEmptable=()=>{
        Axios.get("http://127.0.0.1:3500/view").then((response)=>{
            setEmplist(response.data)
        })
    }
    const delEmp=(id)=>{
        Axios.delete("http://127.0.0.1:3500/deleteEmp/"+id).then(res=>{
            window.location.reload()
        }).catch(err=>console.log("error"))
    }
return(
    <div>
        <button class="btn btn-primary" onClick={ViewEmptable}>view data</button>
        <table class="table table-bordered">
        <thead>
            <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>password</th>
            <th>gender</th>
            <th>age</th>
            <th>action</th>
            <th>action</th>
            </tr>
        </thead>
        {
            empList.map((val,key)=>{
                return(
                    <tbody><tr>
                        <td>{val.id}</td>
                        <td>{val.name}</td>
                        <td>{val.email}</td>
                        <td>{val.password}</td>
                       <td>{val.gender}</td>
                        <td>{val.age}</td>
                        <td><Link to = {`/update/${val.id}`} className="btn btn-primary">Update</Link></td>
                        <td><Link to = {`/update2/${val.id}`} className="btn btn-warning">Update2</Link></td>
                        <td><button onClick={()=>delEmp(val.id)}className="btn btn-danger">delete</button></td>
                      <td><Link to = {`/read/${val.id}`} className="btn btn-dark">fetch</Link></td>
                    </tr>
                    </tbody>)
            })}
            </table>
            </div>
)
        }
        export default View