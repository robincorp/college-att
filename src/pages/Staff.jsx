import '../../src/App.css';
import staffLogo from '../assets/bxs-group.svg';
import teacher from '../assets/teacher.jpg';
import editicon from '../assets/bxs-edit-alt.svg'
import calendaricon from '../assets/bxs-calendar-alt.svg'
import staffid from '../assets/bxs-id-card.svg'
import plus from '../assets/bxs-plus-circle.svg'
import hash from '../assets/bx-hash.svg'
import building from '../assets/bxs-building.svg'
import { Fragment } from 'react'
import staffiimg from '../assets/teacher2.jpg'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import backarrow from '../assets/navigate_next_black_24dp.svg'
import frontarrow from '../assets/navigate_next_black_24dpp.svg'

// import statusimg from '../assets/bx-radio-circle-markedred.svg'
import { FaRegDotCircle } from 'react-icons/fa';
import React, { useState, useEffect } from "react";


function Staff() {
  const staffList = [
    {
      id: 1,
      name: 'Smith',
      status: 'Active',
      staffId: 'ST2615',
      deptCode: 'A017',
      deptName: 'Physics',
      profileImage: '../../src/assets/teacher2.jpg',
    },

  ];


  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentStaffList = staffList.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(staffList.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const statusData = [
    {
      label: 'Active',
      count: staffList.filter(staff => staff.status === 'Active').length,
      color: 'green',
      icon: <FaRegDotCircle color="green" />,
    },
    {
      label: 'Inactive',
      count: staffList.filter(staff => staff.status === 'Inactive').length,
      color: 'red',
      icon: <FaRegDotCircle color="red" />,
    },
  ];


  const [currentWeek, setCurrentWeek] = useState("This Week");

  // Sample attendance data
  const attendanceData = {
    "This Week": [50, 70, 80, 95, 85, 40, 5],
    "Last Week": [60, 75, 90, 80, 70, 30, 10],
  };

  // State for chart and average percentage
  const [barData, setBarData] = useState(attendanceData["This Week"]);
  const [averagePercent, setAveragePercent] = useState(0);

  // Calculate average percentage
  const calculateAverage = (data) => {
    const average = Math.round(data.reduce((a, b) => a + b) / data.length);
    setAveragePercent(average);
  };

  // Update attendance data when week changes
  const updateWeek = (week) => {
    setCurrentWeek(week);
    const newData = attendanceData[week];
    setBarData(newData);
    calculateAverage(newData);
  };

  useEffect(() => {
    calculateAverage(attendanceData["This Week"]);
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div className="master">
      <Sidebar />
        <div className="container">
          
          <div className="innerheader">
            <img className="image" src={staffLogo} alt="Staff Logo" />
            <p className="para">staff</p>
            <button className="addstaff-btn">
              <img src={plus} alt="Icon" className="button-icon" />
              Add Staff
            </button>
          </div>
          <hr
            style={{
              border: 'none',
              height: '2px',
              backgroundColor: '#7070701A',
            }}
          />

          <div className="grid-container">
            {currentStaffList.map((staff, index) => (
              <div key={`${staff.id}-${index}`} className="profile-card">
                <img
                  className="teacherimage"
                  src={staff.profileImage}
                  alt={`${staff.name}'s Profile`}
                />
                <h2 className="teachername">{staff.name}</h2>

                <p className="status">
                  <img
                    className="status-icon"
                    src={staff.status === 'Active' ? '../../src/assets/bx-radio-circle-markedgreen.svg' : '../../src/assets/bx-radio-circle-markedred.svg'}
                    alt={staff.status === 'Active' ? 'Active Status' : 'Inactive Status'}
                  />
                  {staff.status}
                </p>
                <div className="staffdetails">
                  <div className="left-content">
                    <p><img className='staffdetails-icon' src={staffid} alt="staffid" />Staff ID</p>
                    <p><img className='staffdetails-icon' src={hash} alt="staffid" />Dept. Code</p>
                    <p><img className='staffdetails-icon' src={building} alt="staffid" />Dept. Name</p>
                  </div>
                  <div className="right-content">
                    <p>{staff.staffId}</p>
                    
                    <p>{staff.deptCode}</p>
                    <p>{staff.deptName}</p>
                  </div>
                </div>
                <div className="icons">
                  <button className="edit-icon-button">
                    <img src={editicon} alt="Edit Icon" className="edit-icon-img" />
                  </button>

                  <button className="calender-icon-button">
                    <img src={calendaricon} alt="Calendar Icon" className="calender-icon-img" />
                  </button>
                </div>
              </div>
            ))}
          </div>



          <div className="pagination">

            <button
              className="pagination-previous-btn"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''
                  }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}


            <button
              className="pagination-next-btn"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>

        </div>
        <div className='staffsttentance-maincontainer'>


          <div className="staffattentance">
            <p className="staffattentance-heading">Staff Attendance</p>
            <hr
              style={{
                border: "none",
                height: "2px",
                backgroundColor: "#7070701A",
              }}
            />
            <div className="week-navigation">
              <button onClick={() => updateWeek("Last Week")}><img src={backarrow} className='arrows-nav'></img></button>
              <span>{currentWeek}</span>
              <button onClick={() => updateWeek("This Week")}><img src={frontarrow} className='arrows-nav'></img></button>
            </div>
            <div className="attendance-data">
              <div id="attendance-percent">{averagePercent}%</div>
              <div className="bar-chart">
                {barData.map((value, index) => (
                  <div
                    key={index}
                    className="bar"
                    style={{ height: `${value}%` }}
                  >
                    <span>{["M", "T", "W", "T", "F", "S", "S"][index]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='active-inactivestatus'>
            <div className="status-header">
              <span>Status</span>
            </div>
            <div className="status-body">
              {statusData.map((status, index) => (
                <div key={index} className="status-row">
                  <div className="status-info">
                    {status.icon}
                    <span className="status-label">{status.label}</span>
                  </div>
                  <div className="status-count">{status.count}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </Fragment>
  );
}

export default Staff;















