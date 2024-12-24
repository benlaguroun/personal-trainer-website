// src/components/Home/GallerySection.js
import React from "react";

const GallerySection = () => {
  return (
    <section className="gallery-section">
      <h2>Our Gallery</h2>
      <div className="gallery-grid">
        {/* Example images */}
        <img src="/path/to/image1.jpg" alt="yoga session" />
        <img src="/path/to/image2.jpg" alt="fitness class" />
        <img src="/path/to/image3.jpg" alt="trainer helping a client" />
      </div>
    </section>
  );
};

export default GallerySection;
