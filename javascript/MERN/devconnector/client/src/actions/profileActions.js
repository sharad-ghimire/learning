import axios from 'axios';
import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  SET_CURRENT_USER
} from './types';

// Get current profile
export const getCurrentProfile = () => (dispatch) => {
  dispatch(setProfileLoading());
  axios
    .get('/api/profile')
    .then((res) => dispatch({ type: GET_PROFILE, payload: res.data }))
    .catch((err) => dispatch({ type: GET_PROFILE, payload: {} })); // We can register and can not have a profile then can create one
};

// create a profile
export const createProfile = (profileData, history) => (dispatch) => {
  axios
    .post('/api/profile', profileData)
    .then((res) => history.push('/dashboard'))
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

// Add Experience
export const addExperience = (newExp, history) => (dispatch) => {
  axios
    .post('/api/profile/experience', newExp)
    .then((res) => history.push('/dashboard'))
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

// Add education
export const addEducation = (newEdu, history) => (dispatch) => {
  axios
    .post('/api/profile/education', newEdu)
    .then((res) => history.push('/dashboard'))
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

// Delete Experience
export const deleteExperience = (id) => (dispatch) => {
  axios
    .delete(`/api/profile/experience/${id}`)
    .then((res) => dispatch({ type: GET_PROFILE, payload: res.data }))
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

// Delete Education
export const deleteEducation = (id) => (dispatch) => {
  axios
    .delete(`/api/profile/education/${id}`)
    .then((res) => dispatch({ type: GET_PROFILE, payload: res.data }))
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

// Profile Loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

// clear Profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};

// Delete Account and profile
export const deleteAccount = () => (dispatch) => {
  if (window.confirm('Are you sure? This can not be undone!')) {
    axios
      .delete('/api/profile')
      .then((res) => dispatch({ type: SET_CURRENT_USER, payload: {} }))
      .catch((err) =>
        dispatch({ type: GET_ERRORS, payload: err.response.data })
      );
  }
};
