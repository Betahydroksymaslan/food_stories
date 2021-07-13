import { API_CALL_ERROR, BEGIN_API_CALL } from 'constants/ApiCalls';

const actionEndsSuccess = (action) => {
  return /(.*)_(SUCCESS)/.test(action.type);
};

const initialState = { apiCallProgress: 0 };

export default function (state = initialState, action) {
  const { type } = action;

  if (type === BEGIN_API_CALL) {
    return { ...state, apiCallProgress: 1 };
  } else if (type === API_CALL_ERROR) {
    return { ...state, apiCallProgress: 0 };
  } else if (actionEndsSuccess) {
    return { ...state, apiCallProgress: 0 };
  } else return state;
}
