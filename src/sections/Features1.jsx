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
        <ShinyBadgeButton text="Lorem Ipsum Sum" />
        <h1 className='pt-6 pb-12 font-bold tracking-tighter text-3xl md:text-5xl'>
          The Lorem Ipsum The Lore
        </h1>
      </div>
    </section>
  );
};

export default Features1;
