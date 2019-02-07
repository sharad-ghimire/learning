// This is our root reducer where we wanna bring in all of our other reducers
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer
});

// If we wanna use anything from auth reducer, we use this.props.auth
