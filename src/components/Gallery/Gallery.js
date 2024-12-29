// Gallery.js

import React, { useState } from "react";
import "./Gallery.css";
import { cards } from "../Cards/Cards"; // Import cards from Cards.js

// Group images for slides
const groupedCards = [
  [
    {
      image: cards[13].image,
      alt: cards[13].alt,
      caption: cards[13].caption, // Driveway - Before
    },
    {
      image: cards[14].image,
      alt: cards[14].alt,
      caption: cards[14].caption, // Driveway - After
    },
  ],
  [
    {
      image: cards[15].image,
      alt: cards[15].alt,
      caption: cards[15].caption, // Sidewalk - Before
    },
    {
      image: cards[16].image,
      alt: cards[16].alt,
      caption: cards[16].caption, // Sidewalk - After
    },
  ],
  [
    {
      image: cards[5].image,
      alt: cards[5].alt,
      caption: cards[5].caption, // Gallery33 - Before
    },
    {
      image: cards[6].image,
      alt: cards[6].alt,
      caption: cards[6].caption, // Gallery31 - After
    },
  ],
  [
    {
      image: cards[3].image,
      alt: cards[3].alt,
      caption: cards[3].caption, // Gallery22 - Before
    },
    {
      image: cards[4].image,
      alt: cards[4].alt,
      caption: cards[4].caption, // Gallery21 - After
    },
  ],
  [
    {
      image: cards[1].image,
      alt: cards[1].alt,
      caption: cards[1].caption, // Gallery11 - Before
    },
    {
      image: cards[2].image,
      alt: cards[2].alt,
      caption: cards[2].caption, // Gallery12 - After
    },
  ],
  [
    {
      image: cards[7].image,
      alt: cards[7].alt,
      caption: cards[7].caption, // Before41 - Before
    },
    {
      image: cards[8].image,
      alt: cards[8].alt,
      caption: cards[8].caption, // After41 - After
    },
  ],
  [
    {
      image: cards[9].image,
      alt: cards[9].alt,
      caption: cards[9].caption, // Before51 - Before
    },
    {
      image: cards[10].image,
      alt: cards[10].alt,
      caption: cards[10].caption, // After51 - After
    },
  ],
  [
    {
      image: cards[11].image,
      alt: cards[11].alt,
      caption: cards[11].caption, // Before61 - Before
    },
    {
      image: cards[12].image,
      alt: cards[12].alt,
      caption: cards[12].caption, // After61 - After
    },
  ],
  [
    {
      image: cards[0].image,
      alt: cards[0].alt,
      caption: cards[0].caption, // Gallery32 - Alone
    },
  ],
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
