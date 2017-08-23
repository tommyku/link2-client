import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
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

export default App;
