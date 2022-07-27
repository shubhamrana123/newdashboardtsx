import { Fragment } from "react";
import CardView from "../../components/layout/Card";
import Input from "../../components/layout/form-fields/Input";
import { useForm } from "react-hook-form";


const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm<any>();


    const onLogin = ()=>
    {

    }
    const redirectToSignup = ()=>
    {

    }

    return (
        <Fragment>
            <div className="row">
                <br></br>
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <CardView>
                        <form onSubmit={handleSubmit(onLogin)}>

                            <Input controller="email" label="Email" type="email" register={register} errors={errors} fields={{required:true,maxLength: 100,minLength:1}}  />
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