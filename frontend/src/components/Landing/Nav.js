import React from 'react';
import logo from './images/logo2.png';
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} height="30px"></img>
        <Link to="/">FinanceAdvisor</Link>
      </div>
      <div className="navbar-buttons">
      <Link to = '/login'><button className="login-btn">Log In</button></Link>
      <Link to = '/signup'>  <button className="signup-btn">Sign Up</button></Link>
      </div>
    </nav>
  );
};

export default Nav;
