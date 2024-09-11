import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EmpService from "../service/EmpService";

const UpdateEmp = () => {
    const { eid } = useParams();
    const [emp, setEmp] = useState({
        name: "",
        email: "",
        contact: "",
        id: eid
    });
    const [msg, setMsg] = useState("");
    let [count,setCount]=useState(0);
    useEffect(()=>{
        if(count==0){
            let promise=EmpService.getById(eid);
            promise.then((res)=>{
                setEmp(res.data);
                setCount(1);
            });
        }
       },[count]);
    const genHandle = (e) => {
        setEmp(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const saveEmp = async (e) => {
        e.preventDefault(); // Prevent form from reloading the page
        if (emp.name && emp.email && emp.contact && emp.id) {
            const employee = {
                name: emp.name,
                email: emp.email,
                contact: emp.contact,
                id: emp.id
            };

            try {
                const response = await EmpService.updateEmpById(employee, eid);
                // Assuming response contains a message in the data object
                setMsg(response.data.message || "Employee updated successfully.");
            } catch (error) {
                setMsg("Error in updating employee.");
            }
        } else {
            setMsg("Please fill in all fields.");
        }
    };

    return (
        <div>
            <center>
                <form onSubmit={saveEmp}>
                    <input type="hidden" name="id" value={emp.id} />
                    <label>Name:</label><br />
                    <input type="text" name="name" value={emp.name} onChange={genHandle} /><br /><br />
                    <label>Email:</label><br />
                    <input type="text" name="email" value={emp.email} onChange={genHandle} /><br /><br />
                    <label>Contact:</label><br />
                    <input type="text" name="contact" value={emp.contact} onChange={genHandle} /><br /><br />
                    <button type="submit">Update Employee</button>
                </form>
            </center>
            <h1>{msg}</h1>
        </div>
    );
};

export default UpdateEmp;
