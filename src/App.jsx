import React, { useState } from 'react';
// import { Router, Route, Switch } from "react-router";
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm'
import LoginForm from './components/LoginForm'
import Header from './components/Header'
import Popup from './components/Popup'

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
  const [isLogIn, setIsLogIn] = useState(false);

  return (
    
    <>
      <Provider store={store}>

        <BrowserRouter >
          <Header />
          <Popup
            // isOpen = {if you need another control variable } 
            // setOpen = {if you need another control function ()=>setOpen(!isOpen)} 
            // submit = {()=>setOpen(!isOpen)} 
            body={isLogIn ? <RegistrationForm setIsLogIn={()=>setIsLogIn(!isLogIn)} /> : <LoginForm setIsLogIn={()=>setIsLogIn(!isLogIn)} />}
            logo={"WARM"}
            close={"Close"}
            isWhite={true}
            // otherBody={true(for hide) or object}
            otherFooter={true} //{true(for hide) or object}
          // footer = {true(for hide) or object}
          />
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
