import { AppReduser } from './AppReduser'


const redux = require('redux');

const reducers = redux.combineReducers({
  AppReduser,
});

const store = redux.createStore(reducers);

export default store