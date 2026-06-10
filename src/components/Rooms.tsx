import { useEffect, useRef, useState } from 'react';
import { Wifi, Coffee, Wind, Users, CheckCircle, Utensils, MapPin, Heart } from 'lucide-react';

export default function Rooms() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const rooms = [
    {
      name: 'Bandas',
      price: '$410',
      period: 'per night',
      image: '/bandas1.png',
      capacity: '4 Guests',
      features: [
        'Comfortable double & single beds',
        'Private bathroom',
        'Fan and mosquito net',
      ],
    },
    {
      name: 'Deluxe Room',
      price: '$300',
      period: 'per night',
      image: '/room1.JPG',
      capacity: '2 Guests',
      features: [
        'Queen-size bed',
        'En-suite bathroom',
        'Air conditioning',
        'Complimentary breakfast',
        'Safari view',
      ],
      popular: true,
    },
    {
      name: 'Family Suite',
      price: '$400',
      period: 'per night',
      image: '/room4.JPG',
      capacity: '4-5 Guests',
      features: [
        'Spacious layout',
        'Living area',
        'Two bathrooms',
        'Full breakfast included',
      ],
    },
  ];

  return (
    <section
      id="rooms"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-amber-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Accommodation
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our comfortable rooms, all rates clearly displayed
          </p>
        </div>

        {/* Integrated Homestay Description */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-amber-100 mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-lg">
                <Users size={20} />
                <h3>Comfortable Accommodations</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Narasha Homestay in Talek offers family rooms with private bathrooms, terraces, and free WiFi. Each room includes a dining area, wardrobe, and modern amenities.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-lg">
                <Utensils size={20} />
                <h3>Dining Experience</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                The family-friendly restaurant serves African, Indian, and American cuisines with vegan and dairy-free options. Guests can enjoy brunch and dinner in a modern and romantic ambiance.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-lg">
                <Coffee size={20} />
                <h3>Leisure Facilities</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                The property features a sun terrace, garden, outdoor fireplace, and outdoor seating area. Additional amenities include a lounge, shared kitchen, and free on-site parking.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-lg">
                <MapPin size={20} />
                <h3>Convenient Location</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Located 11 mi from Ol Kiombo Airport, Narasha Homestay provides easy access to Maasai Mara National Park. Guests appreciate the property staff and service support.
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-rose-600 bg-rose-50 px-2 py-1 rounded w-fit">
                <Heart size={14} className="fill-current" />
                <span>Couples rated it 8.7 for a two-person trip</span>
              </div>
            </div>
          </div>
        </div>

        {/* Room Grid Card Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div
              key={room.name}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {room.popular && (
                <div className="bg-amber-600 text-white text-center py-2 font-semibold">
                  Most Popular
                </div>
              )}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {room.name}
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-amber-600">
                    {room.price}
                  </span>
                  <span className="text-gray-600 ml-2">{room.period}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <Users size={20} className="mr-2" />
                  <span>{room.capacity}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {room.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start text-gray-700"
                    >
                      <CheckCircle
                        size={20}
                        className="text-green-500 mr-2 flex-shrink-0 mt-0.5"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Features Highlight Banner */}
        <div className="mt-12 bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <Wifi size={32} className="mx-auto mb-2" />
              <p className="font-semibold">Free Wi-Fi</p>
            </div>
            <div>
              <Coffee size={32} className="mx-auto mb-2" />
              <p className="font-semibold">Breakfast Included</p>
            </div>
            <div>
              <Wind size={32} className="mx-auto mb-2" />
              <p className="font-semibold">Air Conditioning</p>
            </div>
            <div>
              <Users size={32} className="mx-auto mb-2" />
              <p className="font-semibold">Family Friendly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}