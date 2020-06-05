import React, { useState } from 'react';
import './ProfilePage.sass';
import MainMenu from './mainMenu/MainMenu'
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { set_open_card } from '../reducers/Action'
import { roleAdmin, role1, role2, role3, role4 } from '../role'


import AddDeveloperForm from './AddDeveloperForm'
import AddProjectForm from './AddProjectForm'
import AddEquipmentForm from './AddEquipmentForm'
import AddTaskForm from './AddTaskForm'
import ProfileContent from './profileContent/ProfileContent'
import Popup from './Popup'
import EquipmentPage from './EquipmentPage';
import DeveloperPage from './DeveloperPage';
import ProjectPage from './ProjectPage.';

function ProfilePageFunction(props) {

  return (
    <>
      <Popup
        // isOpen = {if you need another control variable } 
        // setOpen = {if you need another control function ()=>setOpen(!isOpen)} 
        // submit = {()=>setOpen(!isOpen)} 
        isOpen= {props.storeState.isOpenCard}
        close= {"Close"}
        onClose= {()=>props.dispatch(set_open_card())}
        // body= {}
        isWhite= {true}
        // otherBody={true(for hide) or object}
        otherFooter= {true} //{true(for hide) or object}
      // footer = {true(for hide) or object}
      />
      <div className="profile">
        <MainMenu
          numberElementsRender={roleAdmin}
        />

        <div className="profile-wrapper">
          <div className="profile-midle">
            <Switch>

              <Route path='/profile/task/add'  component={AddTaskForm} />
              <Route path='/profile/task'  component={ProfileContent} />
              <Route path='/profile/developers/add'  component={AddDeveloperForm} />
              <Route path='/profile/developers'  component={DeveloperPage} />
              <Route path='/profile/project/add'  component={AddProjectForm} />
              <Route path='/profile/project'  component={ProjectPage} />
              <Route path='/profile/equipment/add'  component={AddEquipmentForm} />
              <Route path='/profile/equipment'  component={EquipmentPage} />
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
}

const ProfilePage = connect(
  (state) => ({
    storeState: state.AppReduser,
  }),
)(ProfilePageFunction);

export default ProfilePage;
