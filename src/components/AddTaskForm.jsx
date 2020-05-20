import React, { useState } from 'react';
import './AddTaskForm.sass';

import { connect } from 'react-redux';
import { is_sending } from '../reducers/Action'


function clickButton(taskName, description, developer, time, projectName, urgency, deadline, props) {
  props.dispatch(is_sending(true));
  var body = `taskName=${taskName}&description=${description}&developer=${developer}&time=${time}&projectName=${projectName}&urgency=${urgency}&deadline=${deadline}&companiesName=${props.storeState.profile.company}`;
  const request = new XMLHttpRequest();
  request.open('POST', 'http://localhost:8080/KP_webServlet__server_war_exploded/addTask', true);
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.send(body);
  request.onload = (res)=>{
    debugger
    let abc = request.response
    props.dispatch(is_sending(false));
  }
}

function AddTaskFormFunction(props) {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [developer, setDeveloper] = useState('');
  const [time, setTime] = useState('');
  const [projectName, setProjectName] = useState('');
  const [urgency, setUrgency] = useState('');
  const [deadline, setDeadline] = useState('');

  return (
    <div className="addDeveloperForm">
      <div className="form-header">
        <h3>Please add new Task</h3>
      </div>
      <div className="inputBlock">
      <input className="inputRF" placeholder="Project" value={projectName} onChange={(e) => setProjectName(e.target.value)} type="text" />
        <input className="inputRF" placeholder="Task name" value={taskName} onChange={(e) => setTaskName(e.target.value)} type="text" />
        <input className="inputRF" placeholder="Write description" value={description} onChange={(e) => setDescription(e.target.value)} type="text" />
        <input className="inputRF" placeholder="Developer" value={developer} onChange={(e) => setDeveloper(e.target.value)} type="text" />
        <input className="inputRF" placeholder="Time to need" value={time} onChange={(e) => setTime(e.target.value)} type="text" />
        <input className="inputRF" placeholder="Indicate urgency" value={urgency} onChange={(e) => setUrgency(e.target.value)} type="text" />
        <input className="inputRF" placeholder="Indicate deadline" value={deadline} onChange={(e) => setDeadline(e.target.value)} type="date" />
      </div>
      <div className="submitBlock">
        <span className="btnSendForm" onClick={() => clickButton(taskName, description, developer, time, projectName, urgency, deadline, props)}>Add new Task</span>
      </div>
    </div>
  );
}

const AddTaskForm = connect(
  (state) => ({
    storeState: state.AppReduser,
  }),
)(AddTaskFormFunction);

export default AddTaskForm;
