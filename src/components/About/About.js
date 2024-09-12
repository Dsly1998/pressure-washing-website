import React from 'react';
import './About.css';
import headshot from '../../images/headshot.png';

function About() {
    return (
        <div className="about-container">
            <div className="about-content">
                <h2 className='about__title'>About</h2>
                <img src={headshot}
                    alt="Headshot of me"
                    className="about__image" 
                />
                <p className="about__paragraph">
                    Brayden Taber is a firefighter, a devoted family man, and a health and fitness enthusiast who believes in hard work and integrity both on and off duty. With years of experience serving his community, Braydon has developed a reputation for being reliable, precise, and committed—qualities he now brings to his new venture, Red Line & Blue Pressure Washing. His goal is simple: to deliver top-quality pressure washing services that leave homes and businesses looking their best.
                </p>
                <p className="about__paragraph">
                    When he's not at the fire station or working on a project, Brayden cherishes time with his family and stays active through fitness. His dedication to helping others, whether through emergency response or his pressure washing company, reflects his passion for making a positive impact in his community with every job he takes on.
                </p>
            </div>
        </div>
    );
}

export default About;