"use client";

import Head from "next/head";
import Link from "next/link";

import Image from "next/image";
import { useState } from "react"; // Import useState for mobile menu
import QuestionsSection from "./QuestionsSection";
import Footer from "./Footer"; // Adjust the path if necessary
import WorldMap from "./WorldMap";

const tourOptions = [
  {
    id: 1,
    name: "Bali",
    country: "Indonesia",
    imageSrc: "/images/home/bali_2.png",
    wantToTravelCount: "546",
  },
  {
    id: 2,
    name: "Santorini",
    country: "Greece",
    imageSrc: "/images/home/santorini.png",
    wantToTravelCount: "645",
  },
  {
    id: 3,
    name: "Bern",
    country: "Swiss",
    imageSrc: "/images/home/bern.png",
    wantToTravelCount: "321",
  },
  {
    id: 4,
    name: "Uldag",
    country: "Turkey",
    imageSrc: "/images/home/uldag.png",
    wantToTravelCount: "112",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMouseEnter = (id) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? tourOptions.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === tourOptions.length - 1 ? 0 : prevIndex + 1
    );
  };

  const backgroundImageStyle = {
    backgroundImage: `url('/images/home/1_image.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div>
      <Head>
        <title>TripBee</title>
        <meta
          name="description"
          content="Discover hidden gems and iconic landmarks worldwide with TripBee."
        />
        <link rel="icon" href="/favicon.ico" />{" "}
        {/* Replace with your favicon */}
      </Head>

      <header className="relative min-h-screen bg-gradient-to-b from-indigo-900 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0" style={backgroundImageStyle}></div>

        <div className="container mx-auto px-4 relative z-10 min-h-screen flex flex-col">
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

          <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-16 md:py-24">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Experience Travel <br className="hidden sm:block" /> Like Never
              Before
            </h1>
            <p className="text-lg md:text-xl mb-8 font-light max-w-2xl">
              Discover Hidden Gems And Iconic Landmarks Worldwide with TripBee.
              <br className="hidden sm:block" /> Our Dedicated Team Ensures Your
              Trip Is Seamless, Enjoyable, And Truly Unforgettable.
            </p>

            {/* Unified Button for All Screens */}
            <button className="bg-white text-indigo-700 hover:bg-indigo-100 font-semibold py-3 px-8 rounded-full text-lg flex items-center gap-2">
              Take to a Trip
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </section>

          {/* Social Icons */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
            <a href="#" className="text-white hover:text-indigo-200">
              <Image
                src="/images/home/fb.png"
                alt="Facebook"
                width={24}
                height={24}
              />
            </a>
            <a href="#" className="text-white hover:text-indigo-200">
              <Image
                src="/images/home/insta.png"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
            <a href="#" className="text-white hover:text-indigo-200">
              <Image
                src="/images/home/linkedin.png"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </header>

      {/* Main Main  */}
      {/* Main Main  */}
      {/* Main Main  */}
      {/* Main Main  */}
      {/* Main Main  */}

      <main className="bg-white py-12 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 items-center gap-12">
            {" "}
            {/* Using grid for responsiveness */}
            <div className="text-center md:text-left mb-10 md:mb-0">
              {" "}
              {/* Added mobile-first text centering */}
              <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">
                TripBee: Your Gateway To Adventure
              </h2>
              <p className="text-gray-700 mb-6">
                We Craft Unforgettable Travel Experiences Tailored Just For You.
                From Curated Tour Packages And Seamless Bookings To Personalized
                Itineraries And On-Trip Support, We Take Care Of Everything—So
                You Can Focus On Making Memories.
              </p>
              <div className="flex justify-around md:justify-start gap-8">
                {" "}
                {/* Mobile-first justify-around */}
                <div>
                  <span className="text-xl md:text-2xl font-bold text-purple-700">
                    10,000+
                  </span>
                  <p className="text-sm text-gray-600">Satisfied Travelers</p>
                </div>
                <div>
                  <span className="text-xl md:text-2xl font-bold text-purple-700">
                    500+
                  </span>
                  <p className="text-sm text-gray-600">Destinations Covered</p>
                </div>
                <div>
                  <span className="text-xl md:text-2xl font-bold text-purple-700">
                    150+
                  </span>
                  <p className="text-sm text-gray-600">Expert Guides</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {" "}
              {/* Grid for images */}
              {/* <div className="relative rounded-lg overflow-hidden aspect-w-16 aspect-h-9"> */}
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/home/2_image.png"
                  alt="Adventure Image 1"
                  layout="fill"
                  objectFit="cover"
                  onError={(e) => console.log("Image 1 Error:", e)}
                />
              </div>
              <div className="relative rounded-lg overflow-hidden aspect-w-16 aspect-h-9">
                <Image
                  src="/images/home/3_image.png"
                  alt="Adventure Image 2"
                  layout="fill"
                  objectFit="cover"
                  onError={(e) => console.log("Image 2 Error:", e)} // Add error logging
                />
              </div>
              <div className="relative rounded-lg overflow-hidden aspect-w-16 aspect-h-9 col-span-2">
                <Image
                  src="/images/home/4_image.png"
                  alt="Adventure Image 3"
                  layout="fill"
                  objectFit="cover"
                  onError={(e) => console.log("Image 3 Error:", e)} // Add error logging
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Diverse Tour Options Section */}
      {/* Diverse Tour Options Section */}
      {/* Diverse Tour Options Section */}
      {/* Diverse Tour Options Section */}
      {/* Diverse Tour Options Section */}

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-indigo-900 mb-2">
              Diverse Tour Options
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Choose From A Wide Range Of Tours—Whether Its Adventure,
              Relaxation, Cultural Exploration, Or Family Fun, Weve Got
              Something For Every Traveler.
            </p>
          </div>

          {/* Slider buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={handlePrev}
              className="bg-white border border-gray-300 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-full"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-full"
            >
              →
            </button>
          </div>

          {/* Horizontal Scroll Container */}
          <div className="overflow-x-auto mt-8">
            <div className="flex space-x-6 w-max px-2">
              {tourOptions.map((tour) => (
                <div
                  key={tour.id}
                  className="relative w-[300px] h-[400px] rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
                >
                  <Image
                    src={tour.imageSrc}
                    alt={tour.name}
                    width={300}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4">
                    <h3 className="text-xl font-semibold">{tour.name}</h3>
                    <p className="text-sm mb-1">{tour.country}</p>
                    <p className="text-xs text-gray-300 mb-2">
                      {tour.wantToTravelCount} Want To Travel Here
                    </p>
                    <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-1 px-3 rounded-full text-xs">
                      I Want To Travel Here
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
            {/* Image on the Left */}
            <div className="mb-8 md:mb-0 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/home/5_image.png" // Replace with your actual image path
                alt="Why Choose TripBee"
                width={600} // Adjust as needed
                height={400} // Adjust as needed
                layout="responsive"
                objectFit="cover"
                onError={(e) =>
                  console.log("Error loading why choose us image:", e)
                }
              />
            </div>

            {/* Reasons on the Right */}
            <div>
              <h2 className="text-3xl font-bold text-indigo-900 mb-8 md:text-center text-center">
                Why choose <span className="text-purple-600">TripBee</span>?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8">
                {/* Feature 1: Personalized Itineraries */}
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-500 flex items-center justify-center mr-4">
                    {/* Replace with your Personalized Itineraries Icon */}
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m-2-2v2m-2-2V3m-2 2h14M5 7h14m-9-2v2m-2-2V3"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      Personalized Itineraries
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Tailored Travel Plans To Suit Your Unique Interests And
                      Needs.
                    </p>
                  </div>
                </div>

                {/* Feature 2: Expert Guides */}
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-500 flex items-center justify-center mr-4">
                    {/* Replace with your Expert Guides Icon */}
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      Expert Guides
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Knowledgeable Guides To Enrich Your Travel Experience.
                    </p>
                  </div>
                </div>

                {/* Feature 3: 24/7 Support */}
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-500 flex items-center justify-center mr-4">
                    {/* Replace with your 24/7 Support Icon */}
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      24/7 Support
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Reliable Assistance Anytime, Anywhere For A Stress-Free
                      Journey.
                    </p>
                  </div>
                </div>

                {/* Feature 4: Best Value */}
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-500 flex items-center justify-center mr-4">
                    {/* Replace with your Best Value Icon */}
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      Best Value
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Competitive Pricing Without Compromising On Quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-indigo-900 mb-2">
              Popular Tours
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore Our Top Destinations Loved By Travelers Worldwide And Find
              Your Perfect Adventure Today.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Paris, France",
                image: "/images/home/paris.png",
              },
              {
                title: "Koyoto, Japan",
                image: "/images/home/koyato.png",
              },
              {
                title: "Sydney, Australia",
                image: "/images/home/sydney.png",
              },
              {
                title: "New York, USA",
                image: "/images/home/newyork.png",
              },
              {
                title: "Barcelona, Spain",
                image: "/images/home/barcelona.png",
              },
              {
                title: "Bali, Indonesia",
                image: "/images/home/bali_2.png",
              },
            ].map((tour, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105"
              >
                <div className="w-full h-[300px] relative">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {tour.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">7 Days, 6 Nights</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">Starts From</span>
                    <span className="text-purple-600 font-semibold">
                      $1,200
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-indigo-900 mb-2">
              Our Expert Travel Team
            </h2>
            <p className="text-gray-600">
              Dedicated Travel Professionals Making Your Journey Extraordinary
              With Their Expertise And Passion.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Team Member 1: Gabriel Montana */}
            <div className="relative rounded-lg overflow-hidden shadow-md">
              <div className="relative aspect-[33688/50600] w-full">
                <Image
                  src="/images/home/gabriel_m.png"
                  alt="Gabriel Montana"
                  layout="fill"
                  objectFit="cover"
                  onError={(e) =>
                    console.log("Error loading Gabriel Montana image:", e)
                  }
                />
                <div className="absolute bottom-0 left-0 right-0 text-white p-4 text-center">
                  <h3 className="text-lg font-semibold mb-1">
                    Gabriel Montana
                  </h3>
                  <p className="text-sm">Senior Travel Consultant</p>
                  <div className="flex justify-center space-x-2 mt-1">
                    <span className="inline-block text-white text-xs rounded-full px-2 py-0.5">
                      North America
                    </span>
                    <span className="inline-block text-white text-xs rounded-full px-2 py-0.5">
                      Southeast Asia
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Member 2: Julie Maria */}
            <div className="relative rounded-lg overflow-hidden shadow-md">
              <div className="relative aspect-[33688/50600] w-full">
                <Image
                  src="/images/home/julia_maria.png"
                  alt="Julie Maria"
                  layout="fill"
                  objectFit="cover"
                  onError={(e) =>
                    console.log("Error loading Julie Maria image:", e)
                  }
                />
                <div className="absolute bottom-0 left-0 right-0 text-white p-4 text-center">
                  <h3 className="text-lg font-semibold mb-1">Julie Maria</h3>
                  <p className="text-sm">Senior Travel Consultant</p>
                  <div className="flex justify-center space-x-2 mt-1">
                    <span className="inline-block text-white text-xs rounded-full px-2 py-0.5">
                      North America
                    </span>
                    <span className="inline-block text-white text-xs rounded-full px-2 py-0.5">
                      Southeast Asia
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Member 3: Jasson Roy */}
            <div className="relative rounded-lg overflow-hidden shadow-md">
              <div className="relative aspect-[33688/50600] w-full">
                <Image
                  src="/images/home/jasson_roy.png"
                  alt="Jasson Roy"
                  layout="fill"
                  objectFit="cover"
                  onError={(e) =>
                    console.log("Error loading Jasson Roy image:", e)
                  }
                />
                <div className="absolute bottom-0 left-0 right-0 text-white p-4 text-center">
                  <h3 className="text-lg font-semibold mb-1">Jasson Roy</h3>
                  <p className="text-sm">Tour Guide</p>
                  <div className="flex justify-center space-x-2 mt-1">
                    <span className="inline-block text-white text-xs rounded-full px-2 py-0.5">
                      North America
                    </span>
                    <span className="inline-block text-white text-xs rounded-full px-2 py-0.5">
                      Southeast Asia
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Member 4: Elon Musk */}
            <div className="relative rounded-lg overflow-hidden shadow-md">
              <div className="relative aspect-[33688/50600] w-full">
                <Image
                  src="/images/home/elon_musk.png"
                  alt="Elon Musk"
                  layout="fill"
                  objectFit="cover"
                  onError={(e) =>
                    console.log("Error loading Elon Musk image:", e)
                  }
                />
                <div className="absolute bottom-0 left-0 right-0 text-white p-4 text-center">
                  <h3 className="text-lg font-semibold mb-1">Elon Musk</h3>
                  <p className="text-sm">Wildlife Safari Guide</p>
                  <div className="flex justify-center space-x-2 mt-1">
                    <span className="inline-block text-white text-xs rounded-full px-2 py-0.5">
                      South America
                    </span>
                    <span className="inline-block text-white text-xs rounded-full px-2 py-0.5">
                      Africa
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WorldMap />

      <QuestionsSection />
      <Footer />
    </div>
  );
}
