import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { verify } from 'crypto';


// return login page info
// pass in the verification object
const Login = ({ verification, newUserInfo }) => {
  return (
    <div className='modal' id='login'>
      <div className='login-header'>
        <div className='image-frame'>
          <img className='logo' src={'../assets/logo.png'} />
        </div>
        <h1>Dinder Login</h1>
      </div>
      <div>
        <form onSubmit={verification}>
          <div>
            <label for='user'>Username:</label>
            <input type='text' name='username' id='user' />
          </div>
          <div>
            <label for='password'>Password:</label>
            <input type='password' name='password' id='password' />
          </div>

          <div className='button-group'>
            <button className='sign-in' name=' button' id='button' type='submit'>
              <i className='fa fa-sign-in-alt'></i>
            </button>
          </div>
        </form>
        <form onSubmit={newUserInfo}>
          <button className='sign-up' name=' button' id='button2' type='submit' >
            <i className='fas fa-user-plus'></i>
          </button>
        </form>
      </div>
      <div className="loginup">
        <div className="login">LogIn</div>
        <div className="logup">SignUp</div>
      </div>
    </div >

  );
};
export default Login;
