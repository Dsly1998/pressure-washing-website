// Gallery.js

import React, { useState } from 'react';
import './Gallery.css';
import { cards } from '../Cards/Cards'; // Import cards from Cards.js

// Group images for slides
const groupedCards = [
    [
        { image: cards[5].image, alt: cards[5].alt, caption: cards[5].caption }, // gallery33
        { image: cards[6].image, alt: cards[6].alt, caption: cards[6].caption }, // gallery31
    ],
    [
        { image: cards[3].image, alt: cards[3].alt, caption: cards[3].caption }, // gallery22
        { image: cards[4].image, alt: cards[4].alt, caption: cards[4].caption }, // gallery21
    ],
    [
        { image: cards[1].image, alt: cards[1].alt, caption: cards[1].caption }, // gallery11
        { image: cards[2].image, alt: cards[2].alt, caption: cards[2].caption }, // gallery12
    ],
    [{ image: cards[0].image, alt: cards[0].alt, caption: cards[0].caption }], // gallery32 alone
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
    <div className="gallery-container">
        <div className="gallery-content">
        <div className="decorative-dots"></div>
            <h2 className='gallery__title'>Gallery</h2>
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
                            <img
                                src={card.image}
                                alt={card.alt}
                                className="cards__image"
                            />
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
