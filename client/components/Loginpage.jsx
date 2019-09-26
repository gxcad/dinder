import React, { Component, useState, useEffect } from 'react';

import { useSelector, useDispatch } from "react-redux";
import { signIn } from '../action/action';

import { Redirect } from "react-router-dom";


// return login page info
// pass in the verification object
const Login = props => {
  const user = useSelector(state => state.user);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    dispatch(signIn(username, password));
  };

  const redirect = e => {
    e.preventDefault();
    props.history.push('/signup');
  };

  // useEffect(() => {
  //   console.log(user);
  //   if (user.data) return props.history.push('/');
  // }, [user]);

  return user.data ? (
    <div id='SignIn'>
      <div className={'header'}>
        <h1>Dinder Sign-In</h1>
      </div>
      <div className={'body'}>
        <div className={'modal'}>
          {
            user.data && <div>{user.data.user}</div>
          }
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
              <button className='sign-in' name=' button' id='button' type={'submit'}>
                <i className='fa fa-sign-in-alt' />
              </button>
              <button onClick={redirect} className='sign-up' name=' button' id='button2' >
                <i className='fas fa-user-plus' />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div >
  ) : <div>Hello</div>;
};
export default Login;
