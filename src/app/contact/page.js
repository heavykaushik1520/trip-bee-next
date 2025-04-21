"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import WorldMap from "../WorldMap";
import QuestionsSection from "../QuestionsSection";
import Footer from "../Footer";
import MoreQuestions from "../contactComponent/MoreQuestions";

const ContactPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const officeImage = "/images/contact/2_img.png";

  return (
    <div>
      <div className="relative h-screen overflow-hidden text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact/1_img.png"
            alt="Contact Background"
            fill
            className="object-cover"
            priority
          />
        </div>

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
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-full block mx-auto my-2"
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
            className={`md:hidden absolute top-full left-0 right-0 bg-indigo-900 bg-opacity-90 text-center py-4 ${
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
              className="block py-2 hover:text-indigo-200"
            >
              Destinations
            </Link>
            <Link href="/blog" className="block py-2 hover:text-indigo-200">
              Blog
            </Link>
            <Link
              href="/contact"
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-full block mx-auto my-2"
            >
              Contact Us
            </Link>
          </div>
        </nav>

        {/* Hero + Office Info (Single screen layout) */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
          <div className=" bg-opacity-70 rounded-lg p-6 max-w-3xl mb-6">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              Get In Touch With <br /> TripBee
            </h1>
            <p className="text-lg md:text-xl font-light">
              We Are Here To Assist You With All Your Travel Needs. Reach Out To
              Us Through Any Of Our Offices Or Via Our Support Channels.
            </p>
          </div>

          {/* Office Cards — fit in remaining height */}
          <div className="grid md:grid-cols-3 gap-4 w-full max-w-6xl px-4">
            {[
              {
                title: "New York Office",
                address: "123 Fifth Avenue, New York, NY 10001, USA",
                phone: "+1 (212) 777-1234",
                email: "nyoffice@tripbee.com",
              },
              {
                title: "India Office",
                address: "123 Fifth Avenue, New York, NY 10001, USA",
                phone: "+91 44444 22222",
                email: "indoffice@tripbee.com",
              },
              {
                title: "Tokyo Office",
                address: "123 Fifth Avenue, New York, NY 10001, USA",
                phone: "+81 3-1234-5678",
                email: "tokoffice@tripbee.com",
              },
            ].map((office, index) => (
              <div
                key={index}
                className="bg-black bg-opacity-40 text-white rounded-lg p-4 shadow-md"
              >
                <h3 className="text-lg font-semibold mb-2">{office.title}</h3>
                <p className="text-sm mb-1">📍 {office.address}</p>
                <p className="text-sm mb-1">📞 {office.phone}</p>
                <p className="text-sm">✉️ {office.email}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-16">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-left">
              <p className="text-gray-600 leading-relaxed mb-6">
                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                Industry. Lorem Ipsum Has Been The Industry&apos;s Standard
                Dummy Text Ever Since The 1500s, When An Unknown Printer Took A
                Galley Of Type And Scrambled It To Make A Type Specimen Book.
              </p>
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  {/* Location Icon (Placeholder -  use a proper icon if you have one) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-gray-700 mr-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    123 Fifth Avenue, New York, NY 10001, USA
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  {/* Phone Icon (Placeholder) */}
                  📞
                  <span className="text-gray-700">+1 (212) 777-1234</span>
                </div>
                <div className="flex items-center">
                  {/* Email Icon (Placeholder) */}
                  ✉️

                  <span className="text-gray-700">nyoffice@tripbee.com</span>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                Industry.
              </p>
            </div>

            {/* Image */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src={officeImage} // Use the imported image variable
                alt="Office Building"
                width={600} //  set appropriate dimensions
                height={400}
                className="w-full h-auto object-cover" // Make image responsive
              />
            </div>
          </div>
        </div>
      </div>

      <WorldMap/>
      <MoreQuestions/>
      <Footer/>
    </div>
  );
};

export default ContactPage;
