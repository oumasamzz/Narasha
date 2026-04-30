import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <Navigation scrolled={scrolled} />
      <Hero />
      <About />
      <Rooms />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;