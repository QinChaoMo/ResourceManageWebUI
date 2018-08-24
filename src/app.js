import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import RootRouter from './router';

if (process.env.NODE_ENV === 'development') {
  import mockAuth from '../mock/auth';
  mockAuth();
}

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootRouter />
      </Provider>
    );
  }
}
