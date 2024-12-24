import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1>Transform Your Life</h1>
        <p>Join our classes and achieve your fitness goals today!</p>
        <button className="cta-button">Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;
