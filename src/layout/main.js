import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Main extends Component {
  render() {
    return (
      <div>
        Main Page.
        <Link to="/signin">to signin</Link>
      </div>
    );
  }
}
