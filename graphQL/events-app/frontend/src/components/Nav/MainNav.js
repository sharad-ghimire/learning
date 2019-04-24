import React from 'react';
import './MainNav.css';

import AuthContext from '../../context/auth-context';

import { NavLink } from 'react-router-dom';

const MainNav = (props) => (
  <AuthContext.Consumer>
    {(context) => {
      return (
        <header className='main-nav'>
          <div className='main-nav__logo'>
            <h1>Eventy Event</h1>
          </div>
          <nav className='main-nav__items'>
            <ul>
              {context.token && (
                <li>
                  <NavLink to='/auth'>Authenticate</NavLink>
                </li>
              )}

              <li>
                <NavLink to='/events'>Events</NavLink>
              </li>
              {context.token && (
                <li>
                  <NavLink to='/bookings'>Bookings</NavLink>
                </li>
              )}
            </ul>
          </nav>
        </header>
      );
    }}
  </AuthContext.Consumer>
);

export default MainNav;
