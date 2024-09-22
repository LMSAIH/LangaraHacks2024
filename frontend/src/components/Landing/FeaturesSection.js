import React from 'react';
import f1 from './images/feat1.png';
import f2 from './images/feat2.png';
import f3 from './images/feat3.png';
import f4 from './images/feat4.png';

const FeaturesSection = () => {
  
  return (
    <section className="features-section">
      <h2>Features</h2>
      <div className="features-grid">
        <div className="feature">
          <img src={f1} alt="Budgeting" />
          <h3>Budgeting Made Easy</h3>
          <p>Track your income and expenses effortlessly.</p>
        </div>
        <div className="feature">
          <img src={f2} alt="Investments" />
          <h3>Personalized Investment Tips</h3>
          <p>Grow your savings with expert recommendations.</p>
        </div>
        <div className="feature">
          <img src={f3} alt="Savings Goals" />
          <h3>Track Savings Goals</h3>
          <p>Stay on top of your financial goals with real-time insights.</p>
        </div>
        <div className="feature">
          <img src={f4} alt="Debt Management" />
          <h3>Debt Management</h3>
          <p>Manage and pay off debts effectively.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
