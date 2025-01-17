import React from 'react';
import About from './About';
import Portfolio from './Portfolio';
import '../CssFiles/About.css'; // Import the CSS file

function Home() {
    return (
        <>
        <About />
        <Portfolio/>
        </>
    );
}

export default Home;
