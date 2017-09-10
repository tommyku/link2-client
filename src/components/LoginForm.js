import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    const username = this.refs['username'].value;
    const password = this.refs['password'].value;
    this.props.handleLogin({ username, password });
  }

  render() {
    return (
      <form onSubmit={ this.handleLogin }>
        <div>
          <label htmlFor='username'>Username</label>
          <input type='text' name='username' id='username' ref='username' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' id='password' ref='password' />
        </div>
        <div>
          <input type='submit' />
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired
}

export default LoginForm;
