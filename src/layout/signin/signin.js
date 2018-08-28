import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from './header.svg';
import './signin.css';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="page">
        <Top />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {};

SignIn.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn);

function Top() {
  return (
    <div>
      <Header />
      <SignInForm />
    </div>
  );
}

function Header() {
  return (
    <div>
      <img src={logo} alt="" id="logo" />
      <span>WinSide</span>
    </div>
  );
}

function SignInForm() {
  return <div>form</div>;
}

function Footer() {
  return <div>footer.</div>;
}
