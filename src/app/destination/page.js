// app/destination/page.js

"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import TopDestinations from "../destinationComponent/TopDestination";
import QuestionsSection from "../QuestionsSection";
import Footer from "../Footer";

const DestinationPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const backgroundImageStyle = {
    backgroundImage: `url('/images/destinations/1_image.png')`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="relative">
      <Head>
        <title>Destinations - TripBee</title>
        <meta
          name="description"
          content="Explore our top travel destinations around the globe."
        />
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
          <Link
            href="/blog"
            className="hover:text-indigo-200 hover:underline underline-offset-2"
          >
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

      {/* Hero Section */}
      <header className="relative text-white overflow-hidden min-h-screen flex items-center justify-center">
        {/* Fullscreen Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/destinations/1_image.png"
            alt="Destination Background"
            fill
            style={{ objectFit: "cover" }} // OR use "contain" if you prefer the full image without crop
            className="opacity-60"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Explore Our Top Destinations
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-light">
              Discover The Most Exciting Cities Across The Globe, Handpicked To
              Offer You The Ultimate Travel Experiences.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-4">
            <Link href="#" className="text-white hover:text-indigo-200">
              <Image
                src="/images/about/fb.png"
                alt="Facebook"
                width={32}
                height={32}
              />
            </Link>
            <Link href="#" className="text-white hover:text-indigo-200">
              <Image
                src="/images/about/insta.png"
                alt="Instagram"
                width={32}
                height={32}
              />
            </Link>
            <Link href="#" className="text-white hover:text-indigo-200">
              <Image
                src="/images/about/linkedin.png"
                alt="LinkedIn"
                width={32}
                height={32}
              />
            </Link>
          </div>
        </div>
      </header>
      <TopDestinations />
      <QuestionsSection />
      <Footer />
    </div>
  );
};

export default DestinationPage;
