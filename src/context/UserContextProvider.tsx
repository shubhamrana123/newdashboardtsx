/** es-lint disable */
import React from "react";
import { useState } from "react";
import UserContex, { UserContexType,IUserContex } from "./UserContext";
import { useNavigate } from "react-router-dom";
import { IUserInfo } from "../type/common.type";

function UserContextProvider(props: any) {
  let navigate = useNavigate()
  const [userInfo, setUserInfo] = useState<IUserContex>({
    id: 0,
    fname: "",
    lname: "",
    email: "",
    phone: "",
    country: ""
  });
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);

  const onLoginHandler = (userInfo:any) => {
    // setIsUserLoggedIn(true);
    setUserInfo(userInfo)
    // console.log(userInfo);
    console.log("Usr Ctx 2",userInfo);
    // const _userInfo = {
    // }
    // setUserInfo(_userInfo);
  };

  const onLogOutHandler = () => {
    alert("logout")

    setIsUserLoggedIn(false);
    // setUserInfo(null);
    navigate("../Login");
  };

  let defaultObj: UserContexType  = {
    isUserLoggedIn : isUserLoggedIn,
    userInfo: userInfo,
    loginHandler: onLoginHandler,
    logoutHandler: onLogOutHandler
  };

  return (
    <UserContex.Provider value={defaultObj}>
      {props.children}
    </UserContex.Provider>
  );
}

export default UserContextProvider;
