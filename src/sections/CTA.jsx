import React from 'react';

const CTA = () => {
  return (
    <section className='relative py-12 md:py-36 px-6 overflow-hidden'>
      <img src='/assets/gradient.png' alt="gradient" className='absolute z-[-2] -top-10 left-40 opacity-70 w-auto h-auto max-w-none max-h-none' />
      <div className='container mx-auto'>
        <div className='p-16 mx-auto text-center max-w-6xl h-96 border border-gray-700 bg-blue-700 bg-opacity-20 rounded-3xl'>
          <h1 className='font-bold font-prompt text-6xl'>Start your Journey with LyfeLynk</h1>
        </div>
      </div>
    </section>
  );
};

export default CTA;
