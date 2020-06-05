import React, { useState } from 'react';
import './AddProjectForm.sass';

import { connect } from 'react-redux';
import { is_sending } from '../reducers/Action'



function AddProjectFormFunction(props) {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  // const [teamLead_id, setTeamLead_id] = useState('');
  const [needDevelopers, setNeedDevelopers] = useState('');

  function clickButton(projectName, description, needDevelopers, props) {
    props.dispatch(is_sending(true));
    var body = `projectName=${projectName}&description=${description}&needDevelopers=${needDevelopers}&companiesName=${props.storeState.profile.company}`;
    const request = new XMLHttpRequest();
    request.open('POST', 'http://localhost:8080/KP_webServlet__server_war_exploded/addProject', true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(body);
    request.onload = (res)=>{
      let response = {}
      request.response.split(',').map((el) => {
        let array = el.split(':');
        response[array[0]] = array[1]
      });
      debugger
      if (response.value === "all good") {
        setProjectName('');
        setDescription('');
        setNeedDevelopers('');
        props.dispatch(is_sending(false));
      }
    };
    request.onerror= (error) => {
      console.log("error", error);
      props.dispatch(is_sending(false));
    }
  }

  return (
    <div className="addDeveloperForm">
      <div className="form-header">
        <h3>Please add new Project</h3>
      </div>
      <div className="inputBlock">
        <input className="inputRF" placeholder="Project Name" value={projectName} onChange={(e) => setProjectName(e.target.value)} type="text" />
        <input className="inputRF" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} type="text" />
        {/* <input className="inputRF" placeholder="Timlid" value={teamLead_id} onChange={(e) => setTeamLead_id(e.target.value)} type="text" /> */}
        <input className="inputRF" placeholder="Need developers" value={needDevelopers} onChange={(e) => setNeedDevelopers(e.target.value)} type="text" />
      </div>
      <div className="submitBlock">
        <span className="btnSendForm" onClick={() => clickButton(projectName, description, needDevelopers, props)}>Add new Project</span>
      </div>
    </div>
  );
}

const AddProjectForm = connect(
  (state) => ({
    storeState: state.AppReduser,
  }),
)(AddProjectFormFunction);

export default AddProjectForm;
