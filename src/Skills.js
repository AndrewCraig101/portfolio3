
import React from 'react';

import djangoImage from "./assets/django.svg"

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFire, faUniversalAccess, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { faHtml5, faGithub, faSass, faReact, faJsSquare, faCss3, faFigma, faJira } from '@fortawesome/free-brands-svg-icons'

// faSquareEnvelope

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
        </ul>
    </div>
    <div className="wrapper">
        <h3 className="secondSkillsHeading">Other tools I've worked with</h3>
        <ul className="skills2">
            <li data-aos="flip-left" data-aos-duration="2000" data-aos-anchor-placement="top-bottom">
                <FontAwesomeIcon icon={faFigma} className="icon"></FontAwesomeIcon>
                <p>Figma</p>
            </li>
            <li data-aos="flip-left" data-aos-duration="2000" data-aos-anchor-placement="top-bottom">
                <FontAwesomeIcon icon={faJira} className="icon"></FontAwesomeIcon>
                <p>Jira</p>
            </li>
            <li data-aos="flip-left" data-aos-duration="2000" data-aos-anchor-placement="top-bottom">
                <div >
                    <img className="djangoImg" src={djangoImage} alt="A django language icon"></img>
                </div>
                <p>Django</p>
            </li>
            <li data-aos="flip-left" data-aos-duration="2000" data-aos-anchor-placement="top-bottom">
                <FontAwesomeIcon icon={faEnvelope} className="icon" ></FontAwesomeIcon>
                <p>Email Development</p>
            </li>
        </ul>
    </div>
    </section>
    )
}

export default Skills;



