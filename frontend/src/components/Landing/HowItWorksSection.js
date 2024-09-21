import React from 'react';

const HowItWorksSection = () => {
  return (
    <section className="how-it-works-section">
      <h2>How It Works</h2>
      <div className="how-it-works-steps">
        <div className="step">
          <img src="step1_icon.png" alt="Sign Up" />
          <h3>Sign Up</h3>
          <p>Quick and easy setup with basic info.</p>
        </div>
        <div className="step">
          <img src="step2_icon.png" alt="Personalized Insights" />
          <h3>Get Personalized Insights</h3>
          <p>Based on your financial data.</p>
        </div>
        <div className="step">
          <img src="step3_icon.png" alt="Achieve Your Goals" />
          <h3>Achieve Your Goals</h3>
          <p>Watch your financial health improve.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
