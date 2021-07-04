import { combineReducers } from 'redux';
import auth from './authReducer';
import { firebaseReducer } from 'react-redux-firebase'


const rootReducer = combineReducers({
    auth,
    firebase: firebaseReducer
});

export default rootReducer;
