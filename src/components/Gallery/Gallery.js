import React, { useState } from 'react';
import './Gallery.css';
import gallery11 from '../../images/gallery11.png';
import gallery12 from '../../images/gallery12.png';
import gallery22 from '../../images/gallery22.png';
import gallery21 from '../../images/gallery21.png';
import gallery31 from '../../images/gallery31.png';
import gallery32 from '../../images/gallery32.png';
import gallery33 from '../../images/gallery33.png';

const images = [
    { src: [gallery32], caption: 'Red Line & Blue Pressure Washing' },
    { src: [gallery11, gallery12], caption: 'Before  After' },
    { src: [gallery22, gallery21], caption: 'Before  After' },
    { src: [gallery33, gallery31], caption: 'Before  After' },

];

function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="gallery-container">
            <div className="gallery-content">
                <h2>Gallery</h2>
                <div className="gallery__slideshow">
                    <button className="gallery__arrow gallery__arrow--left" onClick={handlePrev}>
                        &#9664;
                    </button>
                    <div className="gallery__slide">
                        {images[currentIndex].src.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Gallery Image ${currentIndex + 1}`}
                                className="gallery__image"
                            />
                        ))}
                        <div className="gallery__caption">{images[currentIndex].caption}</div>
                    </div>
                    <button className="gallery__arrow gallery__arrow--right" onClick={handleNext}>
                        &#9654;
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Gallery;