import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // mimics standard browser nabigation, Route is for individual route.
import { Provider } from 'react-redux'; //Provides our application with store which holds all of our state

// Below 3 imports are to check if the token exits in localStorage or not. So that it prevents the isAuthticated to be false everytime we reload
import jwt_decode from 'jwt-decode';
import setAuthTokenToHeader from './utils/setAuthTokenToHeader';
import { setCurrentUser } from './actions/authActions';

import store from './store';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

// Check fro token in every single page request (therefore inside App.js)
if (localStorage.jwtToken) {
  // Set the auth token header auth
  setAuthTokenToHeader(localStorage.jwtToken);
  // Decode token and get user info and experation time
  const decoded = jwt_decode(localStorage.jwtToken);
  // Call setCurentUser to set isAutheticated true and user to be the current user
  store.dispatch(setCurrentUser(decoded));
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className='App'>
            <Navbar />
            <Route exact path='/' component={Landing} />
            {/* If we dont do exact it will show content from multiple route in same page (example /login will also show / because it has / init) */}
            <div className='container'>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
