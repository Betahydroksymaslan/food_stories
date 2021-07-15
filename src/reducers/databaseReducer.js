import { DATABASE_ADD_ERROR, DATABASE_ADD_SUCCESS } from 'constants/database';

const initialState = { payload: null };

function database(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case DATABASE_ADD_SUCCESS:
      return {
        ...state,
        payload,
      };

    case DATABASE_ADD_ERROR:
      return {
        ...state,
        payload,
      };

    default:
      return state;
  }
}

export default database;
