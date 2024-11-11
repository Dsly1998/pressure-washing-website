// Gallery.js

import React, { useState } from "react";
import "./Gallery.css";
import { cards } from "../Cards/Cards"; // Import cards from Cards.js

// Group images for slides
const groupedCards = [
  [
    { image: cards[5].image, alt: cards[5].alt, caption: cards[5].caption }, // gallery33 - Before
    { image: cards[6].image, alt: cards[6].alt, caption: cards[6].caption }, // gallery31 - After
  ],
  [
    { image: cards[3].image, alt: cards[3].alt, caption: cards[3].caption }, // gallery22 - Before
    { image: cards[4].image, alt: cards[4].alt, caption: cards[4].caption }, // gallery21 - After
  ],
  [
    { image: cards[1].image, alt: cards[1].alt, caption: cards[1].caption }, // gallery11 - Before
    { image: cards[2].image, alt: cards[2].alt, caption: cards[2].caption }, // gallery12 - After
  ],
  [
    { image: cards[7].image, alt: cards[7].alt, caption: cards[7].caption }, // before41 - Before
    { image: cards[8].image, alt: cards[8].alt, caption: cards[8].caption }, // after41 - After
  ],
  [
    { image: cards[9].image, alt: cards[9].alt, caption: cards[9].caption }, // before51 - Before
    { image: cards[10].image, alt: cards[10].alt, caption: cards[10].caption }, // after51 - After
  ],
  [
    { image: cards[11].image, alt: cards[11].alt, caption: cards[11].caption }, // before61 - Before
    { image: cards[12].image, alt: cards[12].alt, caption: cards[12].caption }, // after61 - After
  ],
  [{ image: cards[0].image, alt: cards[0].alt, caption: cards[0].caption }], // gallery32 - Alone
];

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? groupedCards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === groupedCards.length - 1 ? 0 : prevIndex + 1
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
          >
            &#9664;
          </button>
          <div className="gallery__slide">
            {groupedCards[currentIndex].map((card, index) => (
              <div key={index} className="cards__item">
                <img src={card.image} alt={card.alt} className="cards__image" />
                <h3 className="cards__caption">{card.caption}</h3>
              </div>
            ))}
          </div>
          <button
            className="gallery__arrow gallery__arrow--right"
            onClick={handleNext}
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
