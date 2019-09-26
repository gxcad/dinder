import React, { Component, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signUp } from '../action/action';
import { Redirect } from "react-router-dom";


const Signup = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    dispatch(signUp(username, password));
  };

  return (
    <div id={'signUp'}>
      <div className={'header'}>
        <h1>Dinder Sign-Up</h1>
      </div>
      <div className={'body'}>
        <div className={'modal'}>
          <form onSubmit={onSubmit} >
            <div className={'username'}>
              <label htmlFor="user"> Username: </label>
              <input required type="text" name="username" id="user" value={username} onChange={e => setUsername(e.target.value)}/>
            </div>
            <div className={'password'}>
              <label htmlFor="password"> Password: </label>
              <input required type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className={'button'}>
              <button className="btnSignup" name="button" id="button" type="submit">
                <i className='fas fa-user-plus' />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};
export default Signup;