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
import ResponsiveImageGrid from "../awardComponent/ImageGrid";
import MoreQuestions from "../contactComponent/MoreQuestions";
import QuestionsSection from "../QuestionsSection";

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
          className="absolute inset-0 "
          style={{
            backgroundImage: `url('/images/award/i1.png')`, // Replace with your image path
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

      <ResponsiveImageGrid />
      <QuestionsSection />
      <Footer />
    </div>
  );
}
