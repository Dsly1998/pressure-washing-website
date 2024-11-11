import React from 'react';
import './About.css';
import headshot from '../../images/headshot.png';

function About() {
    return (
        <div className="about-container" id='about'>
                <div className="about-content">
                <img src={headshot}
                    alt="Headshot of me"
                    className="about__image" 
                />
                <div className="about__info">
                <h2 className='about__title'>About</h2>
                <p className="about__paragraph">
                I’m Brayden Taber, a local firefighter and a devoted family man with a passion for health and fitness. I believe in hard work and integrity, both on and off duty. With years of experience serving my community, I’ve built a reputation for being reliable, precise, and committed—qualities I now bring to my new venture, Red Line & Blue Pressure Washing. My goal is simple: to deliver top-quality pressure washing services that make homes and businesses look their best.
                </p>
                <p className="about__paragraph">
                When I’m not at the fire station or working on a project, I cherish time with my family and stay active through fitness. My dedication to helping others—whether through emergency response or my pressure washing company—reflects my passion for making a positive impact in my community with every job I take on.
                </p>
                </div>
            </div>
        </div>
    );
}

export default About;