// Initial state for authReducer
const initialState = {
  isAuthenticated: false,
  users: {}
};

// We are going to dispatch action to this reducer
export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
