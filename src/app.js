import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import RootRouter from './router';
import mockAuth from '../mock/auth';

if (process.env.NODE_ENV === 'development') {
  mockAuth();
}

export default function App() {
  return (
    <Provider store={store}>
      <RootRouter />
    </Provider>
  );
}
