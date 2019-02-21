import React from 'react';
import './MainNav.css';

import { NavLink } from 'react-router-dom';

const MainNav = (props) => (
  <header className='main-nav'>
    <div className='main-nav__logo'>
      <h1>Eventy Event</h1>
    </div>
    <nav className='main-nav__items'>
      <ul>
        <li>
          <NavLink to='/auth'>Authenticate</NavLink>
        </li>
        <li>
          <NavLink to='/events'>Events</NavLink>
        </li>
        <li>
          <NavLink to='/bookings'>Bookings</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default MainNav;
