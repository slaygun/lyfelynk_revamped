import React from 'react';
import GetInTouch from "../components/GetInTouch";
import GetStarted from "../components/GetStarted";
import './Hero.css';
import ShinyBadgeButton from '../components/ShinyBadge';

const Hero = () => {
  return (
    <section className="relative z-10 py-6 md:py-12 px-6 mt-32 md:mt-36">
      <div className='absolute bottom-32 -z-[2] w-1/3 h-2/3 rounded-full shadow__gradient' />
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="flex flex-col items-center md:items-start md:w-1/2">
          <h1 className="font-space-grotesk tracking-tighter text-6xl md:text-8xl font-bold text-center md:text-left">
            Digitally<br/>
            <span className="bg-gradient-to-bl from-pink-500 via-indigo-500 to-sky-500 text-transparent bg-clip-text">
              Linking
            </span>
            <br /> your Health.
          </h1>

          <div className="py-4 flex space-x-4">
            <GetInTouch />
            <GetStarted />
          </div>

          <p className="py-2 lg:pr-36 font-mono font-medium md:text-lg text-center md:text-left">
            Access all your health data with a single click and make it work for you.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="/assets/heroblock_trans.png"
            alt="Hero" 
            className="mx-auto animate-customAnimation"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
