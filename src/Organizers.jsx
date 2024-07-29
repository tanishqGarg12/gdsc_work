import React, { useContext } from 'react';
import { DarkModeContext } from './DarkModeContext';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Organizers = () => {
    const { darkMode } = useContext(DarkModeContext);

    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className={`py-20 px-4 md:px-8 lg:px-16 transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-800'}`}>
            <div className="max-w-screen-xl mx-auto">
                <h2 className={`text-5xl font-extrabold mb-8 text-center animate__animated animate__fadeInDown ${darkMode ? 'text-blue-400' : 'text-gradient'}`} style={{ background: 'linear-gradient(to right, #FF6F20, #3B82F6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Meet Our Organizers
                </h2>
                <p className="text-center mb-12 text-lg max-w-xl mx-auto">
                    Our dedicated team of organizers is here to ensure that every event runs smoothly and is enjoyable for all participants. Get to know them!
                </p>
                <Slider {...settings}>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className={`bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-300 dark:border-gray-700 shadow-lg m-4 flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`} style={{ height: '350px' }}>
                            <img src="https://via.placeholder.com/150" alt={`Organizer ${index + 1}`} className="rounded-full mb-4 mx-auto transition-transform duration-300 transform hover:scale-110" />
                            <h3 className="text-xl font-bold mb-2 text-center" style={{ color: darkMode ? 'inherit' : 'rgba(255, 111, 32, 1)' }}>Organizer {index + 1}</h3>
                            <a href="#" className={`text-blue-500 dark:text-blue-400 underline mb-4 transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-300 text-center flex justify-center`}>View Profile</a>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Organizers;