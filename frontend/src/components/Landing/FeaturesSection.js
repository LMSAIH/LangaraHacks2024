import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <h2>Features</h2>
      <div className="features-grid">
        <div className="feature">
          <img src="icon1.png" alt="Budgeting" />
          <h3>Budgeting Made Easy</h3>
          <p>Track your income and expenses effortlessly.</p>
        </div>
        <div className="feature">
          <img src="icon2.png" alt="Investments" />
          <h3>Personalized Investment Tips</h3>
          <p>Grow your savings with expert recommendations.</p>
        </div>
        <div className="feature">
          <img src="icon3.png" alt="Savings Goals" />
          <h3>Track Savings Goals</h3>
          <p>Stay on top of your financial goals with real-time insights.</p>
        </div>
        <div className="feature">
          <img src="icon4.png" alt="Debt Management" />
          <h3>Debt Management</h3>
          <p>Manage and pay off debts effectively.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
