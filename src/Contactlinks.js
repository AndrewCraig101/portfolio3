
import React from 'react';

import image2 from './assets/resume.pdf';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faGithub, faEnvelope, faFile, faGithub, faLinkedin)

function contactlinks() {
    return (
      <div id="contact" className="contactLinkBox">
          <div className="wrapper">
            

            <div className="contactIcons">
                    <a href="https://www.linkedin.com/in/andrew-craig-6220a5194/">
                <div className="tooltip logo logo1" data-aos="flip-left" data-aos-duration="3000" data-aos-anchor-placement="top-bottom">
                  <FontAwesomeIcon icon={faLinkedin} className="icon" />
                  <span className="tooltiptext">LinkedIn</span>
                      <i className="fab fa-linkedin"></i>
                </div>
                    </a>

                    <a href="mailto:info@andrewcraigdev.com">
                <div className="tooltip logo" role="tooltip" data-aos="flip-left" data-aos-duration="3000" data-aos-anchor-placement="top-bottom">
                  <FontAwesomeIcon icon={faEnvelope} className="icon" />
                  <span className="tooltiptext">Email</span>
                      <i className="fas fa-envelope"></i>
                </div>
                    </a>

                    <a href={image2}>
                <div className="tooltip logo" data-aos="flip-left" data-aos-duration="3000" data-aos-anchor-placement="top-bottom">
                  <FontAwesomeIcon icon={faFile} className="icon" />
                  <span className="tooltiptext">Resume</span>
                      <i className="fas fa-file"></i>
                </div>
                    </a>

                    <a href="https://github.com/AndrewCraig101">
                <div className="tooltip logo" data-aos="flip-left" data-aos-duration="3000" data-aos-anchor-placement="top-bottom">
                  <FontAwesomeIcon icon={faGithub} className="icon" ></FontAwesomeIcon>
                  <span className="tooltiptext">Github</span>
                      <i className="fab fa-github-square"></i>
                </div>
                    </a>
            </div>
        </div>
    </div>
  );
}

  export default contactlinks




  