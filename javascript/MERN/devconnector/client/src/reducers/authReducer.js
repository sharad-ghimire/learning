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
    default:
      return state;
  }
};
