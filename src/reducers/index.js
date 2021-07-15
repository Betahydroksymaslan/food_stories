import { combineReducers } from 'redux';
import auth from './authReducer';
import { firebaseReducer } from 'react-redux-firebase';
import apiCallsReducer from './apiCallsReducer';
import database from './databaseReducer';

const rootReducer = combineReducers({
  auth,
  apiCallsReducer,
  database,
  firebase: firebaseReducer,
});

export default rootReducer;
