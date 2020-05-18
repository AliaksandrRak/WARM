import React, { useState } from 'react';
import './MainMenu.sass';
import MainMenuItem from './MainMenuItem'


import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { set_open } from '../../reducers/Action'


function MainMenuFunction(props) {

  return (
    <div className="mainMenu">
      <span className="mainMenu-icon">menu</span>
      <div className="menu">
        {props.numberElementsRender.map((el,index)=>
        <MainMenuItem 
        key={el+index}
        label={el.label}
        content={el.content}
        />
        )}
        
      </div>
    </div>
  );
}

const MainMenu = connect(
  (state) => ({
    storeState: state.AppReduser,
  }),
)(MainMenuFunction);

export default MainMenu;
