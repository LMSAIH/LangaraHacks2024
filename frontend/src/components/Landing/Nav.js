import React from 'react';
import logo from './images/logo2.png';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} height="30px"></img>
        <a href="/">FinanceAdvisor</a>
      </div>
      <div className="navbar-buttons">
        <button className="login-btn">Log In</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
};

export default Nav;
