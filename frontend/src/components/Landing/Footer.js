import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-links">
        <a href="/about">About</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="social-media">
        <a href="https://twitter.com"><img src="twitter_icon.png" alt="Twitter" /></a>
        <a href="https://facebook.com"><img src="facebook_icon.png" alt="Facebook" /></a>
        <a href="https://instagram.com"><img src="instagram_icon.png" alt="Instagram" /></a>
      </div>
      <p>© 2024 Your Company | Privacy Policy | Terms of Service</p>
    </footer>
  );
};

export default Footer;
