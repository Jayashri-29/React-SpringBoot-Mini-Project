import React, { useState,useEffect } from "react";
import ReactDom from "react-dom";
import EmpService from "../service/EmpService";
import { Link } from "react-router-dom";
let ViewEmp=()=>{
    let [emp,setEmp]=useState([]);
    let [count,setCount]=useState(0);
    useEffect(()=>{
        if(count==0){
            let promise=EmpService.getEmp();
            promise.then((res)=>{
                setEmp(res.data);
                setCount(1);
            });
        }
       },[count]);
    return(
        <>
        <h1>All Employee Data</h1>
        <table className="table">
            <thead>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Contact</th>
                <th scope="col">Delete</th>
                <th scope="col">Update</th>
            </thead>
            <tbody>
               {
                emp.map((emp)=>
                    <tr>
                        <td>{emp.name}</td>
                        <td>{emp.email}</td>
                        <td>{emp.contact}</td>
                        <td><Link to={`/delemp/${emp.id}`} className="nav-link">Delete</Link></td>
                        <td><Link to={`/updemp/${emp.id}`} className="nav-link">Update</Link></td>
                    </tr>
                )
               }
            </tbody>
        </table>
        </>
    );
}
export default ViewEmp;