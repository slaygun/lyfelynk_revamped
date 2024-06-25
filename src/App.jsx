import React from 'react';
import Navbar from './Navbar';
import Hero from './sections/Hero';
import Hero2 from './sections/Hero2';
import Features1 from './sections/Features1';
import Features2 from './sections/Features2';
import AboutUs from './sections/AboutUs';
import TechStack from './sections/TechStack';
import CTA from './sections/CTA';
import { Contact } from 'lucide-react';
import ContactUs from './sections/ContactUs';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Hero2/>
      <Features1/>
      <Features2/>
      <TechStack/>
      <AboutUs/>
      <CTA/>
      <ContactUs/>
    </div>
  );
};

export default App;
