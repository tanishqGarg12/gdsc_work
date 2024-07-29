import React, { useContext } from 'react';
import { DarkModeContext } from './DarkModeContext';

const ChapterVideo = () => {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <section className={`py-10 px-4 md:px-8 lg:px-16 transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-200' : 'bg-gradient-to-r from-white to-[#f5f5dc] text-gray-800'}`}>
            <div className="max-w-screen-xl mx-auto text-center">
                <h2 className={`text-7xl font-bold mb-6 animate__animated animate__fadeInDown ${darkMode ? 'text-blue-400' : 'text-gray-800'} text-shadow`}>
                    Chapter Video
                </h2>
                <p className={`mb-8 text-lg max-w-xl mx-auto animate__animated animate__fadeInUp ${darkMode ? 'text-gray-200' : 'text-gray-800'} text-shadow`}>
                    Watch our latest chapter video to stay updated on our events and activities!
                </p>
                <div className="flex justify-center">
                    <iframe
                        width="800"
                        height="450"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your desired YouTube video link
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="shadow-lg transition-transform duration-300 transform hover:scale-105"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default ChapterVideo;