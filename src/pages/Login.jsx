import React from 'react'
import { Fragment } from 'react'
import loginlogo from '../assets/loginpagelogo.svg';

import { Link,useNavigate } from 'react-router-dom'
function Login() {
    const navigate=useNavigate();
    const Stafftbtn=()=>{
      navigate('/dashboard');
    }
    return (
        <Fragment>
            <div className='login-whole-div'>
                <div className='login-container'>
                    <div className="login-image-div">
                        <img src={loginlogo} /></div>
                    <h3 className='login-title'>Admin Login</h3>
                    <form action="" className="login-form">
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email"
                                placeholder='Enter registered Email Address' />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <div className="password-field">
                                <input type="password" id='password'
                                    placeholder='Enter Password' />
                                <i class="fas fa-eye"></i>
                            </div>
                        </div>
                        <button className='login-button'  onClick={Stafftbtn}>Login</button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Login