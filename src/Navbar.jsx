import { ArrowRight, Heart, Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = {
    vision: 'Vision',
    features: 'Features',
    about: 'About Us',
    contact: 'Contact Us',
  };

  return (
    <nav className="p-4 w-full z-10 top-0 shadow-md space-y-2">
      <div className="px-6 py-4 container mx-auto flex justify-between items-center rounded-2xl border border-gray-700 shadow-md">
        {/* <img 
            src='/assets/lyfelynk.png'
            alt="LyfeLynk"
            className='w-36 md:w-44'
        /> */}
        <div className='flex items-center space-x-2'>
            <Heart className='text-blue-600 w-8 h-8'/>
            <span className='font-bold text-3xl font-prompt'>LyfeLynk</span>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          {Object.keys(links).map((key) => (
            <Link
              key={key}
              activeClass="active"
              to={key}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-400 hover:text-white font-black text-sm hover:underline cursor-pointer"
            >
              {links[key]}
            </Link>
          ))}
          <a 
            href="https://daqqe-siaaa-aaaag-ak44a-cai.icp0.io"
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-blue-500 text-white hover:bg-blue-700 hover:text-gray-800 rounded-full px-6 py-2 transition duration-500 ease-in-out group"
          >
            <span className="flex items-center font-medium font-prompt">
              Get Started
              <ArrowRight className="w-4 h-6 ml-2 transform transition-transform duration-500 ease-in-out group-hover:translate-x-2"/>
            </span>
          </a>
        </div>
        <div className="md:hidden">
          {isOpen ? (
            <X className="w-8 h-8 text-blue-600 border-2 border-blue-600 rounded-lg px-1 cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
          ) : (
            <Menu className="w-8 h-8 text-blue-600 border-2 border-blue-600 rounded-lg px-1 cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
          )}
        </div>
      </div>
      <div className={`md:hidden px-6 py-4 border border-gray-700 rounded-2xl transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        {Object.keys(links).map((key) => (
          <Link
            key={key}
            activeClass="active"
            to={key}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="block text-center text-gray-400 hover:text-blue-600 font-black text-sm hover:underline cursor-pointer py-2"
            onClick={() => setIsOpen(false)}
          >
            {links[key]}
          </Link>
        ))}
        <a 
          href="https://daqqe-siaaa-aaaag-ak44a-cai.icp0.io"
          target="_blank" 
          rel="noopener noreferrer" 
          className="block bg-blue-500 text-white hover:bg-blue-700 hover:text-gray-800 rounded-full px-6 py-2 transition duration-500 ease-in-out group my-2"
        >
          <span className="flex items-center justify-center font-medium font-prompt">
            Get Started
            <ArrowRight className="w-4 h-6 ml-2 transform transition-transform duration-500 ease-in-out group-hover:translate-x-2"/>
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
