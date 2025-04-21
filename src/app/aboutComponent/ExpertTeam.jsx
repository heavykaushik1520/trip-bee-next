"use client";

import Image from "next/image";
import React from "react";

const teamMembers = [
  {
    name: "Gabriel Montana",
    title: "Senior Travel Consultant",
    image: "/images/home/gabriel_m.png",
    regions: ["North America", "Southeast Asia"],
  },
  {
    name: "Julie Maria",
    title: "Senior Travel Consultant",
    image: "/images/home/julia_maria.png",
    regions: ["North America", "Southeast Asia"],
  },
  {
    name: "Jasson Roy",
    title: "Tour Guide",
    image: "/images/home/jasson_roy.png",
    regions: ["North America", "Southeast Asia"],
  },
  {
    name: "Elon Musk",
    title: "Wildlife Safari Guide",
    image: "/images/home/elon_musk.png",
    regions: ["South America", "Africa"],
  },
];

const ExpertTeam = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-indigo-900 mb-2">
            Our Expert Travel Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dedicated Travel Professionals Making Your Journey Extraordinary With Their Expertise And Passion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-md">
              <div className="relative aspect-[33688/50600] w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                  onError={(e) => console.log(`Error loading ${member.name} image:`, e)}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent text-white p-4 text-center">
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm">{member.title}</p>
                  <div className="flex justify-center flex-wrap gap-1 mt-1">
                    {member.regions.map((region, i) => (
                      <span
                        key={i}
                        className="inline-block bg-white/20 text-white text-xs rounded-full px-2 py-0.5"
                      >
                        {region}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertTeam;
