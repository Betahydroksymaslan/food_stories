import { auth } from 'assets/firebase/firebase';
import {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
} from 'constants/auth';

const errorMessage = 'Coś poszło nie tak, spróbuj jeszcze raz!';

export const signup = (email, password, callback) => async (dispatch) => {
  try {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((data) => {
        auth.onAuthStateChanged(function (user) {
          if (user) {
            dispatch({
              type: SIGNUP_SUCCESS,
              payload: 'Rejestracja przebiegła pomyślnie!',
            });
            callback();
          } else {
            dispatch({
              type: SIGNUP_ERROR,
              payload: errorMessage,
            });
          }
        });
      })
      .catch((error) => {
        dispatch({
          type: SIGNUP_ERROR,
          payload: errorMessage,
        });
      });
  } catch (error) {
    dispatch({
      type: SIGNUP_ERROR,
      payload: errorMessage,
    });
  }
};

export const signin = (email, password, callback) => async (dispatch) => {
  try {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        if (data.user) {
          dispatch({ type: SIGNIN_SUCCESS, payload: 'Zalogowano pomyślnie!' });
          callback();
        } else {
          dispatch({
            type: SIGNIN_ERROR,
            payload: errorMessage,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: SIGNIN_ERROR,
          payload: errorMessage,
        });
      });
  } catch (error) {
    dispatch({
      type: SIGNIN_ERROR,
      payload: errorMessage,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    auth
      .signOut()
      .then(() => {
        dispatch({
          type: LOGOUT_SUCCESS,
          payload: 'Pomyślnie wylogowano',
        });
      })
      .catch((error) => {
        dispatch({
          type: LOGOUT_ERROR,
          payload: errorMessage,
        });
      });
  } catch (error) {
    dispatch({
      type: LOGOUT_ERROR,
      payload: errorMessage,
    });
  }
};
