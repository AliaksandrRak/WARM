import React, { useState } from 'react';
import './ProfilePage.sass';
import MainMenu from './mainMenu/MainMenu'

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { set_open } from '../reducers/Action'
import { roleAdmin, role1, role2, role3, role4 } from '../role'

import ProfileContent from './profileContent/ProfileContent'

function ProfilePageFunction(props) {

  return (
    <div className="profile">
      <MainMenu
        numberElementsRender={roleAdmin}
      />

      <div className="profile-wrapper">
        <div className="profile-midle">
        <ProfileContent />
        </div>
      </div>
    </div>
  );
}

const ProfilePage = connect(
  (state) => ({
    storeState: state.AppReduser,
  }),
)(ProfilePageFunction);

export default ProfilePage;
