import { GET_ERRORS } from '../actions/types';

const initialState = {}; // Empty object and will later contain errors.

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload; // payload gonna include err.response.data from action that we used in out authAction (inside catch())

    default:
      return state;
  }
};
