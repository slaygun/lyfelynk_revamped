import { Link } from "react-scroll";

const GetInTouch = () => {
  return (
    <Link
        to="contact" 
        smooth={true} 
        duration={500}  
        className="block text-center border border-white hover:text-blue-500 hover:border-blue-500 rounded-full px-3 py-1 sm:px-6 sm:py-2 transition duration-500 ease-in-out group my-2 cursor-pointer"
    >
    <span className="font-medium font-prompt text-sm sm:text-lg h-full">
      Get In Touch
    </span>
    </Link>
  );
};

export default GetInTouch;
