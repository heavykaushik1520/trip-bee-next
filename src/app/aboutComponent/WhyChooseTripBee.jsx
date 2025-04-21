"use client";

import Image from "next/image";
import React from "react";

const features = [
  {
    title: "Personalized Itineraries",
    description: "Tailored Travel Plans To Suit Your Unique Interests And Needs.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m-2-2v2m-2-2V3m-2 2h14M5 7h14m-9-2v2m-2-2V3"
        />
      </svg>
    ),
  },
  {
    title: "Expert Guides",
    description: "Knowledgeable Guides To Enrich Your Travel Experience.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    title: "24/7 Support",
    description: "Reliable Assistance Anytime, Anywhere For A Stress-Free Journey.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Best Value",
    description: "Competitive Pricing Without Compromising On Quality.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

const WhyChooseTripBee = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <Image
            src="/images/home/5_image.png"
            alt="Why Choose TripBee"
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Features Section */}
        <div>
          <h2 className="text-3xl font-bold text-indigo-900 mb-8 text-center md:text-left">
            Why choose <span className="text-purple-600">TripBee</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-500 flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTripBee;
