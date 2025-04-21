import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Placeholder image URLs (replace with your actual image paths)
const awardImages = [
    '/images/award/a1.png',
    '/images/award/a2.png',
    '/images/award/a3.png',
    '/images/award/a4.png',
    '/images/award/a5.png',
    '/images/award/a6.png',
    '/images/award/emirates-group-security.png' //Added this image
];

const ResponsiveImageGrid = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [displayedImages, setDisplayedImages] = useState(awardImages.slice(0, 6));

     useEffect(() => {
        const loadImages = async () => {
            const promises = displayedImages.map(
                (src) =>
                    new Promise((resolve) => {
                        const img = new Image();
                        img.src = src;
                        img.onload = () => resolve(true);
                        img.onerror = () => resolve(false); // Consider error as loaded (to prevent infinite loading)
                    })
            );

            const results = await Promise.all(promises);
            if (results.every(Boolean)) {
                setImagesLoaded(true);
            }
            else{
                setImagesLoaded(true); //set to true even if some images fail to load
            }
        };
        loadImages();
    }, [displayedImages]);


    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-indigo-700 mb-4">
                        Awards And Certifications
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Discover Our Achievements
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: imagesLoaded? 1: 0.5, scale: imagesLoaded ? 1: 0.9 }} //show loaded images
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="rounded-lg overflow-hidden shadow-md flex items-center justify-center" // Ensure content is centered
                            style={{
                                aspectRatio: '4 / 3', // Maintain image aspect ratio
                            }}
                        >
                            <img
                                src={image}
                                alt={`Award ${index + 1}`}
                                className="w-full h-full object-cover" // Ensure image covers the container
                                style={{
                                    display: 'block', //removes extra space
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResponsiveImageGrid;
