
import React from 'react';
import image from './assets/1.jpeg'

import { library } from '@fortawesome/fontawesome-svg-core';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { fab, faGithub, faSass, faReact, faJsSquare, faCss3 } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faGithub, faSpinner, faSass, faReact, faJsSquare, faCss3)


const Header = () => {
    return (
        <header>
            {/* <div id="loader" class="loadingContainer">
                <FontAwesomeIcon icon={faSpinner} className="loader" ></FontAwesomeIcon>
            </div> */}

            <div className="wrapper">
                <nav>
                    <ul 
                    data-aos="fade-left"
                    data-aos-duration="1300"
                    data-aos-delay="300"
                    data-aos-easing="ease-out"
                    >
                        <li><a href="#about" className="nombore"><span class="sr-only">About</span><span>About</span><span className="slider"></span></a></li>
                        <li><a href="#projects" className="nombore"><span class="sr-only">Projects</span><span>Projects</span><span className="slider"></span></a></li>
                        <li><a href="#skills" className="nombore"><span class="sr-only">Skills</span><span>Skills</span><span className="slider"></span></a></li>
                        <li><a href="#contact" className="nombore"><span class="sr-only">Contact</span><span>Contact</span><span className="slider"></span></a></li>
                    </ul>
                </nav>
                <div className="heroImgDiv" 
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="400"
                data-aos-easing="ease-out"
                >
                    <img src={image} alt="Andrew Craig, Front End Web Developer"/>
                </div>
                <h1>Andrew Craig</h1>
                <h2>Front End Web Developer</h2>
            </div>
        </header>
    )
}

export default Header
