import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const franceImage = '/images/destinations/paris.png';
const japanImage = '/images/destinations/koyato.png';
const australiaImage = '/images/destinations/sydney.png';
const usaImage = '/images/destinations/newyork.png';
const spainImage = '/images/destinations/barcelona.png';
const indonesiaImage = '/images/destinations/bali.png';

const TopDestinations = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">Top Destinations</h2>
          <p className="text-gray-600 text-lg">
            Discover The Most Exciting Cities Across The Globe, Handpicked To Offer You
            The Ultimate Travel Experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Destination Card Component */}
          {[
            { name: 'France', image: franceImage },
            { name: 'Japan', image: japanImage },
            { name: 'Australia', image: australiaImage },
            { name: 'USA', image: usaImage },
            { name: 'Spain', image: spainImage },
            { name: 'Indonesia', image: indonesiaImage },
            { name: 'France', image: franceImage },
            { name: 'Japan', image: japanImage },
            { name: 'Australia', image: australiaImage },
          ].map((dest, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden shadow-md w-full max-w-[370px] mx-auto relative">
              <div className="relative w-full h-60">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0  bg-opacity-40 p-4 text-white flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{dest.name}</h3>
                  <span className="text-sm flex items-center gap-1">
                    10 Cities <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button className="bg-transparent border border-gray-600 text-gray-700 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors duration-200">
            View All <ArrowRight className="inline-block w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopDestinations;
