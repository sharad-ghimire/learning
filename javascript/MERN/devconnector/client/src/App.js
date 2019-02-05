import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // mimics standard browser nabigation, Route is for individual route.
import { Provider } from 'react-redux'; //Provides our application with store which holds all of our state

import store from './store';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

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
