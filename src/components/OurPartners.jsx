import { Instagram } from "lucide-react"

const partners = [
  {
    image: "/assets/partners/swati.jpg",
    username: "shine.with.swati",
    name: "Shine with Swati",
    link: "https://www.instagram.com/shine.with.swati/",
    info: "Joyful Learning Expert, LMA Women’s Forum CoChair, certified in Therapeutic Dance, sharing content on confidence and happy learning.",
  },
  {
    image: "/assets/partners/charul.jpg",
    username: "career_gpt_",
    name: "Charul Sharma",
    link: "https://www.instagram.com/career_gpt_",
    info: "Insights on job search, learning, and growth. Brand Ambassador for @udemy & @icphub_in. Partnerships: meet@careergpt.net.",
  },
  {
    image: "/assets/partners/web3gpt.jpg",
    username: "web3gpt",
    name: "Web3 GPT",
    link: "https://www.instagram.com/web3gpt",
    info: "Your guide to the future of Web3, blockchain, and decentralized technologies. Incubated by @icphub_in",
  },
  {
    image: "/assets/partners/web3raza.jpg",
    username: "web3raza",
    name: "Web3 Raza",
    link: "https://www.instagram.com/web3raza",
    info: "Guide to crypto profits at @web3raza. Specializing in breaking down crypto news and education. Incubated by @icphub_in",
  }
]

export default function OurPartners() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-center mb-12">Our Partners</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {partners.map((partner, index) => (
          <div key={index} className="flex flex-col p-4 border border-gray-600 rounded-lg bg-transparent">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12">
                <img 
                  className="rounded-full border-2 border-primary w-full h-full object-cover"
                  src={partner.image}
                  alt={`Profile picture of ${partner.username}`}
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold">{partner.username}</h2>
                <p className="text-sm text-gray-500">{partner.name}</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm">{partner.info}</p>
            </div>
            <div className="mt-auto pt-4 text-center">
              <a
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white py-2 rounded-lg text-sm font-medium"
                style={{
                  background: "linear-gradient(45deg, #fd5949, #d6249f, #285AEB)",
                  color: "#fff"
                }}
              >
                <span className="flex justify-center items-center gap-2"> Follow on <Instagram /> </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
