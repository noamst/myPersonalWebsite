import React from 'react';
import '../CssFiles/Card.css';

function Card({ image, title, description, githubLink }) {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="card-link">
                    View on GitHub
                </a>
            </div>
        </div>
    );
}

export default Card;
