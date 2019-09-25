import React, { Component } from "react";
import { Redirect } from "react-router-dom";


const Signup = ({ newUserInfo }) => {
    return (
        <div>
            <div>
                <h1>Dinder Signup</h1>
            </div>
            <form onSubmit={newUserInfo}>
                <div>
                    <label for="user"> Username: </label>
                    <input type="text" name="username" id="user" />
                </div>
                <div>
                    <label for="password"> Password: </label>
                    <input type="password" name="password" id="password" />
                </div>
            </form>
            <div >
                <button className="btnSignup" name="button" id="button" type="submit">
                    <i className='fas fa-user-plus'></i>
                </button>
            </div>
            <div className="logup">SignUp</div>

        </div>
    )
}
export default Signup;