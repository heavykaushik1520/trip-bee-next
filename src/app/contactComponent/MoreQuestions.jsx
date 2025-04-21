import React from 'react';
import Image from 'next/image';

const backgroundImage = '/images/contact/3_image.png';

const MoreQuestions = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 rounded-lg overflow-hidden">
          {/* Image Section */}
          <div className="relative">
            <Image
              src={backgroundImage}
              alt="Mountains"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Form Section */}
          <div className="bg-white p-8 border-2 border-purple-500 rounded-xl max-w-lg w-full mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Do you have more questions?</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <label htmlFor="help" className="block text-sm font-medium text-gray-700">
                  How can we help you
                </label>
                <textarea
                  id="help"
                  rows={4}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                  placeholder="Enter your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-purple-600 text-white font-semibold py-2.5 px-6 rounded-full hover:bg-purple-700 transition-colors duration-200"
              >
                Request a call back →
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreQuestions;
