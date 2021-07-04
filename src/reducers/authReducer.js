import {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
} from 'constants/auth';

const initialState = { payload: null };

function auth(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        payload,
      };

    case SIGNUP_ERROR:
      return {
        ...state,
        payload,
      };

    case SIGNIN_SUCCESS:
      return {
        ...state,
        payload,
      };

    case SIGNIN_ERROR:
      return {
        ...state,
        payload,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        payload,
      };

    case LOGOUT_ERROR:
      return {
        ...state,
        payload,
      };
    default:
      return state;
  }
}

export default auth;
