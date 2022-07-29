import React, { useContext } from "react";
import CardView from "../components/Card";
import UserContex from "../context/UserContext";
import femaleIcon from '../assets/img/female-icon.jpg';
import { IUserInfo } from "../type/common.type";
// import { datas } from "./Login";

function Dashboard() {
//   let adminDatas = useContext(datas);
//   console.log(adminDatas);

  const usrCtx = useContext(UserContex);
  // console.log(usrCtx.userInfo);
  return (
    <>

      <div className="row">
        <br></br>
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <CardView forIcon={true}> 
            <img className="text-center" src={femaleIcon}></img>
            <br/> 
              {/* <h4 className="text-center">{().toUpperCase()} {(.toUpperCase()}</h4> */}
            </CardView>

          <hr />
          <CardView>
            <h3>User Details</h3>
            <label className="form-control"> <b>Login Id: </b>   {usrCtx?.userInfo?.id}</label> <br />
            <label className="form-control"> <b>Email: </b>  {usrCtx?.userInfo?.email}</label>  <br />
            <label className="form-control">  <b>Phone: </b>  {usrCtx?.userInfo?.phone}</label>   <br />
            <label className="form-control">  <b>Country: </b>  {usrCtx?.userInfo?.country}</label>
          </CardView>

        </div>
      </div>
    </>
  )

}

export default Dashboard;
