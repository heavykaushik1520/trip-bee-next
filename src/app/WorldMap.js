// components/HeroSection.js

import React from "react";

const WorldMap = () => {
  return (
    <section
      className="relative py-24 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/home/world_map.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0 bg-opacity-70"
        style={{ backgroundColor: "rgba(75, 43, 93, 0.7)" }} // Transparent purple overlay
      ></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 relative z-10 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">
          Ready To Embark On Your Next
          <br></br>Adventure With Us?
        </h2>
        <p className="text-lg mb-8">
          Contact Us Today To Start Planning Your Dream Trip With TripBee!
        </p>
        <button className="bg-white text-[#4B2B5D] font-semibold py-3 px-6 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#4B2B5D] focus:ring-opacity-50">
          Contact Now <span className="ml-2">&#8594;</span>
        </button>
      </div>
    </section>
  );
};

export default WorldMap;
