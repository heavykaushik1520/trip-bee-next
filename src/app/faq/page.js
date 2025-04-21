"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import QuestionsSection from "../QuestionsSection";
import Footer from "../Footer";

const FaqPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <div className="relative h-screen overflow-hidden text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/faq/a.png"
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
                  className=" hover:bg-gray-400 text-white font-semibold py-2 px-6 rounded-full border-1"
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
              className=" hover:bg-gray-400 text-white font-semibold py-2 px-6 rounded-full border-1"
            >
              Contact Us
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
          <div className=" bg-opacity-50 rounded-lg p-6 max-w-3xl mb-6">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              Everything You Need To Know
              <br /> Before You Going
            </h1>
          </div>

          {/* Social Media Icons */}
          <div className="mt-4 flex space-x-6">
            <a href="#" className="hover:scale-110 transition">
              <Image
                src="/images/home/fb.png"
                alt="Facebook"
                width={30}
                height={30}
              />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <Image
                src="/images/home/insta.png"
                alt="Instagram"
                width={30}
                height={30}
              />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <Image
                src="/images/home/linkedin.png"
                alt="LinkedIn"
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Questions and Footer */}
      <QuestionsSection />
      <Footer />
    </div>
  );
};

export default FaqPage;
