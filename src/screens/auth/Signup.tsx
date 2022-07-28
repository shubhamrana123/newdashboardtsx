import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";


import { Navigate, useNavigate } from "react-router-dom";
import Input from "../../components/layout/form-fields/Input";
import SelectBox from "../../components/layout/form-fields/SelectBox";
const Signup = () =>{
    const axios = require("axios").default;
    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm();
    const [value, setValue] = useState();
    let navigate = useNavigate();
    const countryList = [
      {
        id: 1,
        name: "India"
      },
      {
        id: 2,
        name: "Usa"
      },
      {
        id: 3,
        name: "Uk"
      },
      {
        id: 4,
        name: "Australia"
      },
      {
        id: 5,
        name: "Saudi Arabia"
      }
    ];
    const onSignup = async (data:any) => {
      console.log(data);
      let res = await axios.post("http://localhost:3001/api/admin/signUp", data);
  
      if (res.data.statusCode == 200) {
        if (res.data.result?.ErrorMessage) {
          alert(res.data.result?.ErrorMessage);
        } else {
          navigate("/login");
        }
      }
      // props.addUser(data);
      // navigate('/dashboard')
    };
    return (
      <>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <form onSubmit={handleSubmit(onSignup)}>
  
              <Input register={register} label="FirstName" controller="fname" type="text" errors={errors} fields={{required:true,maxLength: 100,minLength:1}} />
              <Input register={register} label="LastName" controller="lname" type="text" errors={errors} fields={{required:true,maxLength: 100,minLength:1}} />
              <Input register={register} label="Email" controller="email" type="email" errors={errors} fields={{required:true,maxLength: 100,minLength:1}}/>
              <Input register={register} label="Password" controller="password" type="password" errors={errors} fields={{required:true,maxLength: 100,minLength:1}}/>
              <br />
              <SelectBox register={register} controller="country" errors={errors} fields={{required:true,maxLength: 100,minLength:1}} country={countryList}/>
              <br />
           
              <br />
              <button className="form-control btn btn-success">Signup</button>
            </form>
          </div>
        </div>
      </>
    );
}
export default Signup