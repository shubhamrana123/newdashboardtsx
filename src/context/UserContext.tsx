import React from "react";
import { IUserInfo } from "../type/common.type";

export interface IUserContex
{
   id: 0,
   fname:string,
   lname : string,
   phone : string,
   country : string,
   email : string
}

export type UserContexType =
{ 
  isUserLoggedIn : boolean,
  userInfo : IUserContex,
  loginHandler : (data : IUserContex)=> void,
  logoutHandler : ()=> void
}
const UserContex = React.createContext<UserContexType| null>(null);

export default UserContex;
