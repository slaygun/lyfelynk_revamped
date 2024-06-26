import React from 'react';
import GetInTouch from '../components/GetInTouch';
import GetStarted from '../components/GetStarted';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className='relative py-16 md:py-24 px-6 overflow-hidden'>
      <div className='container mx-auto'>
        <div className='absolute -z-[2] w-full lg:w-1/2 h-full left-0 lg:inset-x-1/4 -bottom-1/2 opacity-80 rounded-full cta__gradient' />

        <div className='relative p-8 sm:p-16 md:p-32 mx-auto w-fit border-2 border-gray-700 bg-gray-500  bg-opacity-20 rounded-3xl'>
            <img 
                src='/assets/glassheart2.png' 
                alt='heart in glass' 
                className='animate-levitate absolute w-32 md:w-48 lg:w-60 -bottom-16 sm:-bottom-16 md:-bottom-24 -right-8 sm:-right-8 md:-right-12 lg:-bottom-24 lg:-right-24'
            />
          <h1 className='font-bold font-space-grotesk tracking-tight text-4xl sm:text-5xl md:text-8xl'>Start your <br/> health journey <br/> today.</h1>
          <div className="pt-6 md:pt-12 flex space-x-4">
            <GetStarted/>
            <GetInTouch />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
