import axios from 'axios';

// What we are doing with axios is it prevents us to mannualy add header for each request to route that is protected
const setAuthTokenToHeader = (token) => {
  if (token) {
    // Apply to every request
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    // Delete the auth header
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthTokenToHeader;
