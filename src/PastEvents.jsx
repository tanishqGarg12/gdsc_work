import React, { useContext } from 'react';
import { DarkModeContext } from './DarkModeContext';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PastEvents = () => {
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
                <h2 className={`text-4xl font-bold mb-8 text-center animate__animated animate__fadeInDown ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Past Events</h2>
                <Slider {...settings}>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className={`bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-300 dark:border-gray-700 shadow-lg m-4 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}>
                            <img src="https://via.placeholder.com/150" alt={`Event ${index + 1}`} className="rounded-full mb-4 mx-auto" />
                            <h3 className="text-xl font-bold mb-2 text-center">Event {index + 1}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4 text-center">Description of Event Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo perspiciatis placeat nemo unde, ipsam aut obcaecati eum alias veritatis excepturi! {index + 1}</p>
                            <p className="text-gray-500 dark:text-gray-400 text-center">Date</p>
                        </div>
                    ))}
                </Slider>
                <div className="flex justify-center mt-8">
                    <button className={`bg-blue-500 dark:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${darkMode ? 'hover:bg-blue-600' : 'hover:bg-blue-400'}`}>
                        Load More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PastEvents;