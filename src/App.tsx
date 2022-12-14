import React from 'react';
import './App.css';
import Login from './screens/auth/Login';
import { Route,Routes } from 'react-router-dom';
import Signup from './screens/auth/Signup';
import Dashboard from './pages/Dashboard';
import AddEmployeeForm from './pages/AddEmployeeForm';
import Userlist from './pages/UserList';
import Edit from './pages/EditForm';
import Navbar from './components/Navbar';
function App() {
  return (
   <>
    <Navbar></Navbar>
        <br/>
    <Routes>
          <Route path="/" element={<Login  />} />
          <Route path="/login" element={<Login  />} />
          <Route
            path="signup"
            element={
              <Signup  ></Signup>
            }
          />
          <Route path="dashboard" element={<Dashboard></Dashboard>} />
          <Route path="/addEmployee" element={<AddEmployeeForm></AddEmployeeForm>} />
          <Route path="/userList" element={<Userlist></Userlist>} />
          <Route path="/editUser/:id" element={<Edit></Edit>} />
        </Routes>
   </>
  );
}

export default App;
