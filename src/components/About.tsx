import { useEffect, useRef, useState } from 'react';

export default function About() {
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-amber-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/hosts.JPG"
                alt="Narasha Homestay"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-20'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Narasha Homestay owner and manager, Dolorence Senaipei, is a local
              born and bred Maasai who speaks a bit of German, English, Swahili, and
              Maasai.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              She and the team are dedicated and passionate about providing
              personalized service with a genuine smile, ensuring your stay in
              the Masai Mara is unforgettable.
            </p>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-amber-600">
              <p className="text-gray-800 italic">
                "Experience authentic Maasai hospitality in a comfortable,
                welcoming environment designed to make you feel at home."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
