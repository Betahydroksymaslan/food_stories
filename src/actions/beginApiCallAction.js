import { BEGIN_API_CALL, API_CALL_ERROR } from 'constants/ApiCalls';

export const beginApiCall = () => {
  return { type: BEGIN_API_CALL };
};

export const apiCallError = () => {
  return { type: API_CALL_ERROR };
};
