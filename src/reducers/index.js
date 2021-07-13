import { combineReducers } from 'redux';
import auth from './authReducer';
import { firebaseReducer } from 'react-redux-firebase'
import apiCallsReducer from './apiCallsReducer';


const rootReducer = combineReducers({
    auth,
    apiCallsReducer,
    firebase: firebaseReducer
});

export default rootReducer;
