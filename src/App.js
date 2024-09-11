import React from "react";
import ReactDom from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import $ from 'jquery'; 
import Popper from 'popper.js'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter,Routes,Route,NavLink,Link} from "react-router-dom";
import AddEmp  from "./component/addemp";
import ViewEmp from "./component/viewemp";
import DelEmp from "./component/dltemp";
import UpdateEmp from "./component/updemp";
import SearchEmp from "./component/searchemp";
import "./index.css";
let App=()=>
{
 return(
  <>
  <div className="container-fluid">
     <BrowserRouter>
       <NavLink>
        <ul className="navbar-nav me-auto mb-2 bg-dark">
          <li className="nav-item"><Link to="/add" className="nav-link text-white">Add Employee</Link></li>
	        <li className="nav-item"><Link to="/view" className="nav-link text-white">View Employee</Link></li>
	        <li className="nav-item"><Link to="/search" className="nav-link text-white">Search Emplyoee</Link></li>
	      </ul>

       </NavLink>
	     <Routes>
	      <Route path="/add"  element={<AddEmp/>}/>
	      <Route path="/view" element={<ViewEmp/>}/>
        <Route path="/delemp/:eid" element={<DelEmp/>}/>
        <Route path="/updemp/:eid" element={<UpdateEmp/>}/>
        <Route path="/search" element={<SearchEmp/>}/>
	     </Routes>
    </BrowserRouter>
    </div>
  </>
 );
}
export default App;
