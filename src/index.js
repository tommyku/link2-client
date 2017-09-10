import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import linkApp from './reducers';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
let store;

switch (process.env.NODE_ENV) {
case 'development':
  store = createStore(
    linkApp,
    applyMiddleware(
      thunkMiddleware,
      createLogger()
    )
  );
  break;
default:
  store = createStore(
    linkApp,
    applyMiddleware(
      thunkMiddleware
    )
  );
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
