import { Circle, Lightbulb, DollarSign, Package, Hospital, Diamond, Apple } from "lucide-react";

const Timeline = () => {
  const timelineData = [
    {
      quarter: "First Quarter",
      events: [
        { time: "January 2024", title: "Idea conceptualised", icon: <Lightbulb /> },
        { time: "February", title: "First grant approved", icon: <DollarSign /> },
        { time: "March", title: "MVP made", icon: <Package /> },
      ],
    },
    {
      quarter: "Second Quarter",
      events: [
        { time: "April", title: "MVP launched with Vetkeys", icon: <Package /> },
        { time: "May", title: "Hospitals onboarding started", icon: <Hospital /> },
        { time: "June", title: "Early supporter NFTs launched, Gamification idea drafted and initiated", icon: <Diamond /> },
      ],
    },
    {
      quarter: "Third Quarter",
      events: [
        { time: "July", title: "Second grant approved, KOLs onboarded", icon: <DollarSign /> },
        { time: "August", title: "Nutrition tracker launched, Angel round completed", icon: <Apple /> },
      ],
    },
  ];

  return (
    <div className="py-12 md:py-24 px-6 max-w-2xl mx-auto min-h-screen">
      {/* Main Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter md:text-5xl text-gray-900 dark:text-white">
          Project Timeline 
        </h1>
        <p className="pt-2 pb-8 mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Tracking key achievements over time.
        </p>
      </div>

      {timelineData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            {section.quarter}
          </h2>

          {/* Timeline Section */}
          <ol className="relative border-l-4 border-gray-300 dark:border-gray-600 ml-4">
            {section.events.map((event, index) => (
              <li key={index} className="mb-12 ml-6 group">
                <div className="absolute w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded-full -left-4 border border-gray-400 dark:border-gray-600 flex items-center justify-center group-hover:bg-blue-500 transition-all duration-300">
                  <Circle size={16} className="text-gray-500 dark:text-gray-300 group-hover:text-white" />
                </div>
                <time className="mb-1 text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                  {event.time}
                </time>
                <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow group-hover:bg-blue-50 dark:group-hover:bg-gray-700 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600">
                    {event.title}
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400 group-hover:text-blue-600 transition-colors duration-300">
                    {event.icon}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
