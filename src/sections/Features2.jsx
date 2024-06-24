import React from 'react';
import ShinyBadgeButton from '../components/ShinyBadge';
import SharingData from '../components/SharingData';

const Features2 = () => {
  return (
    <section className='py-12 md:py-24 px-6'>
      <div className='container mx-auto text-center'>
        <ShinyBadgeButton text="Advanced Health Solutions" />
        <h2 className='pt-6 pb-12 md:pb-24 font-space-grotesk font-medium text-2xl md:text-4xl'>
          Ethical Data Sourcing and DeAI Analytics
        </h2>
        {/* First Row */}
        <div>
          <div className="lg:flex">
            <div className="lg:w-2/6 px-6 py-6 border border-gray-700 rounded-3xl mb-4 lg:mb-0 lg:mr-8">
              <div className='relative text-left bg-cover bg-center' style={{ backgroundImage: "url('/assets/grid.png')" }}>
              <SharingData className="absolute z-[2] bottom-14 -right-8"/>
                <button className='bg-purple-400 py-1 px-2 rounded-lg text-sm font-mono'>IMPACT</button>
                <div className='flex justify-center items-center'>
                  <img src='/assets/bento/impactiso.png' alt="impact" className='w-96' />
                </div>
              </div>
              <div className='pb-6 text-left'>
                <h1 className='py-6 text-2xl lg:text-3xl font-prompt font-medium'>Accelerate scientific advancements!</h1>
                <p className='text-sm lg:text-base text-gray-500'>Share your anonymized health data and accelerate discoveries that have the potential to transform the medical world and make a meaningful impact on countless lives.</p>
              </div>
            </div>
            <div className="lg:w-4/6 lg:flex border border-gray-700 rounded-3xl mb-4 lg:mb-0">
              <div className='bg-cover bg-center' style={{ backgroundImage: "url('/assets/grid.png')" }}>

              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="lg:flex py-0 lg:py-4">
            <div className="lg:w-4/6 lg:flex border border-gray-700 rounded-3xl mb-4 lg:mb-0 lg:mr-8">
              <div className='bg-cover bg-center' style={{ backgroundImage: "url('/assets/grid.png')" }}>

              </div>
            </div>
            <div className="lg:w-2/6 border border-gray-700 rounded-3xl mb-4 lg:mb-0">
              <div className='bg-cover bg-center' style={{ backgroundImage: "url('/assets/grid.png')" }}>

              </div>
            </div>
          </div>

          {/* Third Row */}
          <div className="lg:flex">
            <div className="lg:w-2/6 border border-gray-700 rounded-3xl mb-4 lg:mb-0 lg:mr-8">
              <div className='bg-cover bg-center' style={{ backgroundImage: "url('/assets/grid.png')" }}>

              </div>
            </div>
            <div className="lg:w-4/6 lg:flex border border-gray-700 rounded-3xl mb-4 lg:mb-0">
              <div className='bg-cover bg-center' style={{ backgroundImage: "url('/assets/grid.png')" }}>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features2;
