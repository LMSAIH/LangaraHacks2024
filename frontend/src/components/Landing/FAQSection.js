import React from 'react';

const FAQSection = () => {
  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq">
        <div className="question">
          <h3>How does the AI provide personalized advice?</h3>
          <p>We use your financial data to give you insights that are tailored to your goals.</p>
        </div>
        <div className="question">
          <h3>Is my data safe?</h3>
          <p>Your data is encrypted and securely stored to ensure your privacy.</p>
        </div>
        <div className="question">
          <h3>How much does it cost?</h3>
          <p>Our basic service is free, with premium plans available for advanced features.</p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
