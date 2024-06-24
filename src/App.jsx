import React from 'react';
import Navbar from './Navbar';
import Hero from './sections/Hero';
import Hero2 from './sections/Hero2';
import Features1 from './sections/Features1';
import Features2 from './sections/Features2';
import Techstack from './sections/TechStack';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Hero2/>
      <Features1/>
      <Features2/>
      <Techstack/>
    </div>
  );
};

export default App;
