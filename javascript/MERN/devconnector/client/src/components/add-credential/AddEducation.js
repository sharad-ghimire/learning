import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import PropTypes from 'prop-types';
import { addEducation } from '../../actions/profileActions';

class AddEducation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: '',
      degree: '',
      fieldofstudy: '',
      from: '',
      to: '',
      current: false,
      description: '',
      errors: {},
      disabled: false // For disabling from and to if they check current
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) this.setState({ errors: nextProps.errors });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const newEdu = {
      school: this.state.school,
      degree: this.state.degree,
      fieldofstudy: this.state.fieldofstudy,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description
    };

    this.props.addEducation(newEdu, this.props.history);
  };

  onCheck = (e) => {
    this.setState({
      disabled: !this.state.disabled, //Alllow to toggle
      current: !this.state.current
    });
  };

  render() {
    const { errors } = this.state;

    return (
      <div className='add-educatio '>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 m-auto'>
              <Link to='/dashboard' className='btn btn-light'>
                Go Back
              </Link>
              <h1 className='display-4 text-center'>Add Education</h1>
              <p className='lead text-center'>
                Add schools and unis that you have attended.
              </p>
              <small className='d-block pb-3'>* = required field</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder='* School'
                  name='school'
                  value={this.state.school}
                  onChange={this.onChange}
                  error={errors.school}
                />
                <TextFieldGroup
                  placeholder='* Degree'
                  name='degree'
                  value={this.state.degree}
                  onChange={this.onChange}
                  error={errors.degree}
                />
                <TextFieldGroup
                  placeholder='Field of Study'
                  name='fieldofstudy'
                  value={this.state.fieldofstudy}
                  onChange={this.onChange}
                  error={errors.fieldofstudy}
                />
                <h6>From Date</h6>
                <TextFieldGroup
                  type='date'
                  name='from'
                  value={this.state.from}
                  onChange={this.onChange}
                  error={errors.from}
                />
                <h6>To Date</h6>
                <TextFieldGroup
                  type='date'
                  name='to'
                  value={this.state.to}
                  onChange={this.onChange}
                  error={errors.to}
                  disabled={this.state.disabled ? 'disabled' : ''}
                />
                <div className='form-check mb-4'>
                  <input
                    type='checkbox'
                    name='current'
                    value={this.state.current}
                    className='form-check-input'
                    checked={this.state.current}
                    onChange={this.onCheck}
                    id='current'
                  />
                  <label htmlFor='current' className='form-check-label'>
                    Current Education
                  </label>
                </div>

                <TextAreaFieldGroup
                  placeholder='Program Description'
                  name='description'
                  value={this.state.description}
                  onChange={this.onChange}
                  error={errors.description}
                  info='Tell us about the program'
                />
                <input
                  type='submit'
                  value='Submit'
                  className='btn btn-info btn-block mt-4'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddEducation.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  addEducation: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addEducation }
)(withRouter(AddEducation));
