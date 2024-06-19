import React from 'react';

const Features1 = () => {
  const features = [
    {
      title: "Control",
      heading: "Be the Driver and take control!",
      text: "LyfeLynk puts you in complete control of your health data – no more scattered records or corporate ownership. Take charge of your health journey.",
    },
    {
      title: "Access",
      heading: "Say goodbye to fragmented medical records.",
      text: "LyfeLynk brings all your health information together for instant, streamlined access by you and your chosen providers.",
    },
    {
      title: "Security",
      heading: "Your health data is your most valuable asset.",
      text: "LyfeLynk employs advanced blockchain encryption for your health data, ensuring steadfast privacy, security, and confidentiality.",
    },
    {
      title: "Insights",
      heading: "Forget confusing medical jargon.",
      text: "Gain clear insights into your health, explained in an understandable way. Unlock knowledge to make informed decisions and improve your wellbeing.",
    },
  ];

  const colors = [
    'from-sky-400 to-blue-500',
    'from-pink-500 to-purple-500',
    'from-purple-500 to-violet-500',
    'from-indigo-500 to-violet-500',
  ];

  return (
    <section className="py-6 md:py-12 px-6">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/3 p-4">
          <h1 className='font-space-grotesk font-bold text-4xl md:text-8xl py-4'>Your Health, Your Data:</h1>
          <p className='font-prompt font-medium text-2xl md:text-4xl'>Control, Access, Security, and Insights</p>
        </div>
        <div className="md:w-2/3">
          <div className='md:px-12 grid grid-cols-1 md:grid-cols-2 gap-6'>
            {features.map((feature, index) => (
              <div key={index} className="relative">
                <div
                  className={`absolute -inset-2 rounded-lg bg-gradient-to-r ${colors[index % colors.length]} opacity-60 blur-2xl`}
                ></div>
                <div
                  className={`relative p-6 bg-gradient-to-r ${colors[index % colors.length]} text-white rounded-lg transform transition-transform hover:scale-105 border border-zinc-700`}
                >
                  <h2 className="font-prompt text-lg font-bold py-2">{feature.heading}</h2>
                  <div className='border-t border-gray-200'/>
                  <p className="mt-4 font-roboto-mono text-base">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features1;
