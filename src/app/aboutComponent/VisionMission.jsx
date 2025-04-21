'use client'
import Image from 'next/image'
import React from 'react'

const VisionMission = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Vision Section */}
          <div>
            <h2 className="text-3xl font-bold text-purple-700 mb-4">Vision</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.
            </p>
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/about/3_image.png"
                alt="Vision Mountain"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Mission Section */}
          <div>
            <h2 className="text-3xl font-bold text-purple-700 mb-4">Mission</h2>
            <div className="space-y-6">
              {[
                'Exceptional Experiences',
                'Personalized Service',
                'Sustainability',
                'Innovation',
              ].map((item, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold text-purple-700">
                    {String(index + 1).padStart(2, '0')}. {item}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionMission
