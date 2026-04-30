export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Narasha Homestay</h3>
            <p className="text-gray-400">
              Your home away from home in the heart of Masai Mara, Kenya.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-amber-400 transition-colors">
                  Rooms
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Talek, Masai Mara</li>
              <li>Kenya</li>
              <li>
                <a
                  href="mailto:sanaipeilemein@gmail.com"
                  className="hover:text-amber-400 transition-colors"
                >
                  sanaipeilemein@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+254715180050"
                  className="hover:text-amber-400 transition-colors"
                >
                  (+254) 715 180 050
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Narasha Homestay. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
