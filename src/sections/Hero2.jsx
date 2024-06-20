import React from 'react';
import ShinyBadgeButton from '../components/ShinyBadge';

const Hero2 = () => {
  return (
    <section className='py-6 md:py-12 px-6'>
      <div className='container mx-auto text-center'>
        <ShinyBadgeButton text='Trusted By' />
        <div className='py-2 flex justify-center items-center space-x-8 md:space-x-16'>
          <img src='/assets/trustedby/dfinity.png' className='w-24 md:w-52 h-auto filter grayscale hover:filter-none transition duration-500 ease-in-out' alt='Dfinity' />
          <img src='/assets/trustedby/icpd.png' className='w-24 md:w-52 h-auto filter grayscale hover:filter-none transition duration-500 ease-in-out' alt='ICPD' />
          <img src='/assets/trustedby/icph.png' className='w-24 md:w-52 h-auto filter grayscale hover:filter-none transition duration-500 ease-in-out' alt='ICPH' />
        </div>
      </div>
    </section>
  );
};

export default Hero2;
