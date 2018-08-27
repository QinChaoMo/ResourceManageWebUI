import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Main from './layout/main';
import SignIn from './layout/signin';

const RootRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/signin" component={SignIn} />
      <Route path="/" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default RootRouter;
