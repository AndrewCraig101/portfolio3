
import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFire, faUniversalAccess } from '@fortawesome/free-solid-svg-icons';

import { faHtml5, faGithub, faSass, faReact, faJsSquare, faCss3 } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faGithub, faSass, faReact, faJsSquare, faCss3)

const Skills = () => {
    return (
    <section id="skills" className="skills">
    <div className="wrapper">
        <h3>Skills</h3>
        <ul>
            <li data-aos="flip-left" data-aos-duration="2000" data-aos-anchor-placement="top-bottom">
                <FontAwesomeIcon icon={faHtml5} className="icon"></FontAwesomeIcon>
                <p>HTML5</p>
            </li>
            <li data-aos="flip-left" data-aos-duration="2000" data-aos-anchor-placement="top-bottom">
                <FontAwesomeIcon icon={faCss3} className="icon"></FontAwesomeIcon>
                <p>CSS3</p>
            </li>
            <li data-aos="flip-left" data-aos-duration="2000" data-aos-anchor-placement="top-bottom">
                <FontAwesomeIcon icon={faSass} className="icon"></FontAwesomeIcon>
                <p>SCSS</p>
            </li>
            <li data-aos="flip-left" data-aos-duration="2000" data-aos-anchor-placement="top-bottom">
                <FontAwesomeIcon icon={faJsSquare} className="icon" ></FontAwesomeIcon>
                <p>Javascript</p>
            </li>
            <li data-aos="flip-left" data-aos-duration="2000" data-aos-anchor-placement="top-bottom">
                <FontAwesomeIcon icon={faReact} className="icon" ></FontAwesomeIcon>
                <p>ReactJS</p>
            </li>
            <li data-aos="flip-left" data-aos-duration="2000" data-aos-anchor-placement="top-bottom">
                <FontAwesomeIcon icon={faFire} className="icon"></FontAwesomeIcon>
                <p>Firebase</p>
            </li>
            <li data-aos="flip-left" data-aos-duration="2000" data-aos-anchor-placement="top-bottom">
            <FontAwesomeIcon icon={faUniversalAccess} className="icon"></FontAwesomeIcon>
                <p>Access</p>
            </li>
            <li data-aos="flip-left" data-aos-duration="2000" data-aos-anchor-placement="top-bottom">
                <FontAwesomeIcon icon={faGithub} className="icon"></FontAwesomeIcon>
                <p>Git/Github</p>
            </li>
            <li>
                <p></p>
            </li>
        </ul>
    </div>
    </section>
    )
}

export default Skills;


