import axios from 'axios';
import jwt_decode from 'jwt-decode'; //This will help us to decode the token we got from login

import setAuthTokenToHeader from '../utils/setAuthTokenToHeader';
import { GET_ERRORS, SET_CURRENT_USER } from './types';

// Register User ACTION
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post('/api/users/register', userData)
    .then((result) => history.push('/login'))
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

// Above in catch() we used dispatch. Thats a thunk fucntion because, getting error is async task so we are not going to directly return  the type and pyload there.

// From within the component but not from action, so we need to pass histroy from our component and withRouter() helps us to do that. Simply wrap it with the component. withRouter(Register)
// this.props.histroy.push('/dashboard)

// We are dealing with async data so we have to wait for the request and then dispatch. This is where thunk middleware comes in.
// Another arrow and add dispatch function, which is basically, function inside a function

// Login Action - Get user token
export const loginUser = (userData) => (dispatch) => {
  axios
    .post('/api/users/login', userData)
    .then((result) => {
      // Save token  to local storage
      const { token } = result.data;
      // Set token to localStorage
      localStorage.setItem('jwtToken', token);
      // Set it to the auth header (Authorization to the header!!)
      setAuthTokenToHeader(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // and set the user to the user object inside authState of redux
      //what we gonna do is call new function with dispatch() and set the user there
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return { type: SET_CURRENT_USER, payload: decode };
};
