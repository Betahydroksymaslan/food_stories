import { auth } from 'assets/firebase/firebase';
import {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  CHANGE_EMAIL_SUCCESS,
  CHANGE_EMAIL_ERROR,
  CHANGE_PASSWORD_ERROR,
  CHANGE_PASSWORD_SUCCESS,
} from 'constants/auth';
import { beginApiCall, apiCallError } from 'actions/beginApiCallAction';
import { db } from 'assets/firebase/firebase';

const errorMessage = 'Coś poszło nie tak, spróbuj jeszcze raz!';

export const signup = (email, password, callback) => async (dispatch) => {
  try {
    dispatch(beginApiCall());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((data) => {
        auth.onAuthStateChanged(function (user) {
          if (user) {
            db.ref(`/users/${user.uid}`).set({
              uid: user.uid,
              email: user.email,
            });
            dispatch({
              type: SIGNUP_SUCCESS,
              payload: 'Rejestracja przebiegła pomyślnie!',
            });
            callback();
          }
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch(apiCallError());
        dispatch({
          type: SIGNUP_ERROR,
          payload:
            error.code === 'auth/email-already-in-use'
              ? 'Ten adres email jest już zajęty, spróbuj innego!'
              : errorMessage,
        });
      });
  } catch (error) {
    dispatch(apiCallError());
    dispatch({
      type: SIGNUP_ERROR,
      payload:
        error.code === 'auth/email-already-in-use'
          ? 'Ten adres email jest już zajęty, spróbuj innego!'
          : errorMessage,
    });
  }
};

export const signin = (email, password, callback) => async (dispatch) => {
  try {
    dispatch(beginApiCall());
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
        console.log(error);
        dispatch(apiCallError());
        dispatch({
          type: SIGNIN_ERROR,
          payload: errorMessage,
        });
      });
  } catch (error) {
    console.log(error);
    dispatch(apiCallError());
    dispatch({
      type: SIGNIN_ERROR,
      payload: errorMessage,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch(beginApiCall());
    auth
      .signOut()
      .then(() => {
        dispatch({
          type: LOGOUT_SUCCESS,
          payload: 'Pomyślnie wylogowano',
        });
      })
      .catch((error) => {
        dispatch(apiCallError());
        dispatch({
          type: LOGOUT_ERROR,
          payload: errorMessage,
        });
      });
  } catch (error) {
    dispatch(apiCallError());
    dispatch({
      type: LOGOUT_ERROR,
      payload: errorMessage,
    });
  }
};

export const changeEmail = (newEmail) => async (dispatch) => {
  try {
    dispatch(beginApiCall());
    auth.currentUser
      .updateEmail(newEmail)
      .then(() => {
        dispatch({
          type: CHANGE_EMAIL_SUCCESS,
          payload: 'Pomyślnie zmieniono email',
        });
      })
      .catch((error) => {
        dispatch(apiCallError());
        console.log(error);
        dispatch({
          type: CHANGE_EMAIL_ERROR,
          payload:
            error.code === 'auth/requires-recent-login'
              ? 'Z powodów bezpieczeństwa akcja wymaga ponownego zalogowania'
              : 'Coś poszło nie tak, spróbuj jeszcze raz',
        });
      });
  } catch (error) {
    dispatch(apiCallError());
    console.log(error);
    dispatch({
      type: CHANGE_EMAIL_ERROR,
      payload:
        error.code === 'auth/requires-recent-login'
          ? 'Z powodów bezpieczeństwa akcja wymaga ponownego zalogowania'
          : 'Coś poszło nie tak, spróbuj jeszcze raz',
    });
  }
};

export const changePassword = (newPassword) => async (dispatch) => {
  try {
    dispatch(beginApiCall());
    auth.currentUser
      .updatePassword(newPassword)
      .then(() => {
        dispatch({
          type: CHANGE_PASSWORD_SUCCESS,
          payload: 'Pomyślnie zmieniono hasło',
        });
      })
      .catch((error) => {
        dispatch(apiCallError());
        console.log(error);
        dispatch({
          type: CHANGE_PASSWORD_ERROR,
          payload:
            error.code === 'auth/requires-recent-login'
              ? 'Z powodów bezpieczeństwa akcja wymaga ponownego zalogowania'
              : 'Coś poszło nie tak, spróbuj jeszcze raz',
        });
      });
  } catch (error) {
    dispatch(apiCallError());
    console.log(error);
    dispatch({
      type: CHANGE_PASSWORD_ERROR,
      payload:
        error.code === 'auth/requires-recent-login'
          ? 'Z powodów bezpieczeństwa akcja wymaga ponownego zalogowania'
          : 'Coś poszło nie tak, spróbuj jeszcze raz',
    });
  }
};
