import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Us</h2>
      <div className="about-content">
        <img src="/path-to-image.jpg" alt="Trainer" />
        <p>
          Our personal trainer provides customized training sessions to help you
          achieve your fitness goals. From yoga to strength training, we have
          everything you need.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
