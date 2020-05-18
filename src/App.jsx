import React, { useState } from 'react';
// import { Router, Route, Switch } from "react-router";
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Header from './components/Header'


import HomePage from './components/HomePage'
import ProfilePage from './components/ProfilePage'
import './app.css'

import { Provider } from 'react-redux';
import { AppReduser } from './reducers/AppReduser'

// import { connect } from 'react-redux';
// const Header = connect(
//   (state) => ({
//     storeState: state.AppReduser,
//     globalhistory: state.GlobalReduser,
//     globalReduser: state.GlobalReduser,
//   }),
// )(HeaderClass);

// export default Header;

const redux = require('redux');

const reducers = redux.combineReducers({
  AppReduser,
});

const store = redux.createStore(reducers);


function App() {

  // const [isOpen, setOpen] = useState(false);


  return (
    
    <>
      <Provider store={store}>

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
