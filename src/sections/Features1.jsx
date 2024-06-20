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
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 p-4">
          <h1 className='font-space-grotesk font-bold text-4xl md:text-8xl '>Your Health, Your Data:</h1>
          <p className='font-prompt font-medium text-2xl md:text-4xl py-2'>Empower Your Health Journey with LyfeLynk</p>
        </div>
        <div className="md:w-2/3">
          <div className='md:px-12 grid grid-cols-1 gap-6'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <div
                  className={`absolute -inset-2 rounded-lg ${colors[0]} opacity-60 blur-3xl`}
                ></div>
                <div
                  className={`relative p-12 ${colors[0]} text-black hover:scale-105  rounded-lg transform transition-transform flex flex-col duration-500 ease-in-out`}
                >
                  <h2 className="font-prompt text-3xl font-bold py-2">{features[0].heading}</h2>
                  
                  <p className="mt-4 font-space text-base">{features[0].text}</p>

                  <img src='assets/heartiso.png' alt="heart icon" className='w-32 h-32 absolute -left-8 -top-10 md:-left-14 md:-top-14' />
                </div>
              </div>
              <div className="relative">
                <div
                  className={`absolute -inset-2 rounded-lg ${colors[1]} opacity-60 blur-3xl`}
                ></div>
                <div
                  className={`relative p-12 ${colors[1]} text-black hover:scale-105  rounded-lg transform transition-transform flex flex-col duration-500 ease-in-out`}
                >
                  <h2 className="font-prompt text-3xl font-bold py-2">{features[1].heading}</h2>
                  
                  <p className="mt-4 font-space text-base">{features[1].text}</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                className={`absolute -inset-2 rounded-lg ${colors[2]} opacity-60 blur-3xl`}
              ></div>
              <div
                className={`relative py-6 px-12 ${colors[2]} text-black hover:scale-105  rounded-lg transform transition-transform flex flex-col duration-500 ease-in-out`}
              >
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
