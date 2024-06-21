import { Heart, Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import GetStarted from './components/GetStarted';
import FaqButton from './components/FaqButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = {
    vision: 'Vision',
    features: 'Features',
    about: 'About Us',
    contact: 'Contact Us',
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="fixed p-4 w-full z-50 top-0 space-y-2">
      <div className="w-full h-full fixed inset-0 pointer-events-none -z-10">
        <div className="circlePosition w-11/12 h-11/12 bg-[#367ed142] rounded-[100%] absolute -z-10 blur-[100px] flex justify-center items-center">
          <div className="circle w-[17rem] h-[17rem] bg-[#5743ee42] rounded-[100%]" />
        </div>
      </div>

      <div className="px-6 py-4 container mx-auto flex justify-between items-center rounded-2xl border border-gray-700 shadow-lg backdrop-blur-md">
        <button className="flex items-center space-x-2 cursor-pointer" onClick={scrollToTop}>
          <Heart className="text-blue-600 w-8 h-8" />
          <span className="font-bold text-3xl font-prompt">LyfeLynk</span>
        </button>
        <div className="hidden lg:flex space-x-8 items-center">
          {Object.keys(links).map((key) => (
            <Link
              key={key}
              activeClass="active"
              to={key}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-gray-200 hover:text-white font-bold text-sm hover:underline cursor-pointer"
            >
              {links[key]}
            </Link>
          ))}
          <div className='flex space-x-6'>
            <FaqButton />
            <GetStarted />
          </div>
        </div>
        <div className="lg:hidden">
          {isOpen ? (
            <X className="w-8 h-8 text-blue-600 border-2 border-blue-600 rounded-lg px-1 cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
          ) : (
            <Menu className="w-8 h-8 text-blue-600 border-2 border-blue-600 rounded-lg px-1 cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
          )}
        </div>
      </div>
      <div className={`lg:hidden px-6 py-4 border border-gray-700 backdrop-blur-xl rounded-2xl transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        {Object.keys(links).map((key) => (
          <Link
            key={key}
            activeClass="active"
            to={key}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="block text-center text-white hover:text-blue-600 font-bold text-sm hover:underline cursor-pointer py-2"
            onClick={() => setIsOpen(false)}
          >
            {links[key]}
          </Link>
        ))}
        <FaqButton />
        <GetStarted />
      </div>
    </nav>
  );
};

export default Navbar;
