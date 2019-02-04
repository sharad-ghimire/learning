import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className='navbar navbar-extend-sm navbar-dark bg-dark mb-4'>
          <div className='container'>
            <Link to='/' className='navbar-brand'>
              Dev Connector
            </Link>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#mobile-nav'
            >
              <span className='navbar-toggler-icon' />
            </button>

            <div className='collapse navbar-collapse' id='mobile-nav'>
              <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>
                  <Link to='/profile' className='nav-link'>
                    Developers
                  </Link>
                </li>
              </ul>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <Link to='/register' className='nav-link'>
                    Sign Up
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/login' className='nav-link'>
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
