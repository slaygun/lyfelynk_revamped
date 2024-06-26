import { ArrowRight } from "lucide-react";

const GetStarted = () => {
  return (
    <a 
        href="https://daqqe-siaaa-aaaag-ak44a-cai.icp0.io"
        target="_blank" 
        rel="noopener noreferrer" 
        className="block bg-blue-500 text-white hover:bg-blue-700 hover:text-gray-800 rounded-full px-3 py-1 sm:px-6 sm:py-2 transition duration-500 ease-in-out group my-2"
    >
        <span className="flex items-center justify-center font-medium font-prompt text-sm sm:text-lg h-full">
            Get Started
            <ArrowRight className="w-4 h-6 ml-2 transform transition-transform duration-500 ease-in-out group-hover:translate-x-2"/>
        </span>
    </a>
  );
};

export default GetStarted;
