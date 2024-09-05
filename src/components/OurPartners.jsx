import { UserPlus } from "lucide-react";

const OurPartners = () => {
  const data = [
    {
      image: "/assets/partners/swati.jpg",
      username: "shine.with.swati",
      posts: 473,
      followers: "165K",
      following: 385,
      name: "Shine with Swati",
      link: "https://www.instagram.com/shine.with.swati/",
    },
    {
      image: "/assets/partners/charul.jpg",
      username: "career_gpt_",
      posts: 303,
      followers: "248K",
      following: 5,
      name: "Charul Sharma",
      link: "https://www.instagram.com/career_gpt_",
    },
    {
      image: "/assets/partners/web3gpt.jpg",
      username: "web3gpt",
      posts: 214,
      followers: "46.5K",
      following: 7,
      name: "Web3 GPT",
      link: "https://www.instagram.com/web3gpt",
    },
    {
      image: "/assets/partners/web3raza.jpg",
      username: "web3raza",
      posts: 136,
      followers: "86.1K",
      following: 10,
      name: "Web3 Raza",
      link: "https://www.instagram.com/web3raza",
    }
  ];

  return (
    <div className="max-w-xs sm:max-w-2xl xl:max-w-7xl mx-auto p-6 md:p-12">
      <h1 className="pb-12 font-bold tracking-tighter text-3xl md:text-5xl text-center">Our Partners</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <a 
            key={index} 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 bg-gray-800 rounded-lg shadow-lg block"
          >
            <div className="flex justify-center">
              <div className="relative w-32 h-32">
                <img
                  src={item.image}
                  alt={`Profile picture of ${item.username}`}
                  className="w-full h-full rounded-full object-cover border-4 border-gradient-to-r from-yellow-400 via-pink-500 to-purple-600"
                />
              </div>
            </div>
            <div className="mt-4 text-center">
              <h1 className="text-xl font-bold">{item.username}</h1>
              <div className="flex items-center justify-center mt-2 space-x-2">
                <button className="bg-blue-500 text-white font-bold px-4 py-1 rounded-lg">
                  Follow
                </button>
                <button className="bg-gray-700 text-white font-bold px-4 py-1 rounded-lg">
                  Message
                </button>
                <button className="bg-gray-700 text-white font-bold px-2 py-1 rounded-lg">
                  <UserPlus className="p-1" />
                </button>
              </div>
              <div className="flex justify-center mt-4 space-x-8">
                <div className="text-center">
                  <span className="font-bold">{item.posts}</span>
                  <p className="text-sm text-gray-400">posts</p>
                </div>
                <div className="text-center">
                  <span className="font-bold">{item.followers}</span>
                  <p className="text-sm text-gray-400">followers</p>
                </div>
                <div className="text-center">
                  <span className="font-bold">{item.following}</span>
                  <p className="text-sm text-gray-400">following</p>
                </div>
              </div>
              <h2 className="mt-4 font-bold">{item.name}</h2>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default OurPartners;
