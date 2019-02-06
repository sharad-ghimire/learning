import { GET_ERRORS } from './types';

import axios from 'axios';

// Register User ACTION
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post('/api/users/register', userData)
    .then((result) => history.push('/login'))
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

// Above in catch() we used dispatch. Thats a thunk fucntion because, getting error is async task so we are not going to directly return  the type and pyload there. 

// From within the component
// this.props.histroy.push('/dashboard)

// We are dealing with async data so we have to wait for the request and then dispatch. This is where thunk middleware comes in.
// Another arrow and add dispatch function, which is basically, function inside a function
