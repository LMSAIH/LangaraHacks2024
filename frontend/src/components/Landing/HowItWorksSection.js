import React from 'react';
import s1 from './images/step1.png';
import s2 from './images/step2.png';
import s3 from './images/step3.png';

const HowItWorksSection = () => {
  return (
    <section className="how-it-works-section">
      <h2>How It Works</h2>
      <div className="how-it-works-steps">
        <div className="step">
          <img src={s1} alt="Sign Up"/>
          <h3>Sign Up</h3>
          <p>Quick and easy setup with basic info.</p>
        </div>
        <div className="step">
          <img src={s2} alt="Personalized Insights" />
          <h3>Get Personalized Insights</h3>
          <p>Based on your financial data.</p>
        </div>
        <div className="step">
          <img src={s3} alt="Achieve Your Goals" />
          <h3>Achieve Your Goals</h3>
          <p>Watch your financial health improve.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
