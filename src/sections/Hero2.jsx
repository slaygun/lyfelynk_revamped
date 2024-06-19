import React from 'react';
import ShinyBadgeButton from '../components/ShinyBadge';

const Hero2 = () => {
  return (
    <section className='p-6 md:p-4'>
      <div className='container mx-auto text-center'>
        <ShinyBadgeButton />
        <div className='py-2 flex justify-center items-center space-x-8 md:space-x-16'>
          <img src='/assets/trustedby/dfinity.png' className='w-24 md:w-52 h-auto filter grayscale' alt='Dfinity' />
          <img src='/assets/trustedby/icpd.png' className='w-24 md:w-52 h-auto filter grayscale' alt='ICPD' />
          <img src='/assets/trustedby/icph.png' className='w-24 md:w-52 h-auto filter grayscale' alt='ICPH' />
        </div>
      </div>
    </section>
  );
};

export default Hero2;
