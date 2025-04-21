"use client";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaPlayCircle } from "react-icons/fa";

// Import your social media icons
import facebookIcon from "/public/images/about/fb.png"; // Adjust paths as needed
import instagramIcon from "/public/images/about/insta.png";
import linkedinIcon from "/public/images/about/linkedin.png";
import VisionMission from "../aboutComponent/VisionMission";
import WhyChooseTripBee from "../aboutComponent/WhyChooseTripBee";
import ExpertTeam from "../aboutComponent/ExpertTeam";
import Footer from "../Footer";

export default function AboutPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative">
      <Head>
        <title>About Us - TripBee</title>
        <meta name="description" content="Learn more about TripBee." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Transparent Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-20 py-4 md:py-4 bg-transparent text-white">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold">TripBee</div>
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="hover:text-indigo-200 hover:underline underline-offset-2"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-indigo-200 hover:underline underline-offset-2"
            >
              About Us
            </Link>
            <Link
              href="/destination"
              className="hover:text-indigo-200 hover:underline underline-offset-2"
            >
              Destinations
            </Link>
            <Link
              href="/blog"
              className="hover:text-indigo-200 hover:underline underline-offset-2"
            >
              Blog
            </Link>
            <div className="ml-auto md:ml-6 flex items-center space-x-4">
              <Link
                href="/contact"
                className=" hover:bg-gray-200 text-white font-semibold py-2 px-6 rounded-full border-1"
              >
                Contact Us
              </Link>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <button onClick={toggleMobileMenu} className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0  bg-opacity-90 text-center py-4 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <Link href="/" className="block py-2 hover:text-indigo-200">
            Home
          </Link>
          <Link href="/about" className="block py-2 hover:text-indigo-200">
            About Us
          </Link>
          <Link
            href="/destination"
            className="hover:text-indigo-200 hover:underline underline-offset-2"
          >
            Destinations
          </Link>
          <Link href="/blog" className="block py-2 hover:text-indigo-200">
            Blog
          </Link>
          <Link
            href="/contact"
            className=" hover:bg-gray-400 text-white font-semibold py-2 px-6 rounded-full border-1"
          >
            Contact Us
          </Link>
         
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-b from-indigo-900 to-purple-700 text-white overflow-hidden min-h-screen flex items-center justify-center">
        {" "}
        {/* Flex container for centering */}
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/images/about/1_image.png')`, // Replace with your image path
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          {" "}
          {/* Content container */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              About Us
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-light">
              Your Gateway To Adventure
            </p>
          </div>
          {/* Social Icons */}
          <div className="flex justify-center space-x-4">
            <Link href="#" className="text-white hover:text-indigo-200">
              <Image src={facebookIcon} alt="Facebook" width={32} height={32} />
            </Link>
            <Link href="#" className="text-white hover:text-indigo-200">
              <Image
                src={instagramIcon}
                alt="Instagram"
                width={32}
                height={32}
              />
            </Link>
            <Link href="#" className="text-white hover:text-indigo-200">
              <Image src={linkedinIcon} alt="LinkedIn" width={32} height={32} />
            </Link>
          </div>
        </div>
      </header>

      {/* Rest of your About Us page content */}
      <main className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          {" "}
          {/* Center the initial text */}
          <h2 className="text-3xl font-bold text-indigo-700 inline-block mr-4">
            TripBee:
          </h2>
          <p className="text-3xl text-gray-900 inline-block">
            Your Gateway To Adventure
          </p>
          <p className="text-gray-600 mb-12">
            We Craft Unforgettable Travel Experiences Tailored Just For You.
            From Curated Tour Packages And Seamless Bookings To Personalized
            Itineraries And On-Trip Support, We Take Care Of Everything—So You
            Can Focus On Making Memories.
          </p>
          <div className="relative">
            {/* Horizontal Line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-300 z-0"></div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-x-8">
              {/* Timeline Item 1 (2021) */}
              <div className="text-left">
                <div className="mb-4">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block mr-2"></span>
                  <span className="font-semibold text-indigo-700">2021</span>
                </div>
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                  Foundation And Vision
                </h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>

              {/* Timeline Item 2 (2022) */}
              <div className="text-left">
                <div className="mb-4">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block mr-2"></span>
                  <span className="font-semibold text-indigo-700">2022</span>
                </div>
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                  Commitment To Quality
                </h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>

              {/* Timeline Item 3 (2023) */}
              <div className="text-left">
                <div className="mb-4">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block mr-2"></span>
                  <span className="font-semibold text-indigo-700">2023</span>
                </div>
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                  Focus On Sustainability
                </h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem ipsum has been the 
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>

              {/* Timeline Item 4 (2024) */}
              <div className="text-left">
                <div className="mb-4">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block mr-2"></span>
                  <span className="font-semibold text-indigo-700">2024</span>
                </div>
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                  Global Launch Of Product
                </h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem ipsum has been the 
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <main className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          {/* "Watch Our Video" Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
              Watch Our Video
            </h2>
            <p className="text-gray-600">
              Get Inspired By Our Travel Adventures And See Why TripBee Is Your
              Perfect Travel Partner
            </p>
          </div>

          {/* Video Thumbnail with Play Button */}
          <div className="relative rounded-md overflow-hidden shadow-md mx-auto md:mx-16 lg:mx-32">
            {/* Added margins for left/right spacing */}
            <Image
              src="/images/about/2_image.png" // Replace with your video thumbnail image
              alt="Watch Our Video"
              width={1280} // Added width
              height={720} // Added height
              className="w-full h-auto object-cover" // Make image responsive and cover the container
              style={{ aspectRatio: "16/9" }} // Maintain aspect ratio
            />
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer text-white"
              style={{ zIndex: 10, fontSize: "4em" }} // Adjust size with fontSize
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10" // Adjust size here
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.427 1.529-2.33 2.77-1.68l7.58 4.686a1.5 1.5 0 010 2.634l-7.58 4.687c-1.241.65-2.77-.255-2.77-1.68V5.653z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {/* Timeline Section */}
          {/* Removed the outer div with container and text-center to avoid potential conflicts with the video spacing */}
        </div>
      </main>
      <VisionMission />

      <div className="bg-[#4B2B5D] py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Satisfied Travelers */}
            <div>
              <h2 className="text-4xl font-bold text-white">10,000+</h2>
              <p className="text-lg text-gray-200">Satisfied Travelers</p>
            </div>

            {/* Destinations Covered */}
            <div>
              <h2 className="text-4xl font-bold text-white">500+</h2>
              <p className="text-lg text-gray-200">Destinations Covered</p>
            </div>

            {/* Expert Guides */}
            <div>
              <h2 className="text-4xl font-bold text-white">150+</h2>
              <p className="text-lg text-gray-200">Expert Guides</p>
            </div>
          </div>
        </div>
      </div>

      <WhyChooseTripBee />
      <ExpertTeam />
      <Footer />
    </div>
  );
}
