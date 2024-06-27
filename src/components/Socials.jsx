import { Instagram, Linkedin } from "lucide-react";

const Socials = () => {
  return (
    <div>
        <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
        <div className="flex space-x-4">
        <a
            href="https://twitter.com/lyfelynk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 w-8 h-8 p-2 rounded-lg cursor-pointer flex items-center justify-center"
        >
            <svg role="img" fill='white' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
            
        </a>
        <a
            className="text-white bg-blue-500 hover:bg-blue-600 w-8 h-8 p-2 rounded-lg flex items-center justify-center"
            href="https://www.instagram.com/lyfelynk/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Instagram className="h-4 w-4" />
        </a>
        <a
            className="text-white bg-blue-500 hover:bg-blue-600 w-8 h-8 p-2 rounded-lg flex items-center justify-center"
            href="https://www.linkedin.com/company/lyfelynk"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Linkedin className="h-4 w-4" />
        </a>
        </div>
    </div>
  );
};

export default Socials;
