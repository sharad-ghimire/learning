import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const loggedUser = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(loggedUser);
  };

  render() {
    return (
      <div>
        <div>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 m-auto'>
                <h1 className='display-4 text-center'>Log In</h1>
                <p className='lead text-center'>
                  Log in to you DevConnector Account
                </p>
                <form onSubmit={this.onSubmit}>
                  <div className='form-group'>
                    <input
                      type='email'
                      className='form-control form-control-lg'
                      name='email'
                      placeholder='Email Address'
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='password'
                      className='form-control form-control-lg'
                      name='password'
                      placeholder='Password'
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                  </div>

                  <input
                    type='submit'
                    className='btn btn-info btn-block mt-4'
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
