import { db } from 'assets/firebase/firebase';
import { beginApiCall, apiCallError } from './beginApiCallAction';
import { DATABASE_ADD_ERROR, DATABASE_ADD_SUCCESS } from 'constants/database';

export const addDatabase = (ref, object, message) => async (dispatch) => {
  try {
    dispatch(beginApiCall());
    db.ref(ref)
      .set(object)
      .then((data) => {
        dispatch({ type: DATABASE_ADD_SUCCESS, payload: message });
      })
      .catch((error) => {
        dispatch(apiCallError());
        dispatch({
          type: DATABASE_ADD_ERROR,
          payload: 'Coś poszło nie tak, spróbuj jeszcze raz!',
        });
      });
  } catch (error) {
    dispatch(apiCallError());
    dispatch({
      type: DATABASE_ADD_ERROR,
      payload: error.message,
    });
  }
};
