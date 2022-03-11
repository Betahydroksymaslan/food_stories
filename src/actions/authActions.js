import {
  auth,
  googleProvider,
  facebookProvider,
} from 'assets/firebase/firebase';
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

const setLocalStorageItem = () => {
  const localStorageItem = {
    ratingOn: true,
  };
  localStorage.setItem('userRateModalsOn', JSON.stringify(localStorageItem));
};

export const signup = (email, password, name, callback) => async (dispatch) => {
  try {
    dispatch(beginApiCall());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((data) => {
        auth.onAuthStateChanged(async function (user) {
          if (user) {
            await db.ref(`/users/${user.uid}`).set({
              uid: user.uid,
              email: user.email,
              name,
            });
            user.updateProfile({ displayName: name });
            dispatch({
              type: SIGNUP_SUCCESS,
              payload: 'Rejestracja przebiegła pomyślnie!',
            });
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
    setLocalStorageItem();
    callback();
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
    await auth
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        if (data.user) {
          dispatch({ type: SIGNIN_SUCCESS, payload: 'Zalogowano pomyślnie!' });
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
    callback();
  } catch (error) {
    console.log(error);
    dispatch(apiCallError());
    dispatch({
      type: SIGNIN_ERROR,
      payload: errorMessage,
    });
  }
};

export const googleSignin = (callback) => async (dispatch) => {
  try {
    auth
      .signInWithPopup(googleProvider)
      .then(async (result) => {
        const credential = result.credential;
        const token = credential.accessToken;
        const user = result.user;

        if (user) {
          await db.ref(`/users/${user.uid}`).set({
            uid: user.uid,
            email: user.email,
          });
          /* user.updateProfile({ displayName: name }); */
          dispatch({
            type: SIGNUP_SUCCESS,
            payload: 'Rejestracja przebiegła pomyślnie!',
          });
        }
        setLocalStorageItem();
        callback();
      })
      .catch((error) => {
        console.log(error);

        const errorMessage = error.message;
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

export const facebookSignin = (callback) => async (dispatch) => {
  try {
    auth
      .signInWithPopup(facebookProvider)
      .then(async (result) => {
        const credential = result.credential;
        const token = credential.accessToken;
        const user = result.user;

        if (user) {
          await db.ref(`/users/${user.uid}`).set({
            uid: user.uid,
            email: user.email,
          });
          /* user.updateProfile({ displayName: name }); */
          dispatch({
            type: SIGNUP_SUCCESS,
            payload: 'Rejestracja przebiegła pomyślnie!',
          });
        }
        setLocalStorageItem();
        callback();
      })
      .catch((error) => {
        console.log(error);

        const errorMessage = error.message;
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
