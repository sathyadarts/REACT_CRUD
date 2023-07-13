import React,{useEffect,useState} from "react";
import {useParams} from 'react-router-dom'

import Axios from 'axios'

function Read() {
    const{id}=useParams()

    const[empList,setEmplist]=useState([])
        useEffect(()=>{
            Axios.get("http://127.0.0.1:3500/read/"+id).then((response)=>{
                setEmplist(response.data)
            })
        })
        return(
            <div>
                <h1>employee details</h1>
                {
                    empList.map((val,key)=>{
                        return (
                            <div>
                                <h3>{val.id}</h3>
                                <h3>{val.name}</h3>
                                <h3>{val.email}</h3>
                                <h3>{val.password}</h3>
                                <h3>{val.gender}</h3>
                                <h3>{val.age}</h3>
                            </div>
                        )
                    })}
                    
            </div>
        )
                }
                export default Read
