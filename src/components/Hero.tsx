import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
     <div
  className="absolute inset-0 z-0"
  style={{
    transform: `translateY(${offsetY * 0.5}px)`,
    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/src/assets/hero-bg.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
/>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1
          className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          Experience Comfort and Hospitality
        </h1>
        <p
          className="text-xl md:text-2xl mb-8 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          Your home away from home in the heart of Masai Mara
        </p>
        <button
          onClick={scrollToNext}
          className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          Explore Our Rooms
        </button>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
}
