import isEmpty from '../validation/is-empty'; //Same isEmpty as serverside isEmpty
import { SET_CURRENT_USER } from '../actions/types';

// Initial state for authReducer
const initialState = {
  isAuthenticated: false,
  user: {}
};

// We are going to dispatch action to this reducer
// We want to for example register a user through an action
export default (state = initialState, action) => {
  switch (action.type) {
    // We dont change the state, we mutate it

    case SET_CURRENT_USER:
      return {
        ...state, // current state
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };

    default:
      return state;
  }
};
