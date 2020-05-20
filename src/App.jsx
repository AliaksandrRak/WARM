import React, { useState } from 'react';
// import { Router, Route, Switch } from "react-router";
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Header from './components/Header'


import HomePage from './components/HomePage'
import ProfilePage from './components/ProfilePage'
import './app.css'

import { Provider } from 'react-redux';
import store from './reducers/Store'
import {
  set_login, 
  set_profile,
} from './reducers/Action';
import Spinner from './components/Spinner';

function App() {

  // const [isOpen, setOpen] = useState(false);
  let profile = localStorage.getItem('profile');
  profile = JSON.parse(profile);
  
  if (profile && profile.token) {
    store.dispatch(set_login());
    store.dispatch(set_profile(profile));
  }

  return (
    
    <>
      <Provider store={store}>
      <Spinner />
        <BrowserRouter >
          <Header />
          
          <Switch>
            <Route exact path='/home'  component={HomePage} />
            <Route path='/profile'  component={ProfilePage} />
            <Redirect from='/' to='/home' />
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
