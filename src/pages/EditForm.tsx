import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import CardView from '../components/Card'
import { Navigate, useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Edit() {
    const [employeeType, setEmployeeType] = useState([]);
    const [departmentType, setDepartmentType] = useState([]);
    const [managersType, setManagersType] = useState([]);

    let navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { state } = useLocation();
    console.log(state);
    let { id } = useParams()
    console.log(id);
    useEffect(() => {
        const onload = async () => {
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

            let newId = id != undefined ? parseInt(id) : 0;
            console.log(typeof (newId));
            const rese = await axios.get('http://localhost:3001/api/admin/get_EmpInfoById?in_id=' + newId);
            console.log(rese?.data?.result[0]);
            console.log(typeof (newId));
            reset(rese?.data?.result[0])
        }
        onload();



    }, [])
    const editUserDataList = async (data: any) => {
        console.log(data);
        const res = await axios.post('http://localhost:3001/api/admin/updateUser', data)
        console.log(res);
        navigate('/userlist')

    }
    const onCancel = () => {

    }
    return (
        <>

            <div className='row'>

                <div className='col-md-5'></div>
                <div className='col-md-5'>
                    <CardView>
                        <form onSubmit={handleSubmit(editUserDataList)}>
                            <label className='form-label'>
                                First Name:
                            </label> <br />
                            <input className='form-control' type="text" {...register('fname', { required: true, maxLength: 10 })} />  <br />
                            {errors.firstname && <p>Please check your FirstName</p>}
                            <label className='form-label'>
                                Last Name:</label>    <br />
                            <input className='form-control' type="text" {...register('lname', { required: true, maxLength: 10 })} /> <br />
                            {errors.lastname && <p>Please check your LastName</p>}
                            <label className='form-label'>
                                Email:
                            </label>  <br />
                            <input className='form-control' type="text" {...register('email', { required: true })} />  <br />
                            {/* {errors.email && <p>Please check your Email</p>} */}
                            <label className='form-label'> Phone
                            </label>   <br />
                            <input className='form-control' type="text" {...register('phone', { required: true })} /> <br />
                            {/* <label className='form-label'> Department
                            </label>   <br />
                            <input className='form-control' type="text" {...register('dept', { required: true })} /> <br />
                            <label className='form-label'> Manager
                            </label>   <br />
                            <input className='form-control' type="text" {...register('manager', { required: true })} /> <br />
                            {errors.password && <p>Please check your password</p>} */}
                            <label className='form-label'>  Department</label>  <br />
                            <select className='form-control' {...register("dept_id", { required: true })}>
                                {/* <option> Select Department</option> */}
                                {departmentType.map((item: any) => (
                                    <option key={item.id} value={item.id}>
                                        {item.name}
                                    </option>))}
                            </select> <br />
                            <label className='form-label'>  Employee Type</label>  <br />
                            <select className='form-control' {...register("emp_type_id", { required: true })} >
                                {/* <option> Select Employee Type</option> */}
                                {employeeType.map((item: any) => (
                                    <option value={item.id}>
                                        {item.name}
                                    </option>))}

                            </select> <br />
                            <label className='form-label'>  Manager</label>  <br />
                            <select className='form-control' {...register("mngr_id", { required: true })}>
                                {/* <option> Select Managers</option> */}
                                {managersType.map((item: any) => (
                                    <option value={item.id}>
                                        {item.Name}
                                    </option>))}
                            </select> <br />
                            <button className='form-control btn btn-primary' > Save</button>
                            &nbsp;
                            <button className='form-control btn btn-danger' type="button" onClick={onCancel}> Cancel</button>

                        </form>
                    </CardView>
                </div>
            </div>

        </>
    )
}

export default Edit