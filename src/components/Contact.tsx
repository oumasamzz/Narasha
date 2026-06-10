import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Any questions or feedback? We can't wait to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl p-8 text-white h-full">
              <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin size={24} className="mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Location</p>
                    <p className="text-amber-100">
                      Talek, Masai Mara
                      <br />
                      Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail size={24} className="mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a
                      href="mailto:sanaipeilemein@gmail.com"
                      className="text-amber-100 hover:text-white transition-colors"
                    >
                      sanaipeilemein@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone size={24} className="mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <a
                      href="tel:+254715180050"
                      className="text-amber-100 hover:text-white transition-colors"
                    >
                      (+254) 715 180 050
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                <p className="font-semibold mb-2">Operating Hours</p>
                <p className="text-amber-100">24/7 Reception</p>
                <p className="text-amber-100">Check-in: 11:00 AM</p>
                <p className="text-amber-100">Check-out: 10:00 AM</p>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-20'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
