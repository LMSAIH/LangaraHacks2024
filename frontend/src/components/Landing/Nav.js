import React from 'react';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
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
