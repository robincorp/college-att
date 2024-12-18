import settingLogo from '../assets/bxs-cog.svg';
import plus from '../assets/bxs-plus-circle.svg'
import '../../src/App.css';
import staffLogo from '../assets/bxs-group.svg';
import teacher from '../assets/teacher.jpg';
import editicon from '../assets/bxs-edit-alt.svg'
import calendaricon from '../assets/bxs-calendar-alt.svg'
import staffid from '../assets/bxs-id-card.svg'
import Navbar from './Navbar';
import hash from '../assets/bx-hash.svg'
import building from '../assets/bxs-building.svg'
import { Fragment } from 'react';
function Department() {
  const departments = [
    {
      id: 1,
      teacherName: "Science",
      status: "Active",
      deptId: "ST2615",
      deptCode: "A017",
      staffCount: "ST017",
      studentCount: "STU0017"
    },
    {
      id: 2,
      teacherName: "Math",
      status: "Active",
      deptId: "MT2616",
      deptCode: "B018",
      staffCount: "ST018",
      studentCount: "STU0018"
    },
    {
      id: 3,
      teacherName: "English",
      status: "Inactive",
      deptId: "EN2617",
      deptCode: "C019",
      staffCount: "ST019",
      studentCount: "STU0019"
    },
    {
      id: 4,
      teacherName: "History",
      status: "Active",
      deptId: "HS2618",
      deptCode: "D020",
      staffCount: "ST020",
      studentCount: "STU0020"
    }
  ];
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <div className="innerheader">
          <img className="image" src={settingLogo} alt="settingLogo" />
          <p className="para">Settings</p>
          <button className="adddept-btn">
            <img src={plus} alt="Icon" className="button-icon" />
            Add Department
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
          {departments.map((dept) => (
            <div className="profile-card" key={dept.id}>
              <h2 className="teachername">{dept.teacherName}</h2>
              <p className="status">{dept.status}</p>
              <div className="staffdetails">
                <div className="left-content">
                  <p>
                    <img src={staffid} alt="Staff Icon" className="staffdetails-icon" />
                    Dept ID
                  </p>
                  <p>
                    <img src={hash} alt="Hash Icon" className="staffdetails-icon" />
                    Dept. Code
                  </p>
                  <p>
                    <img src={building} alt="Building Icon" className="staffdetails-icon" />
                    Staffs
                  </p>
                  <p>
                    <img src={building} alt="Building Icon" className="staffdetails-icon" />
                    Students
                  </p>
                </div>
                <div className="right-content">
                  <p>{dept.deptId}</p>
                  <p>{dept.deptCode}</p>
                  <p>{dept.staffCount}</p>
                  <p>{dept.studentCount}</p>
                </div>
              </div>
              <div className="icons">
                <button className="edit-icon-button">
                  <img src={editicon} alt="Edit Icon" className="edit-icon-img" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
export default Department;