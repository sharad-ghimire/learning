import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import AuthContext from './context/auth-context';

import Auth from './pages/Auth';
import Events from './pages/Events';
import Bookings from './pages/Bookings';
import MainNav from './components/Nav/MainNav';
import './App.css';

class App extends Component {
  state = {
    token: null,
    userId: null
  };

  login = (token, userId, tokenExpiration) => {
    this.setState({ token: token, tokenId: tokenId });
  };

  logout = () => {
    this.setState({ token: null, tokenId: null });
  };

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <AuthContext.Provider
            value={{
              token: this.state.token,
              userId: this.state.userId,
              login: this.login,
              logout: this.logout
            }}
          >
            <MainNav />
            <main className='main-content'>
              <Switch>
                {!this.state.token && <Redirect from='/' to='/auth' exact />}
                {this.state.token && <Redirect from='/' to='/events' exact />}
                {!this.state.token && (
                  <Redirect from='/auth' to='/events' exact />
                )}

                {!this.state.token && <Route path='/auth' component={Auth} />}
                <Route path='/events' component={Events} />
                {this.state.token && (
                  <Route path='/bookings' component={Bookings} />
                )}
              </Switch>
            </main>
          </AuthContext.Provider>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
