import React, { Component } from 'react';
import './Header.css';

import logo from '../assets/manomano-logo.svg'

class Header extends Component {
  render () {
    return (
      <div className="Header">
        <img src={logo} alt="logo" />
        <span className="title">Frontend Test</span>
      </div>
    );
  }
}

export default Header;
