import React, { useState } from 'react';
import './RegistrationForm.sass';

import { connect } from 'react-redux';
import {
  set_login
} from '../reducers/Action';


function clickButton(login, password, ) {
  var body = `login=${login}&password=${password}`;
  const request = new XMLHttpRequest();
  request.open('POST', 'http://localhost:8080/KP_webServlet__server_war_exploded/login', true);
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.send(body);
  request.onload = (res)=>{
    debugger
    let abc = request.response
  };
}

function LoginFormFunction(props) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="registrationForm">
      <div className="form-header">
        <h3>Sign in</h3>
      </div>
      <div className="inputBlock">
        <input className="inputRF" placeholder="Name" value={login} onChange={(e) => setLogin(e.target.value)} type="text" />
        <div className="inputBlock-password">
          <input className="inputRF" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} type={showPassword ? "text" : "password"} />
          <i className={`inputBlock-password-eye ${showPassword ? "eye-hide" : "eye-view"}`} onClick={() => { setShowPassword(!showPassword) }} />
        </div>
      </div>
      <div className="submitBlock">
        <div className="changeForm" onClick={props.setIsLogIn}>
          Registration
          </div>
        <span className="btnSendForm" onClick={() => clickButton(login, password)}>LogIn</span>
      </div>
    </div>
  );
}

const LoginForm = connect(
  (state) => ({
    storeState: state.AppReduser,
  }),
)(LoginFormFunction);

export default LoginForm;
