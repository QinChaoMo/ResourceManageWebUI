import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import Main from './layout/main';
import SignIn from './layout/signin';

export default class RootRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    );
  }
}
