import React, { useState } from 'react';
import ShinyBadgeButton from '../components/ShinyBadge';

const Techstack = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const tabImages = [
    "/assets/techstack/f4-1.png",
    "/assets/techstack/f4-2.png",
    "/assets/techstack/f4-3.png",
  ];

  const tabNames = ["Dfinity", "VETKeys", "ABDM"];

  const tabContent = [
    (
      <div>
        <ShinyBadgeButton text="Internet Computer (Dfinity)" />
        
        <h1 className="pt-8 text-xl md:text-2xl font-bold text-white py-4">
        Built on the Blockchain for Unmatched Security & Scalability
        </h1>
        <p>
        Lyfelynk leverages the power of the Internet Computer blockchain, 
        providing decentralized infrastructure that guarantees the utmost 
        security and scalability for your sensitive health data.
        </p>
      </div>
    ),
    (
      <div>
        <ShinyBadgeButton text="VETKeys" />
        <h1 className="pt-8 text-xl md:text-2xl font-bold text-white py-4">
          Privacy by Design with VETKeys
        </h1>      
        <p>
        Lyfelynk employs cutting-edge VETKeys technology to ensure your health 
        data remains anonymous while empowering medical research. VETKeys enable 
        advanced encryption and secure sharing without compromising your privacy.      
        </p>
      </div>
    ),
    (
      <div>
        <ShinyBadgeButton text="Ayushman Bharat Digital Mission" />
        <h1 className="pt-8 text-xl md:text-2xl font-bold text-white py-4">
          Aligning with India's Healthcare Vision
        </h1>      
        <p>
        Lyfelynk proudly integrates with the ABDM framework, empowering you to contribute 
        your health data to support nation-wide healthcare advancement. Your participation 
        plays a vital role in driving research and improving healthcare delivery for all Indians.
        </p>
      </div>
    ),
  ];

  return (
    <section className='py-12 md:py-24 px-6'>
      <div className="container mx-auto p-12 flex flex-col lg:flex-row bg-primary rounded-3xl bg-blue-500 bg-opacity-80">
        {/* Content Column */}
        <div className="lg:flex-1 lg:w-1/2">
          <h1 className="text-3xl font-space-grotesk font-bold tracking-tighter sm:text-4xl md:text-5xl">Tech Stack</h1>

          {/* Tab Indicator */}
          <div className="pt-4 flex justify-start flex-wrap">
            <div className="flex px-2 rounded-full shadow-md bg-black">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className={`cursor-pointer py-2 mb-2 mr-2 rounded-2xl sm:mb-0 sm:mr-2`}
                  onClick={() => handleTabClick(index + 1)}
                >
                  <div
                    className={`relative flex items-center py-2 px-3 rounded-full text-white ${
                      activeTab === index + 1 ? 'bg-gray-800' : ''
                    }`}
                  >
                    <span className={`relative z-10 text-sm md:text-md`}>
                      {tabNames[index]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-2 md:pr-8 lg:h-full">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className={`h-1/2 ${activeTab === index + 1 ? '' : 'hidden'}`}>
                <p className='text-sm md:text-xl'>
                  {tabContent[index]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Column */}
        <div className="shadow-[7px_7px_153px_10px_rgba(45,_72,_210,_0.52)] lg:flex-shrink-0 lg:w-1/2 mt-2 lg:mt-0">
          <img src={tabImages[activeTab - 1]} alt="Technologies Used" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default Techstack;
