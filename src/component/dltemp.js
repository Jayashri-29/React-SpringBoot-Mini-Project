import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import EmpService from "../service/EmpService";
import { useParams,Link } from "react-router-dom";

const DelEmp = () => {
    const { eid } = useParams();
    const [msg, setMsg] = useState("");
    let [emp,setEmp]=useState([]);
    let [count,setCount]=useState(0);
    useEffect(() => {
        if (eid) {
            const deleteEmployee = async () => {
                try {
                    const response = await EmpService.delemp(eid);
                    // Assuming response contains a message
                    if(response.message || "Employee deleted successfully.")
                    {
                            let promise=EmpService.getEmp();
                            promise.then((res)=>{
                                setEmp(res.data);
                                setCount(1);
                            });
                    }     
                } catch (error) {
                    // Ensure error message is a string
                    setMsg(error.message || "Error in deleting employee.");
                }
            };
            deleteEmployee();
        } else {
            setMsg("No employee ID provided.");
        }
    }, [eid]);

    return (
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
                        <td>Update</td>
                    </tr>
                )
               }
            </tbody>
        </table>
        </>
    );
};

export default DelEmp;
