import React from 'react';
import '../CssFiles/About.css'; // Import the CSS file

function About() {
    return (
        <header className="about-header">
            <h1 className="about-title">Noam Stopler</h1>
            <p className="about-tagline">Passionate Software Developer | Innovating with Code</p>
            <nav className="about-nav">
                <a href="about" className="nav-link">About</a>
                <a href="contact" className="nav-link">Contact</a>
            </nav>
        </header>
    );
}

export default About;
