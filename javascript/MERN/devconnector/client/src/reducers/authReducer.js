import { TEST_DISPATCH } from '../actions/types';

// Initial state for authReducer
const initialState = {
  isAuthenticated: false,
  user: {}
};

// We are going to dispatch action to this reducer
// We want to for example register a user through an action
export default function(state = initialState, action) {
  switch (action.type) {
    case TEST_DISPATCH:
      return {
        // Take everything and add to it -> spread operator (...)
        ...state,
        user: action.payload
      };
    // We dont chnage the state, we mutate it
    default:
      return state;
  }
}
