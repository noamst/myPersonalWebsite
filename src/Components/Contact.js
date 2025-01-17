import React from 'react';
import '../CssFiles/Contact.css';

function Contact() {
    return (
        <div className="contact">
            <header className="contact-header">
                <h1>Contact Me</h1>
                <p>Feel free to reach out to me via email or LinkedIn!</p>
            </header>
            <div className="contact-content">
                <section className="contact-section">
                    <h2>Email</h2>
                    <p>
                        <a className="contact-link">
                            noam.stopler@gmail.com
                        </a>
                    </p>
                </section>
                <section className="contact-section">
                    <h2>LinkedIn</h2>
                    <p>
                        <a
                            href="https://www.linkedin.com/in/noam-stopler-90475823a/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-link"
                        >
                            https://www.linkedin.com/in/noam-stopler-90475823a/
                        </a>
                    </p>
                </section>
            </div>
        </div>
    );
}

export default Contact;
