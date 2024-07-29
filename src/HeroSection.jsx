import React from 'react';
import 'animate.css'; // Ensure Animate.css is imported

const HeroSection = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Image with Animation */}
            <img
                src="https://source.unsplash.com/1600x900/?university" // Random university image
                alt="Chitkara University"
                className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-110"
            />
            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black opacity-40"></div>
            {/* Content with subtle shadow effect */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                <h1 className="text-4xl md:text-6xl font-bold animate__animated animate__fadeInDown shadow-lg transition duration-300">
                    Welcome to Chitkara University
                </h1>
                <p className="mt-4 text-lg md:text-xl animate__animated animate__fadeInUp shadow-md transition duration-300">
                    Chitkara University is a leading institution in India, dedicated to providing quality education and fostering innovation.
                </p>
                <button className="mt-6 px-6 py-2 bg-blue-600 rounded h over:bg-blue-500 transition duration-300 animate__animated animate__bounceIn">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default HeroSection;