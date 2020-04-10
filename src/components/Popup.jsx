import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {set_open} from '../reducers/Action'
import './Popup.sass';



function PopupFunction(props) {
  
  return (
    <div className={`background-popup ${props.storeState.isOpen ? "openPopup":"closePopup"} ${props.isWhite?"whiteBackground":"blackBackground"}`} onMouseDown={()=>props.dispatch(set_open())}>
      <div className="popup" onMouseDown={(e)=>e.stopPropagation()}>
        <div className="popup-header">
          <Link className="popup-header-logo" to="/home">{props.logo}</Link>
          <span className="popup-header-close" onClick={()=>props.dispatch(set_open())}>
            {props.close}
        </span>
        </div>
        {props.otherBody ||
        <div className="popup-midle">
          {props.body}
        </div>
        }
        {props.otherFooter ||
        <div className="popup-footer">
           {props.footer ||
          <span className="popup-footer-button-ok" onClick={props.submit}>K.O.</span>}
        </div>
        }
      </div>
    </div>
  );
}

const Popup = connect(
  (state) => ({
    storeState: state.AppReduser,
  }),
)(PopupFunction);

export default Popup;
