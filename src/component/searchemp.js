import React, { useState, useEffect } from "react";
import EmpService from "../service/EmpService";
import { Link } from "react-router-dom";

const SearchEmp = () => {
    const [emp, setEmp] = useState([]);
    const [ename, setEname] = useState("");

    const handleInputChange = (e) => {
        setEname(e.target.value);
    };

    const fetchEmployees = async () => {
        try {
            const response = await EmpService.getEmp();
            setEmp(response.data);
        } catch (error) {
            console.error("Error fetching employees:", error);
        }
    };

    const searchEmployeeByName = async (name) => {
        try {
            const response = await EmpService.searchempbyName(name);
            setEmp(response.data);
        } catch (error) {
            console.error("Error searching employee by name:", error);
        }
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    useEffect(() => {
        if (ename) {
            const delayDebounceFn = setTimeout(() => {
                searchEmployeeByName(ename);
            }, 500); // Debounce delay to prevent too many requests

            return () => clearTimeout(delayDebounceFn);
        } else {
            fetchEmployees(); // Fetch all employees when search input is cleared
        }
    }, [ename]);

    return (
        <>
            <input
                type="text"
                name="name"
                value={ename}
                placeholder="Search employee name"
                onChange={handleInputChange}
            />
            <br /><br />
            <div id="d">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {emp.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.name}</td>
                                <td>{employee.email}</td>
                                <td>{employee.contact}</td>
                                <td>
                                    <Link to={`/delemp/${employee.id}`} className="nav-link">Delete</Link>
                                </td>
                                <td>
                                    <Link to={`/updemp/${employee.id}`} className="nav-link">Update</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default SearchEmp;
