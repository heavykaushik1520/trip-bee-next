"use client";

import { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, toggleAccordion }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
      <div
        className="px-6 py-4 flex justify-between items-center cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
        <button className="text-purple-500 focus:outline-none">
          <svg
            className={`w-5 h-5 fill-current transition-transform duration-300 ${isOpen ? '-rotate-180' : ''}`}
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="px-6 py-4 text-gray-600 text-sm border-t border-gray-200">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // Initialize with the first item open

  const faqData = [
    {
      question: 'Can I customize my travel package?',
      answer: 'Yes, You Can! We Offer Flexible Options To Tailor Your Trip To Your Preferences.',
    },
    {
      question: 'Do you offer group discounts or family packages?',
      answer: 'Yes, we do! Please contact our sales team with details about your group or family for specific discounts.',
    },
    {
      question: 'Can I pay in installments for my trip?',
      answer: 'In some cases, we offer installment payment plans. Please check the payment options during the booking process or contact us for more information.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'Our cancellation policy varies depending on the type of trip and the time of cancellation. Please refer to our terms and conditions or contact us for details regarding your specific booking.',
    },
    {
      question: 'Can I reschedule my trip after booking?',
      answer: 'Rescheduling may be possible depending on availability and the terms of your booking. Additional fees may apply. Please contact us as soon as possible if you need to reschedule.',
    },
    {
      question: 'Do you provide travel insurance?',
      answer: 'Yes, we offer optional travel insurance packages to provide you with peace of mind during your travels. You can add insurance during the booking process.',
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mb-8 md:mb-0">
      {faqData.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          toggleAccordion={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

const ContactForm = () => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-xl font-semibold text-purple-700 mb-4 text-center">Do u have More Question?</h3>
    <form>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name*</label>
        <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email*</label>
        <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone Number*</label>
        <input type="tel" id="phone" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">How can we help you</label>
        <textarea id="message" rows="4" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
      </div>
      <div className="text-center">
        <button type="button" className="inline-flex items-center bg-white text-purple-700 font-semibold py-2 px-4 rounded-full hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 border border-purple-300">
          request a call back
          <svg className="w-4 h-4 ml-2 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
        </button>
      </div>
    </form>
  </div>
);

const QuestionsSection = () => {
  return (
    <section className="py-16 bg-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-purple-700 mb-2">Got questions?</h2>
          <p className="text-gray-600">We've Got Answers To Your Travel Enquiries And Ensure A Smooth Experience</p>
        </div>

        <div className="md:grid md:grid-cols-2 md:gap-8 lg:gap-12 items-start">
          {/* FAQ Section */}
          <FAQSection />

          {/* More Questions Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default QuestionsSection;