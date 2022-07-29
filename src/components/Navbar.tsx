import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// import { data } from "../pages/Login";

import UserContex from "../context/UserContext";
function Navbar() {
  let usrContx = useContext(UserContex);
  const [userName, setUserName] = useState('')
  // const newData = useContext(data);
  // console.log("contextdata", newData);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  let navigate = useNavigate();


  const onLogout = () => {
    usrContx?.logoutHandler();

  }
  const addEmployeeList = () => {
    navigate('/addEmployee')
  }
  const onAddEmployee = () =>{
    navigate('addEmployee')
  }
  const showDashboardPage = () =>{
    navigate('/dashboard')
  }
const showEmployeeList = () =>{
  navigate('/userlist')
}
  useEffect(() => {
    // const res =  axios.post("http://localhost:3001/api/admin/login", data);
    console.log("effect", usrContx?.userInfo)
    // if (res.data.result?.ErrorMessage) {

    // }
    setUserName(`${usrContx?.userInfo?.fname}  ${usrContx?.userInfo?.lname}`);
  }, [usrContx?.userInfo?.fname])
  return (
    // <nav class="navbar navbar-light bg-light">
    //   <div class="container-fluid">
    //     <a class="navbar-brand">Navbar</a>

    //     <form class="d-flex" style={{display: "inline-block"}}>
    //       {usrContx.isUserLoggedIn && <div >

    //         {usrContx.isUserLoggedIn &&
    //           <select className="form-control me-2" onChange={addEmployeeList}>
    //             <option>{userName.toUpperCase()}</option>
    //             <option>Add Employee</option>
    //             <option>Add Managers</option>
    //           </select>}
    //         <button class="btn btn-outline-danger " type="submit" onClick={onLogout}>
    //           Logout
    //         </button>
    //         </div>}
    //       </form>
    //       </div>
    // </nav>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand border-remove-btn" >Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active border-remove-btn btn" aria-current="page" onClick={showDashboardPage} >Home</a>
          </li>
          <li className="nav-item" >
            <a className="nav-link btn border-remove-btn"  onClick={onAddEmployee} key={1} >Add Employee</a>
          </li>
          
          <li className="nav-item dropdown">
            <a className="nav-link border-remove-btn"  role="button" onClick={showEmployeeList}  >
              Employee List
            </a>
          </li>
          {/* <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li> */}
        </ul>
          <span className="text-light"> <b>{usrContx?.isUserLoggedIn && userName.toUpperCase()} </b></span> &nbsp;&nbsp;
          <button className="btn btn-outline-danger"  onClick={onLogout}>Logout</button>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
