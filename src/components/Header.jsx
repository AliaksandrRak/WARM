import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { set_open } from '../reducers/Action'
import './Header.sass';

function HeaderFunction(props) {
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="header-block">
          <Link className="header-block-logo" to="/home">WARM</Link>
          <div className="header-block-links">
            <span>First</span>
            <span>Second</span>
          </div>
          <div className="header-block-login" onClick={() => props.dispatch(set_open())}>
            <i className="login" />
            {/* <i className="logout" /> */}
            {/* <i className="logout-girl" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

const Header = connect(
  (state) => ({
    storeState: state.AppReduser,
  }),
)(HeaderFunction);

export default Header;
