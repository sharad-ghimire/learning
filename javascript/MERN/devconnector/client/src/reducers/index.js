// This is our root reducer where we wanna bring in all of our other reducers
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});

// If we wanna use anything from auth reducer, we use this.props.auth
