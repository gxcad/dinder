import React, { Component, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signUp } from '../action/action';
import { Redirect } from "react-router-dom";


const Signup = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onClick = e => {
    dispatch(signUp(username, password));
  };

  return (
    <div id={'signUp'}>
      <div className={'header'}>
        <h1>Dinder Signup</h1>
      </div>
      <div className={'body'}>
        <div className={'username'}>
          <label htmlFor="user"> Username: </label>
          <input type="text" name="username" id="user" onChange={e => setUsername(e.target.value)}/>
        </div>
        <div className={'password'}>
          <label htmlFor="password"> Password: </label>
          <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)}/>
        </div>
        <div className={'button'}>
          <button onClick={onClick} className="btnSignup" name="button" id="button" type="submit">
            <i className='fas fa-user-plus' />
          </button>
        </div>
      </div>
      {/*<form onSubmit={newUserInfo}>*/}


      {/*</form>*/}
      {/*<div className="logup">SignUp</div>*/}
    </div>
  )
};
export default Signup;