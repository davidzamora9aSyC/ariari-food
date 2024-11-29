import { useState } from 'react';
import blogharvest from '../assets/images/blogharvest.png';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [blogharvest];

  const nextSlide = () => setCurrentSlide((currentSlide + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[60vh] overflow-hidden">
      <div
        className="flex transition-transform duration-1000"
      >
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className="w-full object-cover"
          />
        ))}
      </div>
      <div className="absolute inset-0 flex justify-between items-center px-4">
        <button
          onClick={prevSlide}
          className="bg-green-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
        >
          &#8249;
        </button>
        <button
          onClick={nextSlide}
          className="bg-green-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
