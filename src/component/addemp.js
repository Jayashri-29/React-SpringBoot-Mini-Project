import React, { useState } from "react";
import ReactDOM from "react-dom";
import Empservice from "../service/EmpService";

const AddEmp = () => {
    const cssStyle = {
        width: "400px",
        height: "50px"
    };

    const [reg, setReg] = useState({
        name: "",
        email: "",
        contact: ""
    });

    const [msg, setMsg] = useState("");

    const genHandle = (e) => {
        setReg(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const saveEmp = async () => {
        if (reg.name && reg.email && reg.contact) {
            const employee = {
                name: reg.name,
                email: reg.email,
                contact: reg.contact
            };

            try {
                // Assuming Empservice.addEmp returns a response object
                const response = await Empservice.addEmp(employee);
                // Example: response might have data or other structure
                // Adjust based on your actual response structure
                if (response && response.data && response.data.message) {
                    setMsg(response.data.message); // Assuming `response.data.message` is your success message
                } else {
                    setMsg("Employee added successfully."); // Fallback message
                }
            } catch (error) {
                // Simplified error handling
                setMsg("Error in adding employee");
            }
        } else {
            setMsg("Please fill in all fields.");
        }
    };
    
    return (
        <center>
            <input
                type="text"
                name="name"
                value={reg.name}
                onChange={genHandle}
                placeholder="Enter name here"
                style={cssStyle}
            /><br /><br />
            <input
                type="text"
                name="email"
                value={reg.email}
                onChange={genHandle}
                placeholder="Enter email here"
                style={cssStyle}
            /><br /><br />
            <input
                type="text"
                name="contact"
                value={reg.contact}
                onChange={genHandle}
                placeholder="Enter contact here"
                style={cssStyle}
            /><br /><br />
            <input
                type="button"
                value="Add Employee"
                style={cssStyle}
                onClick={saveEmp}
            />
            <h2>{msg}</h2>
        </center>
    );
};

export default AddEmp;
