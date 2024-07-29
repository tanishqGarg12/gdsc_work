import React, { useState, useEffect, useContext } from 'react';
import { DarkModeContext } from './DarkModeContext';

const Navbar = () => {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    const [isOpen, setIsOpen] = useState(false);

    // Apply dark mode class to body
    useEffect(() => {
        document.body.classList.toggle('bg-gray-900', darkMode);
        document.body.classList.toggle('text-white', darkMode);
        document.body.classList.toggle('bg-gray-100', !darkMode);
        document.body.classList.toggle('text-gray-900', !darkMode);
    }, [darkMode]);

    // Toggle mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`flex items-center justify-between p-4 shadow-md transition duration-300 ease-in-out ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">GDSC</div>
            <div className="hidden md:flex items-center">
                <button
                    onClick={toggleDarkMode}
                    className={`p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'}`}
                >
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
                <div className="relative mx-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        className={`p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out ${darkMode ? 'bg-gray-700 text-gray-300 border-gray-600' : 'bg-white text-gray-900 border-gray-300'}`}
                    />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a7 7 0 100 14 7 7 0 000-14zm0 0l6 6" />
                        </svg>
                    </button>
                </div>
                <button className={`ml-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out ${darkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'}`}>
                    Login
                </button>
                <ul className="flex space-x-6 ml-6">
                    <li>
                        <a href="#" className={`hover:text-blue-500 transition duration-300 ease-in-out ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Home</a>
                    </li>
                    <li>
                        <a href="#" className={`hover:text-blue-500 transition duration-300 ease-in-out ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>About</a>
                    </li>
                    <li>
                        <a href="#" className={`hover:text-blue-500 transition duration-300 ease-in-out ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Events</a>
                    </li>
                    <li>
                        <a href="#" className={`hover:text-blue-500 transition duration-300 ease-in-out ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Contact</a>
                    </li>
                </ul>
            </div>
            <div className="md:hidden flex items-center">
                <button
                    onClick={toggleMenu}
                    className={`p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'}`}
                >
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </div>
            {isOpen && (
                <div className={`absolute top-16 right-0 w-full shadow-lg md:hidden transition duration-300 ease-in-out ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-800'}`}>
                    <ul className="flex flex-col p-4 space-y-2">
                        <li>
                            <a href="#" className={`hover:text-blue-500 transition duration-300 ease-in-out ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Home</a>
                        </li>
                        <li>
                            <a href="#" className={`hover:text-blue-500 transition duration-300 ease-in-out ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>About</a>
                        </li>
                        <li>
                            <a href="#" className={`hover:text-blue-500 transition duration-300 ease-in-out ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Events</a>
                        </li>
                        <li>
                            <a href="#" className={`hover:text-blue-500 transition duration-300 ease-in-out ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>Contact</a>
                        </li>
                        <li>
                            <button className={`w-full text-left p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out ${darkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'}`}>
                                Login
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
