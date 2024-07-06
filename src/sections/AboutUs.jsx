import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const teamData = [
  {
    name: "Sivia Goyal",
    designation: "CEO",
    avatar: "assets/team/ceo.jpeg",
    content: "Civil engineer, MBA, and Edtech entrepreneur (1K to 100K+ users). Combines tech and healthcare experience (Infosys, Dr. Reddy Labs) with a passion for blockchain-driven innovation.",
    link: "https://www.linkedin.com/in/sivia-goyal-5447a919/"
  },
  {
    name: "Aaditya Chandankar",
    designation: "CTO",
    avatar: "assets/team/cto.jpeg",
    content: "Mechanical engineer, Web3 specialist, proven blockchain developer (Ethereum, Avalanche, Polygon, ICP). Health tech research experience. Passionate about decentralized healthcare solutions.",
    link: "https://www.linkedin.com/in/sirilux/"
  },
  {
    name: "Mann Acharya",
    designation: "Technical Project Manager",
    avatar: "assets/team/pm.jpeg",
    content: "A Google Certified AI Engineer, with a focus on creating scalable infrastructure, good development practices and talent management. Drives innovation and efficiency in product development processes.",
    link: "https://www.linkedin.com/in/mann-acharya/"
  },
  {
    name: "Nabh Raghav",
    designation: "Frontend Developer",
    avatar: "assets/team/designer.jpeg",
    content: "Frontend Expert, UI/UX Specialist excelling in crafting visually captivating designs, dedicated to elevating user experiences through innovation, precision and creativity.",
    link: "https://www.linkedin.com/in/nabh-raghav-69420/"
  },
  {
    name: "Harshvardhan Singh",
    designation: "AI & ML Engineer",
    avatar: "assets/team/aiml.jpeg",
    content: "AI & ML Head. Data Science Specialist excelling in leveraging advanced technologies. Drives innovation, analytics, and insightful solutions for enhanced data-driven decision-making.",
    link: "https://www.linkedin.com/in/harshvardhan-singh-a94231241/"
  }
  // Add more team members here
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const CustomLeftArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-1 z-40 flex items-center justify-center w-10 h-10 -mt-5 transition duration-300 ease-in-out bg-gray-800 rounded-full shadow-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
    style={{ top: "50%", transform: "translateY(-50%)" }}
  >
    <ChevronLeft/>
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-1 z-40 flex items-center justify-center w-10 h-10 -mt-5 transition duration-300 ease-in-out bg-gray-800 rounded-full shadow-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
    style={{ top: "50%", transform: "translateY(-50%)" }}
  >
    <ChevronRight/>
  </button>
);

const AboutUs = () => {
  const handleClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <section id="about" className="py-12 md:py-24 px-6">
      <div className="relative container mx-auto text-center lg:max-w-screen-lg">
        <div className='absolute bottom-32 -z-[2] w-full h-1/2 rounded-full bluish__gradient' />
        <h1 className="text-3xl font-bold tracking-tighter md:text-5xl">About Us</h1>
        <p className="pt-2 pb-8 mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          The talent that drives LyfeLynk.
        </p>

        <Carousel 
          responsive={responsive} 
          infinite={true} 
          showDots={false} 
          autoPlay={false} 
          swipeable={true} 
          showIndicators={false}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-60-px"
          arrows={true}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {teamData.map((member, index) => (
            <div 
              key={index} 
              className='p-8 w-72 h-96 border border-gray-800 rounded-3xl mx-auto hover:shadow-xl'
            >
              <img src={member.avatar} alt={member.name} className='w-24 h-24 rounded-full border-2 mx-auto object-cover' />
              <div className='pt-4  flex justify-center space-x-2 items-center'>
                <h1 className='font-prompt font-semibold text-lg'>{member.name}</h1>
                <ExternalLink onClick={() => handleClick(member.link)} className='w-6 h-6 p-1 bg-blue-500 hover:bg-blue-700 rounded-md cursor-pointer transition duration-500 ease-in-out' />
              </div>
              <p className='pt-2 font-semibold text-sm text-gray-600'>{member.designation}</p>
              <p className='pt-4 text-sm text-gray-600'>{member.content}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default AboutUs;
