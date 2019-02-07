import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

import TextFieldGroup from '../common/TextFieldGroup';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };
    // this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) this.props.history.push('/dashboard');
  }

  // This runs when our component recives new props
  componentWillReceiveProps(nextProps) {
    // Make it a component state so that we can use errors from state.
    // This way we get our errors props from redux state, it then put into props from mapStateToProps and then only we receive new props and there is errors in  that props we gonna set it to the component state.
    if (nextProps.errors)
      this.setState({
        errors: nextProps.errors
      });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    // this.props.histroy, use this so that we can do this within the authActions
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    // Pulls errors object from state
    const { errors } = this.state;
    // We can also get the errors from this.props.state, which we get from mapStateToProps but instead we used componentWillReceiveProps(nextProps) life cycle method so that that props we got gets mapped to state now,

    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 m-auto'>
              <h1 className='display-4 text-center'>Sign Up</h1>
              <p className='lead text-center'>
                Create your DevConnector Account
              </p>
              <form noValidate onSubmit={this.onSubmit}>
                <TextFieldGroup
                  type='text'
                  name='name'
                  placeholder='Name'
                  value={this.state.name}
                  onChange={this.onChange}
                  error={errors.name}
                />
                <TextFieldGroup
                  type='email'
                  name='email'
                  placeholder='Email Address'
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                  info='This site uses Gravatar so if you wan a profile image, use a
                    Gravatar email.'
                />

                <TextFieldGroup
                  type='password'
                  name='password'
                  placeholder='Password'
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                />

                <TextFieldGroup
                  type='password'
                  name='password2'
                  placeholder='Confirm Password'
                  value={this.state.password2}
                  onChange={this.onChange}
                  error={errors.password2}
                />
                <input type='submit' className='btn btn-info btn-block mt-4' />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth, //state.auth, where auth comes from our root reducer
  errors: state.errors // Get errors from our store and now we can access that fom this.props.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));

// Each field has to have its own state within the component
