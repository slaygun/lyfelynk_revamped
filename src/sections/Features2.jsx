import React from 'react';
import ShinyBadgeButton from '../components/ShinyBadge';
import SharingData from '../components/SharingData';
import { Gem } from 'lucide-react';
import AccessData from '../components/AnalyzingData';
import AnonData from '../components/AnonDara';

const cardData = [
  {
    badge: 'EARN',
    badgeColor: 'bg-pink-400',
    text: 'Monetize Your Health Data',
    description: 'Join Lyfelynk\'s Data Marketplace to ethically sell your health data. Empower research and innovation while earning rewards. Your data, your terms. Contribute to a healthier future.',
    image: '/assets/bento/rewardsiso.png', 
  },
  {
    badge: 'IMPACT',
    badgeColor: 'bg-blue-400',
    text: 'Drive Healthcare Innovation',
    description: 'Share your health data to support groundbreaking research. Help advance medical discoveries and improve healthcare outcomes. Maintain control over your information. Be a part of the change.',
    image: '/assets/bento/impactiso.png', 
  },
  {
    badge: 'SECURE',
    badgeColor: 'bg-purple-400',
    text: 'Unmatched Security and Privacy',
    description: 'Lyfelynk ensures your data is protected with top-tier blockchain security. Your information is encrypted and private. Accessible only to you and authorized parties. Trust in our robust security measures.',
    image: '/assets/bento/protectioniso.png', 
  },
  {
    badge: 'PRIVATE',
    badgeColor: 'bg-teal-400',
    text: 'AI-Powered Data Anonymization',
    description: 'Our AI models automatically remove private information from your documents. Ensure your data can be safely shared and sold. Protect your privacy without compromise. Share data confidently.',
    image: '/assets/bento/privacyiso.png', 
  },
];

const Features2 = () => {
  return (
    <section className='py-12 md:py-24 px-6'>
      <div className='container mx-auto text-center'>
        <ShinyBadgeButton text="Data Empowerment" />
        <h1 className='pt-6 pb-12 font-medium tracking-tighter text-3xl md:text-5xl'>
          Revolutionizing Healthcare: Monetize, Innovate, Protect
        </h1>
        <div className='md:flex justify-center mx-auto max-w-6xl md:space-x-6 gap-y-6'>
          {/* first column */}
          <div className='md:w-1/2 space-y-6 mb-6 md:mb-0'>
            {cardData.slice(0, 2).map((card, index) => (
              <div key={index} className="relative border border-gray-800 rounded-3xl bg-cover bg-center text-left" style={{ backgroundImage: "url('/assets/grid.png')" }}>
                <button className={`${card.badgeColor} py-1 px-2 m-4 rounded-lg text-sm font-mono`}>{card.badge}</button>
                <img src={card.image} alt={card.badge} className='w-72 sm:w-96 mx-auto'/>
                <div className='relative p-12 text-left'>
                {index === 0 && <Gem className='absolute p-3 text-pink-400 bg-gray-800 bg-opacity-50 w-16 h-16 border border-pink-400 rounded-xl -top-8'/>}
                  {index === 1 && <SharingData className="absolute -top-4 right-4" />}
                  <h1 className='font-prompt font-medium text-2xl md:text-3xl xl:text-4xl'>{card.text}</h1>
                  <p className='pt-4 text-sm text-gray-400 font-medium'>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* second column */}
          <div className='md:w-1/2 space-y-6 md:mt-28'>
            {cardData.slice(2, 4).map((card, index) => (
              <div key={index + 2} className="relative border border-gray-800 rounded-3xl bg-cover bg-center text-left" style={{ backgroundImage: "url('/assets/grid.png')" }}>
                <button className={`${card.badgeColor} py-1 px-2 m-4 rounded-lg text-sm font-mono`}>{card.badge}</button>
                <img src={card.image} alt={card.badge} className='w-72 sm:w-96 mx-auto'/>
                <div className='relative p-12 text-left'>
                  {index === 0 && <AccessData className="absolute -top-16 left-14"/>}
                  {index === 1 && <AnonData className="absolute -top-4 inset-x-1/2" />}
                  <h1 className='font-prompt font-medium text-2xl md:text-3xl xl:text-4xl'>{card.text}</h1>
                  <p className='pt-4 text-sm text-gray-400 font-medium'>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features2;
