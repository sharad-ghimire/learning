import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import { createProfile } from '../../actions/profileActions';

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInput: false,
      handle: '',
      company: '',
      website: '',
      location: '',
      status: '',
      skills: '',
      githubusername: '',
      bio: '',
      twitter: '',
      facebook: '',
      linkedin: '',
      instagram: '',
      youtube: '',
      errors: {}
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
    const profileData = {
      handle: this.state.handle,
      company: this.state.company,
      website: this.state.website,
      location: this.state.location,
      status: this.state.status,
      skills: this.state.skills,
      githubusername: this.state.githubusername,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      linkedin: this.state.linkedin,
      instagram: this.state.instagram,
      youtube: this.state.youtube
    };
    this.props.createProfile(profileData, this.props.history);
  };

  render() {
    const { errors, displaySocialInput } = this.state;

    let socialInputs;
    if (displaySocialInput) {
      socialInputs = (
        <div className='mt-3'>
          <InputGroup
            placeholder='Twitter Profile URI'
            icon='fab fa-twitter'
            name='twitter'
            onChange={this.onChange}
            value={this.state.twitter}
            error={errors.twitter}
          />
          <InputGroup
            placeholder='Facebook Profile URI'
            icon='fab fa-facebook'
            name='facebook'
            onChange={this.onChange}
            value={this.state.facebook}
            error={errors.facebook}
          />
          <InputGroup
            placeholder='LinkedIn Profile URI'
            icon='fab fa-linkedin'
            name='linkedin'
            onChange={this.onChange}
            value={this.state.linkedin}
            error={errors.linkedin}
          />
          <InputGroup
            placeholder='Youtube Profile URI'
            icon='fab fa-youtube'
            name='youtube'
            onChange={this.onChange}
            value={this.state.youtube}
            error={errors.youtube}
          />
          <InputGroup
            placeholder='Instagram Profile URI'
            icon='fab fa-instagram'
            name='instagram'
            onChange={this.onChange}
            value={this.state.instagram}
            error={errors.instagram}
          />
        </div>
      );
    }

    // Select options for status
    const options = [
      { label: '* Select Professional Status', value: 0 },
      { label: 'Developer', value: 'Developer' },
      { label: 'Designer', value: 'Designer' },
      { label: 'UX/UI', value: 'UX/UI' },
      { label: 'Full Stack Developer', value: 'Full Stack Developer' },
      { label: 'Tester', value: 'Tester' },
      { label: 'Intern', value: 'Intern' }
    ];

    return (
      <div className='create-profiel'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 m-auto'>
              <h1 className='display-4 text-center'>Create Your Profile</h1>
              <p className='lead text-center'>
                Let's get some information to make your profile stand out.
              </p>
              <small className='d-block pb-3'> * = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  type='text'
                  placeholder='* Profile Handle'
                  name='handle'
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                  info='Your public profile uri'
                />
                <SelectListGroup
                  options={options}
                  name='status'
                  value={this.state.status}
                  onChange={this.onChange}
                  error={errors.status}
                  info='Give us an idea of where you are in career'
                />
                <TextFieldGroup
                  type='text'
                  placeholder='Company'
                  name='company'
                  value={this.state.company}
                  onChange={this.onChange}
                  error={errors.company}
                  info='Could be your own company or one you work for'
                />
                <TextFieldGroup
                  type='text'
                  placeholder='Website'
                  name='website'
                  value={this.state.website}
                  onChange={this.onChange}
                  error={errors.website}
                  info='Your own website.'
                />
                <TextFieldGroup
                  type='text'
                  placeholder='Location'
                  name='location'
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                  info='The place where you like to work.'
                />
                <TextFieldGroup
                  type='text'
                  placeholder='Skills'
                  name='skills'
                  value={this.state.skills}
                  onChange={this.onChange}
                  error={errors.skills}
                  info='Comma Separated skills like CSS, JavaScript, HTML.'
                />
                <TextFieldGroup
                  type='text'
                  placeholder='Github username'
                  name='githubusername'
                  value={this.state.githubusername}
                  onChange={this.onChange}
                  error={errors.githubusername}
                  info='Your own Github username.'
                />

                <TextAreaFieldGroup
                  placeholder='Short Bio'
                  name='bio'
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                  info='Tell us something that defines you.'
                />
                <div className='mb-3'>
                  <button
                    type='button'
                    onClick={() =>
                      this.setState((prevState) => ({
                        displaySocialInput: !prevState.displaySocialInput
                      }))
                    }
                    className='btn btn-light'
                  >
                    Add social networks link
                  </button>
                  <span className='text-muted ml-3'>Optional</span>
                  {socialInputs}
                  <input
                    type='submit'
                    value='Submit'
                    className='btn btn-info btn-block mt-4'
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  createProfile: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProfile }
)(withRouter(CreateProfile));
