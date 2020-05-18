import React, { useState } from 'react';
import './RegistrationForm.sass';

import { connect } from 'react-redux';
import {
  set_login
} from '../reducers/Action';


function clickButton(firstName, lastName, email, password, companiesName, role) {
  var body = `firstName=${firstName}&lastName=${lastName}&email=${email}&password=${password}&companiesName=${companiesName}&role=${role}`;
  const request = new XMLHttpRequest();
  request.open('POST', 'http://localhost:8080/KP_webServlet__server_war_exploded/registration', true);
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.send(body);
  request.onload = (res)=>{
    debugger
    let abc = request.response
  };
}

function RegistrationFormFunction(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [companiesName, setCompaniesName] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="registrationForm">
      <div className="form-header">
        <h3>Sign up</h3>
      </div>
      <div className="inputBlock">
        <input className="inputRF" placeholder="Company's name" value={companiesName} onChange={(e) => setCompaniesName(e.target.value)} type="text" />
        <input className="inputRF" placeholder="Select your role" value={role} onChange={(e) => setRole(e.target.value)} type="text" />
        <input className="inputRF" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
        <input className="inputRF" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" />
        <input className="inputRF" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" />
        <div className="inputBlock-password">
          <input className="inputRF" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} type={showPassword ? "text" : "password"} />
          <i className={`inputBlock-password-eye ${showPassword ? "eye-hide" : "eye-view"}`} onClick={() => { setShowPassword(!showPassword) }} />
        </div>
      </div>
      <div className="submitBlock">
        <div className="changeForm" onClick={props.setIsLogIn}>
          LogIn
        </div>
        <span className="btnSendForm" onClick={() => clickButton(firstName, lastName, email, password, companiesName, role)}>Registration</span>
      </div>
    </div>
  );
}

const RegistrationForm = connect(
  (state) => ({
    storeState: state.AppReduser,
  }),
)(RegistrationFormFunction);

export default RegistrationForm;
