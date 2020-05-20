import React, { useState } from 'react';
import './AddEquipmentForm.sass';

import { connect } from 'react-redux';
import { is_sending } from '../reducers/Action'



function AddEquipmentFormFunction(props) {
  const [equipmentName, setEquipmentName] = useState('');
  const [numberUnits, setNumberUnits] = useState('');
  const [description, setDescription] = useState('');
  const [equipmentCondition, setEquipmentCondition] = useState('');
  const [equipmentCost, setEquipmentCost] = useState('');


  function clickButton(equipmentName, description, numberUnits, equipmentCondition, equipmentCost, props) {
    props.dispatch(is_sending(true));
    var body = `equipmentName=${equipmentName}&description=${description}&numberUnits=${numberUnits}&equipmentCondition=${equipmentCondition}&equipmentCost=${equipmentCost}&companiesName=${props.storeState.profile.company}`;
    const request = new XMLHttpRequest();
    request.open('POST', 'http://localhost:8080/KP_webServlet__server_war_exploded/addEquipment', true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(body);
    request.onload = (res) => {
      let response = {}
      request.response.split(',').map((el) => {
        let array = el.split(':');
        response[array[0]] = array[1]
      });

      if (response.value === "all good") {
        setEquipmentName('');
        setNumberUnits('');
        setDescription('');
        setEquipmentCondition('');
        setEquipmentCost('');
        props.dispatch(is_sending(false));
      }
    };
  }

  return (
    <div className="addDeveloperForm">
      <div className="form-header">
        <h3>Please add new Equipment</h3>
      </div>
      <div className="inputBlock">
        <input className="inputRF" placeholder="Equipment name" value={equipmentName} onChange={(e) => setEquipmentName(e.target.value)} type="text" />
        <input className="inputRF" placeholder="Equipment description" value={description} onChange={(e) => setDescription(e.target.value)} type="text" />
        <input className="inputRF" placeholder="Number of units" value={numberUnits} onChange={(e) => setNumberUnits(e.target.value)} type="text" />
        <input className="inputRF" placeholder="Equipment condition" value={equipmentCondition} onChange={(e) => setEquipmentCondition(e.target.value)} type="text" />
        <input className="inputRF" placeholder="Cost of equipment" value={equipmentCost} onChange={(e) => setEquipmentCost(e.target.value)} type="text" />
      </div>
      <div className="submitBlock">
        <span className="btnSendForm" onClick={() => clickButton(equipmentName, description, numberUnits, equipmentCondition, equipmentCost, props)}>Add new Equipment</span>
      </div>
    </div>
  );
}

const AddEquipmentForm = connect(
  (state) => ({
    storeState: state.AppReduser,
  }),
)(AddEquipmentFormFunction);

export default AddEquipmentForm;
