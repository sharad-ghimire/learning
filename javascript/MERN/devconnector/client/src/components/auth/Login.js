import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';

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
    this.props.loginUser(loggedUser);
  };

  // This lifecycle method checks if the user is login or not, if logged in it will redirect to /dashboard
  componentDidMount() {
    if (this.props.auth.isAuthenticated) this.props.history.push('/dashboard');
  }

  componentWillReceiveProps(nextProps) {
    // Check if the user is authenticated or not
    if (nextProps.auth.isAuthenticated) this.props.history.push('/dashboard');
    if (nextProps.errors) this.setState({ errors: nextProps.errors });
  }

  render() {
    const { errors } = this.state;
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
                  <TextFieldGroup
                    type='email'
                    name='email'
                    placeholder='Email Address'
                    value={this.state.email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextFieldGroup
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={this.state.password}
                    onChange={this.onChange}
                    error={errors.password}
                  />
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired, //actions are functions
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser } //function from our action file
)(withRouter(Login));
