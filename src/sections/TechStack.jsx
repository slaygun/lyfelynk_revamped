import React, { useState } from 'react';
import ShinyBadgeButton from '../components/ShinyBadge';

const TechStack = () => {
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
        <ShinyBadgeButton className=" bg-gray-800" text="Internet Computer (Dfinity)" />
        <h1 className="text-lg md:text-2xl font-bold text-white py-4">
          Built on the Blockchain for Unmatched Security & Scalability
        </h1>
        <p className='text-sm md:text-base'>
          Lyfelynk leverages the power of the Internet Computer blockchain, 
          providing decentralized infrastructure that guarantees the utmost 
          security and scalability for your sensitive health data.
        </p>
      </div>
    ),
    (
      <div>
        <ShinyBadgeButton className=" bg-gray-800" text="VETKeys" />
        <h1 className="text-lg md:text-2xl font-bold text-white py-4">
          Privacy by Design with VETKeys
        </h1>      
        <p className='text-sm md:text-base'>
          Lyfelynk employs cutting-edge VETKeys technology to ensure your health 
          data remains anonymous while empowering medical research. VETKeys enable 
          advanced encryption and secure sharing without compromising your privacy.      
        </p>
      </div>
    ),
    (
      <div>
        <ShinyBadgeButton className=" bg-gray-800" text="Ayushman Bharat Digital Mission" />
        <h1 className="text-lg md:text-2xl font-bold text-white py-4">
          Aligning with India's Healthcare Vision
        </h1>      
        <p className='text-sm md:text-base'>
          Lyfelynk proudly integrates with the ABDM framework, empowering you to contribute 
          your health data to support nation-wide healthcare advancement. Your participation 
          plays a vital role in driving research and improving healthcare delivery for all Indians.
        </p>
      </div>
    ),
  ];

  return (
    <section className='py-12 md:py-24 px-6'>
      <div className='container mx-auto lg:px-24'>
        <div className='xl:flex p-10  border border-gray-700 rounded-3xl bg-gradient-to-tl from-blue-500 via-indigo-600 to-purple-700'>
          {/* Tab Indicator */}
          <div className="pt-4 flex flex-col xl:w-1/2">
            <h1 className='font-space-grotesk tracking-tighter font-bold text-3xl md:text-5xl'>Tech Stack</h1>
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
            <div className="px-2 pt-2 pr-8 pb-8 xl:pb-0 lg:h-full">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className={`h-1/2 ${activeTab === index + 1 ? '' : 'hidden'}`}>
                  {tabContent[index]}
                </div>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="xl:w-1/2 flex items-center">
            {/* Image */}
            <div className="shadow-[7px_7px_153px_10px_rgba(45,_72,_210,_0.52)] lg:flex-shrink-0 lg:w-full mt-2 lg:mt-0">
              <img src={tabImages[activeTab - 1]} alt="Technologies Used" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
