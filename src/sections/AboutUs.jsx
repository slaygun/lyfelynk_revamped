import React from 'react';
import GetInTouch from "../components/GetInTouch";
import GetStarted from "../components/GetStarted";
import ShinyBadgeButton from '../components/ShinyBadge';

const AboutUs = () => {
  return (
    <section id="about" className="py-12 md:py-24 px-6">
      <div className="relative container mx-auto text-center">
            <div className='absolute bottom-0 -z-[2] w-[100%] h-[50%] rounded-full bluish__gradient'/>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h1>
            <p className="pt-2 md:py-4 mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The talent that drives LyfeLynk.
            </p>
            <div className='flex'>
                <div className='w-80 h-96 border border-gray-800 rounded-3xl'>

                </div>
            </div>
      </div>
    </section>
  );
};

export default AboutUs;
