import React, { useContext } from 'react';
import { DarkModeContext } from './DarkModeContext';

const Partners = () => {
    const { darkMode } = useContext(DarkModeContext);

    const partnerLogos = [
        'https://via.placeholder.com/150?text=Partner+1',
        'https://via.placeholder.com/150?text=Partner+2',
        'https://via.placeholder.com/150?text=Partner+3',
        'https://via.placeholder.com/150?text=Partner+2',
    ];

    return (
        <section className={`py-20 px-4 md:px-8 lg:px-16 transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-800'}`}>
            <div className="max-w-screen-xl mx-auto">
                <h2 className={`text-4xl font-bold mb-8 text-center animate__animated animate__fadeInDown ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    Our Partners
                <p className={`mt-8 text-center text-lg ${darkMode ? 'text-gray-200' : 'text-orange-600'}`}>
    We are proud to partner with these leading companies to bring you the best events and resources.
</p>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {partnerLogos.map((logo, index) => (
                        <div key={index} className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105`} style={{ height: '250px' }}>
                            <img src={logo} alt={`Partner ${index + 1}`} className="mx-auto h-52" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;