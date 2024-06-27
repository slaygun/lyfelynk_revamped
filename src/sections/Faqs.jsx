import React, { useState } from 'react';
import ShinyBadgeButton from '../components/ShinyBadge';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: "How is LyfeLynk different from other health data storage platforms?",
    answer: (
      <p>
        LyfeLynk prioritizes three key areas that set us apart:
        <br />
        <strong>Unmatched Control:</strong> You are the sole owner of your health data, without corporate influence or hidden agendas.
        <br />
        <strong>Ethical Data Marketplace:</strong> If you choose to share your data for research, you receive fair compensation and full transparency.
        <br />
        <strong>Privacy-First AI:</strong> Our advanced analytics safeguard your sensitive information while generating the insights researchers need.
      </p>
    ),
  },
  {
    question: "Is my health data really safe on LyfeLynk?",
    answer: (
      <p>
        Absolutely! We utilize state-of-the-art blockchain encryption to protect your health data. This technology is nearly unbreakable, ensuring both its privacy and safekeeping. Think of it as an incredibly secure digital vault for your most important health information.
      </p>
    ),
  },
  {
    question: "Can I share my LyfeLynk Health ID with any doctor or hospital?",
    answer: (
      <p>
        Yes! LyfeLynk’s goal is universal access. You can easily share your Health ID with chosen healthcare providers, clinics, or hospitals of your choice. This streamlines consultations and eliminates the hassle of repetitive paperwork and searching for scattered medical records.
      </p>
    ),
  },
  {
    question: "How does participating in the data marketplace work?",
    answer: (
      <p>
        You always have full control! When research institutions express interest in data similar to yours, you'll be notified and asked for permission. You choose whether to share your anonymized data, set its availability criteria, and always have the right to withdraw. You’ll see upfront how much you can earn and understand exactly how your data contributes to research projects.
      </p>
    ),
  },
  {
    question: "What kind of insights can I expect from my LyfeLynk Health ID?",
    answer: (
      <p>
        LyfeLynk analyzes your health data and transforms it into clear, actionable insights. Gain an in-depth understanding of trends in your health, receive personalized recommendations based on your history, and get alerts about potential health concerns. LyfeLynk helps you navigate your health journey with clarity.
      </p>
    ),
  },
];

function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-12 md:py-24 px-8">
      <div className="container mx-auto">
        <div className="text-center">
          <ShinyBadgeButton text='FAQs'/>
          <h1 className="py-4 text-3xl font-bold tracking-tighter md:text-5xl/none">Frequently Asked Questions</h1>
        </div>

        <div className="mt-6">
          <div className="mx-auto max-w-4xl divide-y divide-gray-800">
            {faqData.map((item, index) => (
              <div key={index} className="py-4">
                <button 
                  className="flex justify-between w-full text-left text-lg font-medium focus:outline-none" 
                  onClick={() => toggleAccordion(index)}
                >
                  {item.question}
                  <ChevronDown 
                    className={`w-4 h-4 ml-2 text-gray-500 transition-transform duration-200 ${activeIndex === index ? 'transform rotate-180' : ''}`} 
                  />
                </button>
                <div className={`mt-2 ${activeIndex === index ? 'block' : 'hidden'}`}>
                  <div className="py-4 text-gray-500">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faqs;
