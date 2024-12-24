import React from "react";
import "./ServicesSection.css";

const ServicesSection = () => {
  const services = [
    { title: "Yoga Classes", icon: "🧘‍♀️" },
    { title: "Strength Training", icon: "🏋️" },
    { title: "Cardio Sessions", icon: "❤️" },
  ];

  return (
    <section id="services" className="services-section">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
