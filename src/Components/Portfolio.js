import React from 'react';
import '../CssFiles/Portfolio.css';
import Card from './Card';
import Projects from '../Resources/projects'

function Portfolio() {
    

    return (
        <div className="portfolio">
            <h2 className="portfolio-title">My Projects</h2>
            <div className="portfolio-container">
                {Projects.map((project, index) => (
                    <Card
                        key={index}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        githubLink={project.githubLink}
                    />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
