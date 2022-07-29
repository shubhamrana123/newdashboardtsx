import { Fragment,useContext } from "react";
import CardView from "../../components/Card";
import Input from "../../components/layout/form-fields/Input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserContex, { IUserContex } from "../../context/UserContext";
const Login = () => {
    let navigate = useNavigate();
    let userCtx = useContext(UserContex);
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm<any>();


    const onLogin = async (data:any)=>
    {
        console.log("onLogin")
        const res = await axios.post("http://localhost:3001/api/admin/login", data);
        // console.log(data);
        const { id, fname, lname, email, phone,country } = res?.data?.result
        const userData : IUserContex = { id, fname, lname, email, phone,country }

        console.log("userData",userData);
        // setAdminData(res.data.result)
        // console.log(adminDatas);
        console.log("userCtx",userCtx)
        userCtx?.loginHandler(userData);
        // const {id,UserName} = {res.data.result.id,res.data.result.id,res.data.result.id}
        if (res.data.statusCode == 200) {
          if (res.data.result?.ErrorMessage) {
            alert(res.data.result?.ErrorMessage);
          } else {
            navigate('/dashboard')
          }
        }
    
    }
    const redirectToSignup = ()=>
    {
        navigate("../signup");
    }

    return (
        <Fragment>
            <div className="row">
                <br></br>
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <CardView>
                        <form onSubmit={handleSubmit(onLogin)}>

                            <Input controller="email" label="Emails" type="email" register={register} errors={errors} fields={{required:true,maxLength: 100,minLength:1}}  />
                            <Input controller="password" label="Password" type="password" register={register} errors={errors} fields={{required:true,maxLength: 100,minLength:1}} />
                            <br />
                            <button className="form-control btn btn-success">
                                Login
                            </button>
                            <br></br>
                        </form>
                        <br />
                    </CardView>
                    <li className="btn" id="redirectToSignup" onClick={redirectToSignup}>
                        New Around Here? Then Signup
                    </li>
                </div>
                   
            </div>
        </Fragment>
    )
}
export default Login;