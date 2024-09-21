import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>Take Control of Your Finances with <span className="hero-enhance">AI</span>-Driven Advice</h1>
        <p>Your personalized guide to budgeting, savings, and smart investments.</p>
        <button className="cta-button">Get Started</button>
      </div>
      <div className="hero-image">
        <img src="path_to_hero_image.png" alt="Financial planning" />
      </div>
    </section>
  );
};

export default HeroSection;
