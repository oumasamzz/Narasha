import { useEffect, useRef, useState } from 'react';
import { Camera, Utensils, MapPin } from 'lucide-react';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Camera,
      title: 'Safari Tours',
      description:
        'Experience the breathtaking wildlife of Masai Mara with our expertly guided safari tours.',
      image:
        'https://images.pexels.com/photos/34098/south-africa-hluhluwe-giraffes-pattern.jpg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Utensils,
      title: 'Traditional Cuisine',
      description:
        'Savor authentic Maasai dishes and local Kenyan cuisine prepared with fresh ingredients.',
      image:
        '/cuisine2.png',
    },
    {
      icon: MapPin,
      title: 'Cultural Tours',
      description:
        'Immerse yourself in Maasai culture with guided tours of local villages and communities.',
      image:
        '/culturaltour.png',
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore What We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enhance your stay with our curated experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <service.icon
                    size={40}
                    className="mb-4 transform group-hover:scale-110 transition-transform"
                  />
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-200">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
