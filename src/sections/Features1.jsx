import React from 'react';

const Features1 = () => {
  const features = [
    {
      heading: "Control Your Health",
      text: "LyfeLynk puts you in complete control of your health records. No more scattered information or corporate ownership. Manage your health journey with ease.",
    },
    {
      heading: "Unified Records",
      text: "Say goodbye to fragmented medical records. LyfeLynk consolidates all your health data for instant, streamlined access by you and your chosen providers.",
    },
    {
      heading: "Secure Insights",
      text: "Your health data is protected with advanced blockchain encryption, ensuring privacy and security. Clear explanations provide you with the knowledge to make informed decisions about your wellbeing.",
    },
  ];

  const colors = [
    'bg-[#EB54BC]',
    'bg-[#997CFC]',
    'bg-[#65BBCA]',
  ];

  return (
    <section id="features" className="pt-6 pb-12 md:pt-12 md:pb-24 px-6">
      <div className="relative container mx-auto flex flex-col lg:flex-row items-center">
        <div className='absolute -z-[2] -left-2  w-[25%] h-[100%] rounded-full bluish__gradient'/>
        <div className="lg:w-2/5 p-4">
          <h1 className='font-space-grotesk font-bold text-4xl md:text-8xl '>Your Health, Your Data:</h1>
          <p className='font-prompt font-medium text-2xl md:text-4xl py-2'>Empower Your Health Journey with LyfeLynk</p>
        </div>
        <div className="lg:w-3/5">
          <div className='md:px-12 grid grid-cols-1 gap-6'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {features.slice(0, 2).map((feature, index) => (
                <div className="relative" key={index}>
                  <div className={`absolute -inset-2 rounded-lg ${colors[index]} opacity-60 blur-3xl`}></div>
                  <div className={`relative w-full h-full p-12 ${colors[index]} text-black hover:scale-105 rounded-lg transform transition-transform flex flex-col duration-500 ease-in-out`}>
                    <h2 className="font-prompt text-3xl font-bold py-2">{feature.heading}</h2>
                    <p className="mt-4 font-space text-base">{feature.text}</p>
                    {index === 0 && <img src='assets/heartiso.png' alt="heart icon" className='w-32 h-32 absolute -left-8 -top-10 md:-left-14 md:-top-14' />}
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className={`absolute -inset-2 rounded-lg ${colors[2]} opacity-60 blur-3xl`}></div>
              <div className={`relative w-full h-full p-12 ${colors[2]} text-black hover:scale-105 rounded-lg transform transition-transform flex flex-col duration-500 ease-in-out`}>
                <h2 className="font-prompt text-3xl font-bold py-2">{features[2].heading}</h2>
                <p className="mt-4 font-space text-base">{features[2].text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features1;
