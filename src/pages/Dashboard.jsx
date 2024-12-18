import React, { Fragment, useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import success from '../assets/successimage.svg';
import mypic from '../assets/mypic.png';
function Dashboard() {
   const [step,setStep]=useState(1);
   const handleResetPassword = () => {
    setStep(2); 
  };
  const handleUpdatePassword = () => {
    setStep(3); 
  };
  const [selectedImage, setSelectedImage] = useState(mypic);

  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file); 
      setSelectedImage(imageURL);
    }
  };
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };
  return (
   <Fragment>
    <Navbar/>
    <div className="dashboard-whole-div">
        <div>
            <Sidebar/>
        </div>
        <div className='dashboard-live-div'>
            <div className='dashboard-percentage-div'>
                <div className='dashboad-green'>
                    <p>Working Staff in Deapartment</p>
                </div>
                <div className='dashboad-blue'>
                <p>Total Students in Department</p>
                </div>
                <div className='dashboad-red'>
                <p>Overall Attendance Percentage of Staff</p>
                </div>
                <div className='dashboad-darkgreen'>
                <p>Overall Attendance Percentage of Students</p>
                </div>
            </div>
            <div className='dashboard-absebt-div'>
                <div className="staff-absent-div">
                    <p><i className="fa-duotone fa-solid fa-user-group"></i>Today's Absent Staff</p>
                    <hr/>
                    <div className="viewall-div">
                    <button><h5>View All</h5></button>
                    </div>
                    
                </div>
                <div className="student-absent-div">
                <p><i className="fa-solid fa-book-open-reader"></i>Today's Absent Students</p>
                <hr/>
                <div className="viewall-div">
                    <button><h5>View All</h5></button>
                    </div>
                </div>
            </div>
        </div>
        <div className='dashboard-profile-div'>
            {step ===1 && (
                <div>
            <div>
            <p><i className="fa-solid fa-user"></i>My Profile</p>
            <hr/>
            <div className="dashboard-profilepic-div">
            <label htmlFor="fileInput">
            <img
              src={selectedImage}
              alt="Profile"
              className="profile-image"
              style={{ cursor: "pointer" }} 
            />
          </label>
          <input
            type="file"
            id="fileInput"
            accept="image/*" 
            style={{ display: "none" }} 
            onChange={handleImageChange}
          />
     <h3 className="profile-name">Abishek</h3>
     <p className="profile-role" style={{color:"#aaaa",marginTop:"-10px"}}>Full-Stack Developer</p>
    <hr className='hr1'style={{marginLeft:"4px"}}/>
     <div className="profile-details">
    <p><i className="fa-solid fa-envelope"></i> abimoni2003@gmail.com</p>
    <p><i className="fa-solid fa-phone"></i> +91 8870224305</p>
    <p><i className="fa-solid fa-building"></i> Mathematics</p>
    <p><i className="fa-solid fa-medal"></i> HOD</p>
    <p><i className="fa-solid fa-user-circle"></i> James (Principal)</p>
   <br/>
    <hr className='hr1 '/>
  </div>
  </div>
 </div>

            <button className="reset-password-button"  onClick={handleResetPassword}>
    <i className="fa-solid fa-lock"></i>  <span>Reset Password</span>
          <i className="fa-solid fa-arrow-right"></i>
  </button>
  </div>
)}
{step === 2 && (
            <div className="reset-password-div">
              <div>
                <p>
                  <i
                    className="fa-solid fa-arrow-left"
                    style={{ cursor: "pointer" }}
                    onClick={() => setStep(1)}
                  ></i>{""}
                  Reset Password
                </p>
               
                <label>Current Password</label>
                <input
            type={showPassword.current ? "text" : "password"}
            placeholder="Enter Your Current Password"
            className="password-input"
          />
          <i
            className={`fas ${showPassword.current ? "fa-eye" : "fa-eye-slash"} eye1`}
            onClick={() => togglePasswordVisibility("current")}
          ></i>
                <label>New Password</label>
                <input
                  type={showPassword.new ? "text":"password"}
                  placeholder="Enter New Password"
                  className="password-input"
                />
                <i className={`fas ${showPassword.new ? "fa-eye":"fa-eye-slash"} eye2`}
                onClick={()=>togglePasswordVisibility("new")}></i>
                <label>Confirm Password</label>
                <input
                  type={showPassword.confirm ? "text":"password"}
                  placeholder="Confirm New Password"
                  className="password-input"
                />
                <i className={`fas ${showPassword.confirm ? "fa-eye":"fa-eye-slash"} eye3`}
                onClick={()=>togglePasswordVisibility("confirm")}></i>
                <button
                  className="update-password-button"
                  onClick={handleUpdatePassword}
                >
                  <span className='up-btn'>UPDATE PASSWORD</span>
                </button>
              </div>
            </div>
          )}
             {step === 3 && (
            <div className="password-success-div">
             <div className='successfull-popup'>
                <div className='lock-div'>
                  <img src={success}/>  
              <p style={{textAlign:"center"}}>Password Updated<br/> Successfully!</p>
              <button
                className="okay-button"
                onClick={() => setStep(1)} 
              >
                <span className="okay-text">OKAY!</span>
              </button>
              </div>
            </div>
            </div>
          )}
        </div>
    </div>
   </Fragment>
  )
}

export default Dashboard