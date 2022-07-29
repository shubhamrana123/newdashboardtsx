import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CardView from '../components/Card';
import { DataGrid, GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid';
import { set } from 'react-hook-form';
function Userlist() {
  const [active, setActive] = useState(false)
  const [optionValue, setOptionValue] = useState([])
  const [department, setDepartments] = useState([])
  const [isSelected,setIsSelected] = useState(null)
  const filter = [
    { id: 1, name: "Filter by Manager Id" },
    { id: 2, name: "Filter by Department Id" }
  ]
  let navigate = useNavigate();
  const [id, setId] = useState([])
  const [userList, setUserList] = useState([])
  const columns = [
    // { field: 'id', headerName: 'ID', width: 70 },
    { field: 'id', headerName: 'Id', width: 170 },
    { field: 'fname', headerName: 'First name', width: 130 },
    { field: 'lname', headerName: 'Last name', width: 130 },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: any) =>
        `${params.row.fname || ''} ${params.row.lname || ''}`,
    },
    { field: 'email', headerName: 'Email', width: 170 },
    { field: 'address', headerName: 'Address', width: 170 },
    { field: 'phone', headerName: 'Phone', width: 170 },
    { field: 'dept', headerName: 'Department', width: 170 },
    { field: 'emp_type', headerName: 'Employee Type', width: 170 },
    { field: 'manager', headerName: 'Manager', width: 170 },

    // { field: 'password', headerName: 'Password', width: 170 },
    {
      field: 'action',
      headerName: 'Action',
      width: 170,
      sortable: false,
      renderCell: (params: any) => {
        const onClick = (id: any) => {
          console.log("Id", params);
          // e.stopPropagation(); // don't select this row after clicking
          // console.log(e.target);
          navigate('/edituser/' + params?.row?.id, { state: { editFormData: params?.row } });
          // const api: GridApi = params.api;
          // const thisRow: Record<string, GridCellValue> = {};

          // api
          //   .getAllColumns()
          //   .filter((c) => c.field !== '__check__' && !!c)
          //   .forEach(
          //     (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
          //   );

          // return alert(JSON.stringify(thisRow, null, 4));
        };
        function deleteUserData() {

        }

        return (<>
          <Button onClick={(id) => onClick(id)}>Edit</Button>
          {/* <Button type ="button" onClick={deleteUserData}>Delete</Button> */}
        </>
        )

      },
    },
    // {
    //     name: "Edit",
    //     options: {
    //       filter: true,
    //       sort: false,
    //       empty: true,
    //       customBodyRender: (value, tableMeta, updateValue) => {
    //         return (
    //           <button onClick={() => window.alert(`Clicked "Edit" for row ${tableMeta.rowIndex}`)}>
    //             Edit
    //           </button>
    //         );
    //       }
    //     }
    // }
  ];
  useEffect(() => {
    const onLoad = async () => {
      const res = await axios.get('http://localhost:3001/api/admin/getAllActiveUsers')
      console.log(res?.data?.result);
      setUserList(res?.data?.result)
      console.log(userList);
    }


    onLoad();
  }, [])
  const getActiveUsers = async () => {
    alert("hi")
    const res = await axios.get('http://localhost:3001/api/admin/getAllActiveUsers')
    console.log(res);
    setActive(true)
    setUserList(res?.data?.result)
    console.log(userList);
    

  }
  const getManagerList = async (e: any) => {
    console.log(e.target.value);
    setIsSelected(e.target.value)
    if (e?.target.value == 1) {
      const getManagersRes = await axios.get('http://localhost:3001/api/admin/getAllManagers');
      console.log(getManagersRes?.data?.result);
      if (getManagersRes.data.statusCode == 200) {
        
        setOptionValue(getManagersRes.data.result);
        console.log(getManagersRes.data.result);
    }

    }
    else 
    if(e?.target.value == 2){
      const departmentRes = await axios.get('http://localhost:3001/api/admin/getDept');
      console.log(departmentRes);
      if (departmentRes.data.statusCode == 200) {
        
        setOptionValue(departmentRes.data.result);
        console.log(departmentRes.data.result);
    }
    }

  }
  const getEmployeeData = (event:any) => {
if(isSelected==2){
  if(event.target.value==2){

  }
}
  }
  const getInActiveUsers = async () => {
    alert("hi")
    const res = await axios.get('http://localhost:3001/api/admin/getAllInactiveUsers')
    console.log(res)
    setUserList(res?.data?.result)

  }
  return (
    <>
      <div className="row">
        <br></br>
        <div className="col-md-3"></div>
        <div className="col-md-1">
          <ul className="nav nav-pills">
            <li className="nav-item">
              {/* <button className='form-control btn btn-primary'   onClick={getActiveUsers}> Active</button> */}
              {/* <a class="nav-link active btn" onClick={getActiveUsers}>Active</a> */}
            </li>



          </ul>
        </div>
        <div className="col-md-4">
          <ul className="nav nav-pills">
            <li className="nav-item">
              {/* <button className='form-control btn btn-primary'   onClick={getActiveUsers}> Active</button> */}
              <a className="nav-link active btn" onClick={getActiveUsers}>Active</a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn" onClick={getInActiveUsers}>Inactive</a>
            </li>


          </ul>
        </div>
      </div> <br />

      <div className="row">
        <br></br>
        <div className="col-md-1"></div>
        <div className="col-md-4">
          <select style={{ width: "200px" }} className='form-control' onChange={(event) => getManagerList(event)}>
            <option value={0}>Filter</option>
            {filter.map((item) => (
              <option value={item.id}>{item.name}</option>))}
          </select>
          <br />

        </div>
        <div className="col-md-2">
          <select className='form-control' onChange={(event)=>getEmployeeData(event)}>
            <option> select </option>
            {optionValue.map((item:any)=>
              (<option key={item.id} value={item.id}>{item.Name||item.name}</option>))}
          </select>
        </div>
      </div>
      <div className='row'>
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={userList}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
            // checkboxSelection
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Userlist