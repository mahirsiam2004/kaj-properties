import React, { useState, useEffect } from 'react';

const ImageSlideshow = ({ images, alt = "Project Images", interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => 
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
                setIsTransitioning(false);
            }, 300);
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval]);

    const goToSlide = (index) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex(index);
            setIsTransitioning(false);
        }, 300);
    };

    return (
        <div className="slideshow-container">
            <div className="slideshow-wrapper">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`slide ${index === currentIndex ? 'active' : ''} ${isTransitioning ? 'transitioning' : ''}`}
                    >
                        <img src={image} alt={`${alt} ${index + 1}`} />
                    </div>
                ))}
            </div>

            {/* Dots Indicator */}
            <div className="slideshow-dots">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`slideshow-dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageSlideshow;
