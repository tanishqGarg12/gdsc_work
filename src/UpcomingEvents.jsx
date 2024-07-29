import React, { useContext } from 'react';
import { DarkModeContext } from './DarkModeContext';
import { FaCalendarAlt } from 'react-icons/fa';

const UpcomingEvents = () => {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <section className={`py-20 px-4 md:px-8 lg:px-16 transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-800'}`}>
            <div className="max-w-screen-xl mx-auto">
                <h2 className={`text-4xl font-bold mb-8 text-center animate__animated animate__fadeInDown ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Upcoming Events</h2>
                <div className="flex justify-center">
                    <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md animate__animated animate__fadeInUp`}>
                        <div className="flex items-center mb-4">
                            <FaCalendarAlt className={`mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} size={24} />
                            <h3 className={`text-2xl font-bold ${darkMode ? 'text-blue-900' : 'text-gray-800'}`}>No upcoming events</h3>
                        </div>
                        <p className={darkMode ? 'text-red-900' : 'text-gray-600'}>There are currently no upcoming events. Please check again soon.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;