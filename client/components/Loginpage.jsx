import React, { Component, useState } from 'react';

import { useSelector, useDispatch } from "react-redux";
import { signIn } from '../action/action';

import { Redirect } from "react-router-dom";


// return login page info
// pass in the verification object
const Login = props => {
  const user = useSelector(state => state.user);

  if (user.data) return <Redirect to={'/'} />;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onClick = e => {
    dispatch(signIn(username, password));
  };

  const redirect = e => {
    return <Redirect to={'/signup'} />
  };

  return (
    <div className='modal' id='login'>
      <div className='login-header'>
        <div className='image-frame'>
          <img className='logo' src={'../assets/logo.png'} alt={'Logo'}/>
        </div>
        <h1>Dinder Login</h1>
      </div>
      <div>
        <div>
          <div>
            <label htmlFor='user'>Username:</label>
            <input onChange={e => setUsername(e.target.value)} type='text' name='username' id='user'/>
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input onChange={e => setPassword(e.target.value)} type='password' name='password' id='password'/>
          </div>

          <div className='button-group'>
            <button onClick={onClick} className='sign-in' name=' button' id='button' >
              <i className='fa fa-sign-in-alt' />
            </button>
          </div>
          <button onClick={redirect} className='sign-up' name=' button' id='button2' >
            <i className='fas fa-user-plus' />
          </button>
        </div>
      </div>
    </div >

  );
};
export default Login;
