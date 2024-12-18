import React from 'react'
import { Fragment } from 'react'
import navlogo from '../assets/navbarlogo.svg';
function Navbar() {
  return (
    <Fragment>
      <div className="navbar-whole-div">
        <div className='navbar-logo'>
          <img src={navlogo} />
          <h3 className='navbar-title'>College Attedance Admin Panel</h3>
        </div>
        <div className='navbar-search'>
          <input type='text' placeholder='search...' />
          <i class="fas fa-search"></i>
        </div>
        <div className='navbar-icons'>
          <div className='navbar-icon-back'> <i className="fas fa-bell"></i></div>
          <div className='navbar-icon-back'> <i className="fas fa-headset"></i></div>
          <div className='navbar-icon-back'><i className="fas fa-question"></i></div>
        </div>
      </div>
    </Fragment>
  )
}
export default Navbar