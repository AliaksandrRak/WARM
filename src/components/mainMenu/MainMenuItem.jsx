import React, { useState } from 'react';
import './MainMenu.sass';


import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { set_open } from '../../reducers/Action'

function MainMenuItemFunction(props) {

  return (
    <div className="menu-item" key={props.key}>
      <div className="menu-item-label">
        {props.label.link && props.label.name &&
          <Link to={props.label.link}>{props.label.name}</Link>
        }
        {!props.label.link && !props.label.name &&
          "ERROR"
        }
      </div>
      <div className="menu-item-content">
        {props.content.length > 0 && props.content.map((element,index) =>
          <Link onClick={element.func && element.func} key={element.name+index} to={element.link}>{element.name}</Link>
        )}
      </div>
    </div>
  );
}

const MainMenuItem = connect(
  (state) => ({
    storeState: state.AppReduser,
  }),
)(MainMenuItemFunction);

export default MainMenuItem;
