import React from 'react';
import ShinyBadgeButton from '../components/ShinyBadge';

const Features1 = () => {
  const features = [
    {
      heading: "Personalized Health Insights",
      text: "Unlock actionable insights tailored to your unique health profile. Lyfelynk's advanced machine learning models provide data-driven recommendations to help you achieve your health goals and make informed decisions.",
    },
    {
      heading: "Secure Data Storage",
      text: "Store and manage your health information with confidence. Lyfelynk's blockchain-based data locker ensures your data is encrypted, private, and only accessible to you and those you choose to share it with.",
    },
    {
      heading: "Engaging Gamification Model",
      text: "Enhance your health journey with Wellness Avatar NFTs. Earn tokens and rewards by participating in wellness activities and telehealth consultations. Lyfelynk makes staying healthy fun and engaging.",
    },
  ];

  const colors = [
    'bg-[#EB54BC]',
    'bg-[#997CFC]',
    'bg-[#65BBCA]',
  ];

  return (
    <section id="features" className="pt-6 pb-12 md:pt-12 md:pb-24 px-6">
      <div className="container mx-auto text-center">
        {/* <ShinyBadgeButton text="Lorem Ipsum Sum" /> */}
        <h1 className='pt-6 pb-12 font-bold tracking-tighter text-3xl md:text-5xl'>
          Personalized Health Solutions
        </h1>
        <div className='lg:flex justify-center lg:space-x-8 max-w-7xl mx-auto '>
          <div className='lg:w-3/5 space-y-6 flex flex-col'>
            {/* first */}
            <div className={`flex flex-col sm:flex-row border-8 border-gray-900 hover:shadow-xl rounded-3xl p-12 gap-y-6 sm:gap-x-10 items-center flex-1 ${colors[0]} hover:scale-105 transition duration-300 ease-in-out`}>
              <img
                  src="/assets/f1/insight.png"
                  alt="health insights"
                  className="w-60"
                />
              <div className='text-left'>
                <h1 className='font-prompt text-black font-medium text-2xl md:text-3xl xl:text-4xl'>{features[0].heading}</h1>
                <p className='pt-4 text-sm text-zinc-800 font-medium'>{features[0].text}</p>
              </div>
            </div>
            {/* second */}
            <div className={`flex flex-col-reverse sm:flex-row border-8 border-gray-900 hover:shadow-xl rounded-3xl p-12 gap-y-6 sm:gap-x-10 items-center flex-1 ${colors[1]} hover:scale-105 transition duration-300 ease-in-out`}>
              <div className='text-left'>
                <h1 className='font-prompt text-black font-medium text-2xl md:text-3xl xl:text-4xl'>{features[1].heading}</h1>
                <p className='pt-4 text-sm text-zinc-800 font-medium'>{features[1].text}</p>
              </div>
              <img
                src="/assets/f1/lock.png"
                alt="security"
                className="w-60"
              />
            </div>
          </div>
          {/* third */}
          <div className={`flex flex-col sm:flex-row lg:flex-col lg:w-2/5 mt-6 lg:mt-0 p-12 gap-y-6 gap-x-12 border-8 border-gray-900 hover:shadow-xl rounded-3xl justify-center items-center ${colors[2]} hover:scale-105 transition duration-300 ease-in-out`}>
            <img
              src="/assets/f1/gamify.png"
              alt="gamification"
              className="w-60 lg:w-96 pb-0 lg:pb-12"
            />
            <div className='text-left flex-grow'>
              <h1 className='font-prompt text-black font-medium text-2xl md:text-3xl xl:text-4xl'>{features[2].heading}</h1>
              <p className='pt-4 text-sm text-gray-900 font-medium'>{features[2].text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features1;
