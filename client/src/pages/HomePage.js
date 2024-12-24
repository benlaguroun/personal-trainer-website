import React from "react";
import Menubar from "../components/Menubar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection"; // Add a testimonials section
// Add a gallery section
import ContactSection from "../components/ContactSection"; // Add a contact section
import Footer from "../components/Footer";

// Import other sections as needed (add the sections in the future as you develop them)

const HomePage = () => {
  return (
    <>
      <Menubar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />

      <ContactSection />
      {/* Add any additional sections as you create them */}
      <Footer />
    </>
  );
};

export default HomePage;
