import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import CardView from '../components/Card'
import { Navigate, useNavigate } from 'react-router-dom'
function AddEmployeeForm() {
    let navigate= useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [employeeType, setEmployeeType] = useState([]);
    const [departmentType, setDepartmentType] = useState([]);
    const [managersType, setManagersType] = useState([]);
    //   useEffect(()=>{

    //   },[])
    

    const onAddEmployee = async(data:any) => {
        const res = await axios.post('http://localhost:3001/api/admin/addUser',data);
        console.log(res);
        alert('hi')
console.log(data);
navigate('/userlist')
    }
    useEffect(() => {
        const onLoad = async () => {
            const res = await axios.get('http://localhost:3001/api/admin/getEmpType');
            console.log("res in get types", res);
            if (res.data.statusCode == 200) {
                console.log(res.data.result);
                setEmployeeType(res.data.result);
                console.log(employeeType);
            }

            const departmentRes = await axios.get('http://localhost:3001/api/admin/getDept');
            console.log(departmentRes);
            if (departmentRes.data.statusCode == 200) {
                setDepartmentType(departmentRes.data.result);

                console.log(departmentType);
            }

            const getManagersRes = await axios.get('http://localhost:3001/api/admin/getAllManagers');
            console.log(getManagersRes);
            if (departmentRes.data.statusCode == 200) {
                setManagersType(getManagersRes.data.result);

                console.log(managersType);
            }
        }
        onLoad();
    }, [])
    return (
        <>
            <div className="row">
                <br></br>
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <CardView>
                        <form onSubmit={handleSubmit(onAddEmployee)}>
                            <label>FirstName</label> <br />
                            <input className='form-control' {...register("fname", { required: true })} />  <br />
                            <label>LastName</label>  <br />
                            <input className='form-control' {...register("lname", { required: true })} />  <br />
                            <label>Phone</label>  <br />
                            <input className='form-control' {...register("phone", { required: true })} />  <br />
                            <label>Email</label>  <br />
                            <input className='form-control' {...register("email", { required: true })} />  <br />
                            <label>Password</label>  <br />
                            <input className='form-control' {...register("password", { required: true })} /> <br />
                            <label>Address</label>  <br />
                            <input className='form-control' {...register("address", { required: true })} /> <br />
                            {/* <select className='form-control' {...register("emp_type",{required:true})}>
        <option> Select Employee</option>
        <option></option>
    </select> */}
                            {/* <label>Password</label>  <br/> */}
                            {/* <input className='form-control' {...register("emp_type_id",{required:true})}/> <br/> */}
                            <label className='form-label'>  Department</label>  <br/>
                            <select className='form-control' {...register("dept_id", { required: true })}>
                                <option> Select Department</option>
                                {departmentType.map((item:any) => (
                                    <option key={item.id} value={item.id}>
                                        {item.name}
                                    </option>))}
                            </select> <br />
                            <label className='form-label'>  Employee Type</label>  <br/>
                            <select className='form-control' {...register("emp_type_id", { required: true })} >
                                <option> Select Employee Type</option>
                                {employeeType.map((item:any) => (
                                    <option  value={item.id}>
                                        {item.name}
                                    </option>))}

                            </select> <br />
                            <label className='form-label'> Manager</label>  <br/>
                            <select className='form-control' {...register("mngr_id", { required: true })}>
                                <option> Select Managers</option>
                                {managersType.map((item:any) => (
                                    <option  value={item.id}>
                                        {item.Name}
                                    </option>))}
                            </select> <br />

                            <button className='form-control btn btn-success'>Save</button>
                            <button className='form-control btn btn-light'>Cancel</button>
                        </form>
                    </CardView>
                </div>
            </div>
        </>
    )
}

export default AddEmployeeForm