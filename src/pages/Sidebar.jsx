import React, { Fragment,useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import dashboard from '../assets/dashboard.svg';
import staff from '../assets/staff.svg';
import student from '../assets/student.svg';
import organize from '../assets/organize.svg';
import settings from '../assets/settings.svg';
import logout from '../assets/logout.svg';


function Sidebar() {
    const [showSettings, setShowSettings] = useState(false);
    

    const toggleSettings = () => {
      setShowSettings(!showSettings);
    };
    const navigate=useNavigate();
    const Stafftbtn=()=>{
      navigate('/Staff');
    }
    const dashtbtn=()=>{
      navigate('/Dashboard');
    }
    
    
    const logoutbtn=()=>{
      navigate('/login');
  }
  return (
   <Fragment>
    <div className="sidebar-whole-div">
        <button className='sidebar-button'  onClick={dashtbtn}><img src={dashboard}/>Dashboard</button>
        <button className='sidebar-button'  onClick={Stafftbtn}><i className="fa-duotone fa-solid fa-user-group"></i>Staff</button>
        <button className='sidebar-button' ><i className="fa-solid fa-book-open-reader"></i>Students</button>
        <button className='sidebar-button'><i className="fa-solid fa-shapes"></i>Organize Class</button>
        <div className="settings-container" style={{ height: showSettings ? '200px' : '50px' }}>
        <button className='sidebar-button settings-button' onClick={toggleSettings}><i className="fa-solid fa-gear"></i>Settings</button>
        {showSettings && (
          <div className="settings-dropdown">
            <button className="settings-item">Department</button>
            <button className="settings-item">Semester</button>
            <button className="settings-item">Section</button>
            <button className="settings-item">Subjects</button>
          </div>
        )}
        </div>
       <button className='sidebar-button logout-button' onClick={logoutbtn}><img src={logout}/><Link to="/login">Logout</Link> </button>
        </div>
   </Fragment>
  )
}

export default Sidebar