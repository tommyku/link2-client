import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginPage, IndexPage, NotFoundPage } from './pages';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={IndexPage} />
        <Route path='/login' exact component={LoginPage} />
        <Route path='/404' exact component={NotFoundPage} />
        <Redirect to='/404' />
      </Switch>
    );
  }
}

export default App;
