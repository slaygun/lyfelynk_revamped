import { Twitter, Instagram, Linkedin, Heart } from 'lucide-react';
import { Link } from 'react-scroll';
import Socials from './components/Socials';

export default function Footer() {
  const links = [
    { id: 'features', text: 'Features' },
    { id: 'about', text: 'About Us' },
    { id: 'contact', text: 'Contact Us' },
    { id: 'faqs', text: 'FAQs' },
  ];

  return (
    <footer className="text-white p-10">
      <div className="border-t border-gray-800 mt-8 py-4"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
        <div>
          <div className="text-xl font-semibold mb-4 flex items-center space-x-2">
          <img src="/assets/heartlogo.png" alt="logo" className="w-12"/>
            <span className="font-bold text-3xl font-prompt">LyfeLynk</span>
          </div>
          <p className="text-gray-400">
            Digitally Linking Your Health.
            <br />
            © 2024 LyfeLynk All rights reserved.
          </p>
        </div>

        <div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul>
                {links.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={link.id}
                      smooth={true}
                      duration={500}
                      offset={-120}
                    >
                      <button className="text-gray-400 hover:text-gray-300 cursor-pointer">
                        {link.text}
                      </button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Socials/>
          </div>
        </div>
      </div>
    </footer>
  );

}
