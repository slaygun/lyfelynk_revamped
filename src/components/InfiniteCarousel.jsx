import React, { useState } from 'react';
import ShinyBadgeButton from './ShinyBadge';

const images = [
  { image: '/assets/carousel/ani.png', link: 'https://www.aninews.in/news/business/crewsphere-indias-incubated-startup-lyfelynks-gamified-health-data-management-system-is-here-to-solve-healthcares-achilles-heel20240710184540/', alt: 'ANI News' },
  { image: '/assets/carousel/theprint.png', link: 'https://theprint.in/ani-press-releases/crewsphere-indias-incubated-startup-lyfelynks-gamified-health-data-management-system-is-here-to-solve-healthcares-achilles-heel/2168873/', alt: 'The Print' },
  { image: '/assets/carousel/lokmattimes.png', link: 'https://www.lokmattimes.com/business/crewsphere-indias-incubated-startup-lyfelynks-gamified-health-data-management-system-is-here-to-solve-healthcares-achilles-heel/', alt: 'Lokmat Times' },
  { image: '/assets/carousel/bnn.png', link: 'https://www.bignewsnetwork.com/news/274449509/crewsphere-india-incubated-startup-lyfelynk-gamified-health-data-management-system-is-here-to-solve-healthcare-achilles-heel', alt: 'Big News Network' },
  { image: '/assets/carousel/dailyhunt.png', link: 'https://m.dailyhunt.in/news/india/english/ani+english-epaper-anieng/crewsphere+indias+incubated+startup+lyfelynks+gamified+health+data+management+system+is+here+to+solve+healthcares+achilles+heel-newsid-n621490262?sm=Y', alt: 'Daily Hunt' },
  { image: '/assets/carousel/bbd.png', link: 'https://www.bitcoinbuyerdatabase.com/crewsphere-indias-incubated-startup-lyfelynks-gamified-health-data-management-system-is-here-to-solve-healthcares-achilles-heel/', alt: 'Bitcoin Buyer Database' },
  { image: '/assets/carousel/ti.png', link: 'https://www.theinfluencer.blog/crewsphere-indias-incubated-startup-lyfelynks-gamified-health-data-management-system-is-here-to-solve-healthcares-achilles-heel/', alt: 'The Influencer' },
  { image: '/assets/carousel/pf.png', link: 'https://www.pressforeign.com/crewsphere-indias-incubated-startup-lyfelynks-gamified', alt: 'Press Foreign' },
];

function InfiniteCarousel() {
  const [paused, setPaused] = useState(false);

  return (
    <div className='pb-12'>
      {/* <h1 className='py-12 font-bold tracking-tighter text-3xl md:text-5xl text-center'>
          <span className="bg-gradient-to-bl from-pink-500 via-indigo-500 to-sky-500 text-transparent bg-clip-text">
            As Seen On{' '}
          </span>
        </h1> */}
      <div 
        className={`w-full overflow-hidden inline-flex flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] ${paused ? 'paused' : ''}`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {[...Array(2)].map((_, index) => (
          <ul key={index} className="flex items-center justify-start [&_li]:mx-6 sm:[&_li]:mx-12 md:[&_li]:mx-16 [&_img]:max-w-none infinite-scroll" aria-hidden={index === 1}>
            {images.map((image, idx) => (
              <li key={idx}>
                <a href={image.link} target="_blank" rel="noopener noreferrer">
                  <img 
                    src={image.image} 
                    alt={image.alt} 
                    className="h-8 sm:h-12 md:h-16  hover:grayscale"
                  />
                </a>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default InfiniteCarousel;