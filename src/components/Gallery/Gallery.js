// Gallery.js

import React, { useState } from "react";
import "./Gallery.css";
import { getGallerySlides } from "../../data/galleryData";

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = getGallerySlides();

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="gallery-container" id="gallery">
      <div className="gallery-content">
        <div className="decorative-dots"></div>
        <h2 className="gallery__title">Gallery</h2>
        <div className="gallery__slideshow">
          <button
            className="gallery__arrow gallery__arrow--left"
            onClick={handlePrev}
            aria-label="Previous slide"
          >
            &#9664;
          </button>
          <div className="gallery__slide">
            {slides[currentIndex].map((item, index) => (
              <div key={index} className="cards__item">
                <img src={item.image} alt={item.alt} className="cards__image" />
                <h3 className="cards__caption">{item.caption}</h3>
              </div>
            ))}
          </div>
          <button
            className="gallery__arrow gallery__arrow--right"
            onClick={handleNext}
            aria-label="Next slide"
          >
            &#9654;
          </button>
        </div>
        <div className="decorative-dots-2"></div>
        <div className="decorative-dots-3"></div>
        <div className="decorative-dots-4"></div>
        <div className="decorative-dots-5"></div>
      </div>
    </div>
  );
}

export default Gallery;
