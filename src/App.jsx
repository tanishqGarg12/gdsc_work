// src/App.js
import React from 'react';
// import { DarkModeProvider } from './DarkModeContext.js'; // Import the provider
import {DarkModeProvider} from "./DarkModeContext"
import Navbar from './Navbar';
import HeroSection from './HeroSection';
// import AboutUs from './AboutUs';
import AboutUs from './About';
import './index.css'; // Ensure your Tailwind CSS is imported here
import InfoCard from './InfoCard';
import UpcomingEvents from './UpcomingEvents';
import PastEvents from './PastEvents';
import Organizers from './Organizers';
import Partners from './Partners';
import ChapterVideo from './ChapterVideo';
import Footer from './Footer';
// import { DarkModeContext, DarkModeProvider } from './DarkModeContext';

const App = () => {
    return (
        <DarkModeProvider>
            <Navbar />
            <HeroSection />
            <AboutUs />
            <InfoCard/>
            <UpcomingEvents/>
            <PastEvents/>
            <Organizers/>
            <Partners/>
            <ChapterVideo/>
            <Footer/>
        </DarkModeProvider>
    );
};

export default App;