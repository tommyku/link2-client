import React, { PureComponent } from 'react';
import LoginFormContainer from '../containers/LoginFormContainer';

class LoginPage extends PureComponent {
  render() {
    return (
      <section className='login-page'>
        <LoginFormContainer />
      </section>
    );
  }
}

export default LoginPage;
