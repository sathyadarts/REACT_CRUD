import React, { useState } from "react";
import'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'
import { Link } from "react-router-dom";

function Home() {
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [gender, setGender]=useState("")
    const [age, setAge]=useState(0)

    const addEmp = () => {
       Axios.post ("http://127.0.0.1:3500/saveemp" ,
       {
        name : name,
        email : email,
        password : password,
        gender : gender,
        age : age
       }
       ).then (()=>{
        console.log("insert successfully")
       })

    }

    return (
            <div class = "container mt-5">
                <div class="row justify-content-center ">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">
                                <h3>Employee Form</h3>
                            </div>
                            <div class="card-body">
                                <form onSubmit={addEmp}>
                                    <div class="form-group mb-3">
                                        <label for="name" class="form-label">Name :</label>
                                        <input type="text" class="form-control" placeholder="enter name" onChange={(e)=>{setName(e.target.value)}}/>
                                    </div>

                                    <div class="form-group  mb-3">
                                        <label for="email" class="form-label">Email :</label>
                                        <input type="email" class="form-control" placeholder="example@gmail.com" onChange={(e)=>{setEmail(e.target.value)}}/>
                                    </div>

                                    <div class="form-group  mb-3">
                                        <label for="password" class="form-label">Password :</label>
                                        <input type="password" class="form-control" placeholder="enter password" onChange={(e)=>{setPassword(e.target.value)}}/>
                                    </div>

                                    <div class="form-group-check  mb-3" onChange={(e)=>{setGender(e.target.value)}}>
                                        <label for="gender" class="form-label">Gender :</label> <br></br>
                                        <input type="radio" class="form-control-check" name="gender" value="male"/> Male <br></br>
                                        <input type="radio" class="form-control-check" name="gender" value="female"/> Female
                                    </div>
                                     
                                    <div class="form-group  mb-3">
                                        <label for="age" class="form-label">Age :</label>
                                        <input type="text" class="form-control" onChange={(e)=>{setAge(e.target.value)}} />
                                    </div>
                                  <div class="d-flex gap-2">
                                    <button type="submit" class="btn btn-success">Submit</button>
                            
                                  </div>
                                  <div>
                                    <Link to="/view" class ="btn btn-info">view</Link>
                                  </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
    )
}

export default Home