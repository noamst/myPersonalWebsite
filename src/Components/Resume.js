import React from 'react';
import '../CssFiles/Resume.css';

function Resume() {
    return (
        <div className="resume">
            <header className="resume-header">
                <h1>My Resume</h1>
                <p>A quick overview of my background, skills, and interests.</p>
            </header>
            <div className="resume-content">
                {/* About Section */}
                <section className="resume-section">
                    <h2>About Me</h2>
                    <p>
                        CURRENTLY EMPTY
                    </p>
                </section>

                {/* Education Section */}
                <section className="resume-section">
                    <h2>Education</h2>
                    <ul>
                        <li>
                            <h3>Bachelor's Degree in Computer Science</h3>
                            <p>Ben Gurion University, 2020 - 2024</p>
                            <p>Focused on the Data science </p>
                        </li>
                    </ul>
                </section>

                {/* Work Experience Section */}
                <section className="resume-section">
                    <h2>Work Experience</h2>
                    <ul>
                        <li>
                            <h3>Software Developer</h3>
                            <p>IDF</p>
                            <p>
                            Developed in an Internal PLI derived language in an IBM Mainframe enviroment.I was implementing organizational policy and
                                salary related issues in software
                            </p>
                        </li>
                       
                    </ul>
                </section>

                {/* Interests Section */}
                <section className="resume-section">
                    <h2>Interests</h2>
                    <p>
                        Apart from coding, I am deeply interested in:
                    </p>
                    <ul>
                        <li>Artificial Intelligence and Machine Learning</li>
                        <li>Web Development</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default Resume;
