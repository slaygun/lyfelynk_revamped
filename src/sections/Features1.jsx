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
              {features.slice(0, 2).map((feature, index) => (
                <div key={index} className="relative">
                  <div
                    className={`absolute -inset-2 rounded-lg ${colors[index % colors.length]} opacity-60 blur-3xl`}
                  ></div>
                  <div
                    className={`relative p-12 ${colors[index % colors.length]} text-black rounded-lg transform transition-transform border border-zinc-700 flex flex-col`}
                  >
                    <h2 className="font-prompt text-3xl font-bold py-2">{feature.heading}</h2>
                    
                    <p className="mt-4 font-space text-base">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <div
                className={`absolute -inset-2 rounded-lg ${colors[2 % colors.length]} opacity-60 blur-3xl`}
              ></div>
              <div
                className={`relative py-6 px-12 ${colors[2 % colors.length]} text-black rounded-lg transform transition-transform border border-zinc-700 flex flex-col`}
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
