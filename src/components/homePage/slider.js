import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import defaultImage from "../../assets/poster-1.png";

const slides = [
  "https://source.unsplash.com/800x400/?nature,water",
  "https://source.unsplash.com/800x400/?nature,forest",
  "https://source.unsplash.com/800x400/?nature,mountain",
  "https://source.unsplash.com/800x400/?nature,beach",
  "https://images.assettype.com/fortuneindia/2024-08-20/21j7y1n8/Gems.jpg?w=480&h=270&q=60&fit=cover",
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] mx-auto overflow-hidden rounded-lg mt-16 shadow-lg">
      <div className="flex transition-transform ease-in-out duration-500 h-full" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <img 
            key={index} 
            src={slide} 
            alt={`Slide ${index + 1}`} 
            className="w-full h-full object-cover flex-shrink-0" 
            onError={(e) => (e.target.src = defaultImage)} 
          />
        ))}
      </div>
      
      <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white">
        <FaChevronLeft size={24} />
      </button>
      <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white">
        <FaChevronRight size={24} />
      </button>
      
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400"}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;