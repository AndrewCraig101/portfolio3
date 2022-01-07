
import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faGithub, faEnvelope, faFile, faGithub, faLinkedin)

function contact() {
    return (
      <div id="contact" className="contactBox">
          <div className="wrapper">
            <h3>Contact</h3>
            <form action="">
              <div className="formBox">
                    <label htmlFor="name" className="sr-only">Enter your name:</label>  
                    <input type="text" name="name" id="name" placeholder="Your Name" required/>
                    <label htmlFor="email" className="sr-only">Enter your Email:</label>              
                    <input type="email" name="name" id="name" placeholder="Your Email" required/>
              </div>
              <label htmlFor="message" className="sr-only">Enter Your Message</label>
              <textarea name="message" id="message" cols="30" rows="15" required placeholder="Let's Connect!"></textarea>
              <button className="submitButton" type="submit">Send</button>
            </form>
          

          <div className="contactIcons">
              <div class="tooltip logo logo1">
                <FontAwesomeIcon icon={faLinkedin} className="icon"/>
                <span class="tooltiptext">LinkedIn</span>
                  <a href="https://www.linkedin.com/in/andrew-craig-6220a5194/">
                    <i class="fab fa-linkedin"></i>
                  </a>
              </div>

              <div class="tooltip logo" role="tooltip">
                <FontAwesomeIcon icon={faEnvelope} className="icon"/>
                <span class="tooltiptext">Email</span>
                  <a href="mailto:andrewcraigweb@gmail.com">
                    <i class="fas fa-envelope"></i>
                  </a>
              </div>

              <div class="tooltip logo">
                <FontAwesomeIcon icon={faFile} className="icon"/>
                <span class="tooltiptext">Resume</span>
                  <a href="./styles/assets/resume.pdf">
                    <i class="fas fa-file"></i>
                  </a>
              </div>

              <div class="tooltip logo">
                <FontAwesomeIcon icon={faGithub} className="icon"></FontAwesomeIcon>
                <span class="tooltiptext">Github</span>
                  <a href="https://github.com/AndrewCraigPortfolio">
                    <i class="fab fa-github-square"></i>
                  </a>
              </div>
          </div>
        </div>
    </div>
  );
}

  export default contact