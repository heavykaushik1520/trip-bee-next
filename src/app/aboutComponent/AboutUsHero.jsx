// src/components/AboutUsHero.js (or wherever you prefer to keep your components)

import React from 'react';
import Image from 'next/image';


const AboutUsHero = () => {
  const backgroundImageStyle = {
    backgroundImage: `url('/images/about/1_image.png')`, // Replace with the actual path to your Paris image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <header className="relative bg-gradient-to-b from-indigo-900 to-purple-700 text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-60"
        style={backgroundImageStyle}
      ></div>

      <div className="container mx-auto px-4 relative z-10 py-24 md:py-32 lg:py-40 text-center">
        {/* Hero Text for About Us */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          About Us
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-light mb-8">
          Your Gateway To Adventure
        </p>

        {/* Social Icons (positioned similarly to the image) */}
        <div className="flex justify-center space-x-4 mt-8">
          <a href="#" className="text-white hover:text-indigo-200">
            <Image
              src="/images/about/fb.png" // Update with your social icon paths
              alt="Facebook"
              width={32}
              height={32}
            />
          </a>
          <a href="#" className="text-white hover:text-indigo-200">
            <Image
              src="/images/about/insta.png" // Update with your social icon paths
              alt="Instagram"
              width={32}
              height={32}
            />
          </a>
          <a href="#" className="text-white hover:text-indigo-200">
            <Image
              src="/images/about/linkedin.png" // Update with your social icon paths
              alt="LinkedIn"
              width={32}
              height={32}
            />
          </a>
        </div>
      </div>

      {/* You might want to include your navigation here if it's part of the hero */}
      {/* Or, if your navigation is separate, ensure it's rendered above or below this component in your page.js */}
    </header>
  );
};

export default AboutUsHero;