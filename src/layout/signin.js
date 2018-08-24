import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SignIn extends Component {
  render() {
    return (
      <div>
        Sign In Page
        <Link to="/">Home</Link>
      </div>
    );
  }
}
