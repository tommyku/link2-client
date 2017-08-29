import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    const payload = JSON.stringify({
      username: this.refs['username'].value,
      password: this.refs['password'].value
    });
    fetch('http://localhost:3000/login', { method: 'POST', body: payload })
      .then((res) => {
        res.json().then(console.log);
      })
      .catch(console.log)
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
