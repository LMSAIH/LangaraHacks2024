import React from "react";
import HeroGraph from "./HeroGraph";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>
          Take Control of Your Finances with{" "}
          <span className="hero-enhance">AI</span>-Driven Advice
        </h1>
        <p>
          Your personalized guide to budgeting, savings, and smart investments.
        </p>

        <Link to="/signup">
          <button className="cta-button">Get Started</button>
        </Link>
      </div>

      <div className="hero-image">
        <HeroGraph />
      </div>
    </section>
  );
};

export default HeroSection;
