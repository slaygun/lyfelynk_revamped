import React from 'react';
import SharingData from '../components/SharingData';
import AnalyzingData from '../components/AnalyzingData';
import SecuredData from '../components/SecuredData';
import ShinyBadgeButton from '../components/ShinyBadge';

const cardData = [
  {
    badge: 'IMPACT',
    badgeColor: 'bg-pink-400',
    title: 'Accelerate scientific advancements!',
    description: 'Share your anonymized health data and accelerate discoveries that have the potential to transform the medical world and make a meaningful impact on countless lives.',
    image: '/assets/bento/impactiso.png',
  },
  {
    badge: 'ACCURACY',
    badgeColor: 'bg-purple-400',
    title: 'Leave no doubt.',
    description: "LyfeLynk's advanced AI meticulously analyzes data, offering researchers a clear picture of health trends. Contribute to accurate health discoveries with your data.",
    image: '/assets/bento/accuracyiso.png',
  },
  {
    badge: 'PROTECTION',
    badgeColor: 'bg-teal-400',
    title: 'Maximum benefits, zero compromise.',
    description: 'Our powerful AI safeguards sensitive information while unlocking profound health insights. Rest easy knowing your privacy is safe as science moves forward.',
    image: '/assets/bento/protectioniso.png',
  },
  {
    badge: 'REWARDS',
    badgeColor: 'bg-red-400',
    title: 'Your data has value!',
    description: 'LyfeLynk ensures you receive fair compensation whenever your contributions fuel valuable research projects. Get rewarded for making positive contributions to healthcare.',
    image: '/assets/bento/rewardsiso.png',
  },
  {
    badge: 'CLEARITY',
    badgeColor: 'bg-sky-400',
    title: 'No secrets here.',
    description: "Track how your data is used, understand its impact, and retain full control over every aspect of the process. LyfeLynk prioritizes transparency so you're always informed and in charge.",
  },
];

const Features2 = () => {
  return (
    <section className='py-12 md:py-24 px-6'>
      <div className='container mx-auto text-center'>
        <ShinyBadgeButton text="Advanced Health Solutions" />
        <h1 className='pt-6 pb-12 font-bold tracking-tighter text-3xl md:text-5xl'>
          Ethical Data Sourcing and DeAI Analytics
        </h1>
        {/* First Row */}
        <div>
          <div className="lg:flex">
            <div className="lg:w-2/5 px-6 py-6 border border-gray-700 rounded-3xl mb-4 lg:mb-0 lg:mr-8">
              <div className='relative text-left bg-cover bg-center' style={{ backgroundImage: "url('/assets/grid.png')" }}>
                <SharingData className="absolute z-[2] bottom-14 -right-8" />
                <button className={`${cardData[0].badgeColor} py-1 px-2 rounded-lg text-sm font-mono`}>{cardData[0].badge}</button>
                <div className='flex justify-center items-center'>
                  <img src={cardData[0].image} alt="impact" className='w-96' />
                </div>
              </div>
              <div className='p-6 text-left'>
                <h1 className='py-6 text-2xl lg:text-4xl font-prompt font-medium'>{cardData[0].title}</h1>
                <p className='text-sm lg:text-base text-gray-500'>{cardData[0].description}</p>
              </div>
            </div>

            <div className="lg:w-3/5 pb-4">
              {cardData.slice(1, 3).map((card, index) => (
                <div key={index} className="lg:flex p-6 gap-6 h-1/2 border border-gray-700 rounded-3xl mb-4">
                  <div className="lg:w-2/5 relative text-left bg-cover bg-center" style={{ backgroundImage: "url('/assets/grid.png')" }}>
                    {index === 0 && 
                      <AnalyzingData className='absolute bottom-6 -right-6' />}
                    {index === 1 && 
                      <SecuredData className='absolute bottom-6 -left-10' />}
                    <button className={`${card.badgeColor} py-1 px-2 rounded-lg text-sm font-mono`}>{card.badge}</button>
                    <div className='flex justify-center items-center'>
                      <img src={card.image} alt="impact" className='w-64' />
                    </div>
                  </div>
                  <div className="lg:w-3/5 text-left p-6">
                    <h1 className='py-6 text-2xl lg:text-4xl font-prompt font-medium'>{card.title}</h1>
                    <p className='text-sm lg:text-base text-gray-500'>{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row */}
          <div className="lg:flex py-0 lg:py-4">
            <div className="lg:w-3/5 lg:flex border border-gray-700 rounded-3xl mb-4 lg:mb-0 lg:mr-8">
              <div className="lg:flex gap-6 p-6 h-1/2">
                <div className="lg:w-2/5 relative text-left" style={{ backgroundImage: "url('/assets/grid.png')" }}>
                  <button className={`${cardData[3].badgeColor} py-1 px-2 rounded-lg text-sm font-mono`}>{cardData[3].badge}</button>
                  <div className='flex justify-center items-center'>
                    <img src={cardData[3].image} alt="impact" className='w-64' />
                  </div>
                </div>
                <div className="lg:w-3/5 text-left p-6">
                  <h1 className='py-6 text-2xl lg:text-4xl font-prompt font-medium'>{cardData[3].title}</h1>
                  <p className='text-sm lg:text-base text-gray-500'>{cardData[3].description}</p>
                </div>
              </div>
            </div>

            <div className="relative lg:w-2/5 border border-gray-700 rounded-3xl mb-4 lg:mb-0">
              <div className='p-6 text-left bg-cover bg-center' style={{ backgroundImage: "url('/assets/grid.png')" }}>
                <img 
                  src='/assets/glassheart.png' 
                  alt='heart in glass' 
                  className='animate-levitate absolute w-32 md:w-48 lg:w-60 -bottom-14 sm:-bottom-16 md:-bottom-24 -right-4 sm:-right-8 md:-right-12 lg:-bottom-24 lg:-right-24'
                />
                {cardData[4].badge && (
                  <button className={`${cardData[4].badgeColor} absolute py-1 px-2 rounded-lg text-sm font-mono`}>{cardData[4].badge}</button>
                )}
                <div className="text-left p-6">
                  <h1 className='py-6 text-2xl lg:text-4xl font-prompt font-medium'>{cardData[4].title}</h1>
                  <p className='text-sm lg:text-base text-gray-500'>{cardData[4].description}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Features2;
