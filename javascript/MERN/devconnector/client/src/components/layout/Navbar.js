import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className='navbar navbar-extend-sm navbar-dark bg-dark mb-4'>
          <div className='container'>
            <a href='landing.html' className='navbar-brand'>
              DevConnector
            </a>
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
                  <a href='profiles.html' className='nav-link'>
                    Developers
                  </a>
                </li>
              </ul>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <a href='register.html' className='nav-link'>
                    Sign Up
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='profiles.html' className='nav-link'>
                    Login
                  </a>
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
