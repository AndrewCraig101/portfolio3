
import image1 from './assets/p1.png'
import image2 from './assets/p2.png'
import image3 from './assets/p3.png'
import image4 from './assets/p4.png'
import React from 'react';

// import background from "assets/3back.png";

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


const Projects = () => {
return (
    <section id="projects" className="projectSection">

        <div className="wrapper">
            <h3 data-aos="fade-up" data-aos-duration="1200" data-aos-anchor-placement="top-bottom" data-aos-delay="50" >Projects</h3>
            {/* <div className="projectDiv">
                <div className="projectImgBox">
                    <img src={} alt=""/>
                    </div>
                <div className="projectInside">
                    <h4>Tarantino vs Richie</h4>
                    <p>Is Guy Richie the UK Quentin Tarantino? is Tarantino the USA Richie? Find out as we examine both legendary directors. React, SCSS, API's.</p>
                    <p>Collaboration with</p>
                    <div className="buttonBox">
                        <button>Live </button>
                        <button>Git</button>
                    </div>
                </div>
            </div> */}

            <div className="projectDiv one" data-aos="fade-up" data-aos-duration="1200" data-aos-anchor-placement="top-bottom" data-aos-delay="50">
                    <h4>NBA Codestars</h4>
                <div className="projectImgBox">
                    <img src={image3} alt="The website NBACodestars running on a laptop and mobile phone. Three teams and a dropdown menu are displayed"/>
                    </div>
                <div className="projectInside">
                    <p>A database of NBA teams and players. <span>Javascript, JSModules, API and SCSS.</span></p>
                </div>
                <div className="buttonBox">
                    <a href="https://nbscodestars.netlify.app/">Website</a>
                    <a href="https://github.com/AndrewCraigPortfolio/NBACodeStars">Github</a>
                </div>
            </div>
            
            <div className="projectDiv two" data-aos="fade-up" data-aos-duration="1200" data-aos-anchor-placement="top-bottom" data-aos-delay="50"> 
                    <h4>Trivia Time</h4>
                <div className="projectImgBox">
                    <img src={image1} alt="The website Trivia Time running on a laptop and mobile phone. Buttons to choose amount of players and topic are displayed"/>
                    </div>
                <div className="projectInside">
                    <p>Trivia game with timer. <span>React with API and Firebase.</span> Create multiple player avatars and save to a score leaderboard.</p>
                </div>
                <div className="buttonBox">
                    <a href="https://triviatimeac.netlify.app/">Website</a>
                    <a href="https://github.com/AndrewCraigPortfolio/triviaTimeAC">Github</a>
                </div>
            </div>
            
            <div className="projectDiv three" data-aos="fade-up" data-aos-duration="1200" data-aos-anchor-placement="top-bottom" data-aos-delay="50">
                    <h4 className="reversH4">Refrigeration Versification</h4>
                <div className="projectImgBox">
                    <img src={image2} alt="The website Refrigeration Versification running on a laptop and mobile phone. Magnets with word choices are shown"/>
                    </div>
                <div className="projectInside">
                    <p>Inspired by magnetic fridge poetry. Employs <span>drag and drop functionality, form autocomplete from the Datamuse API and Firebase</span>.</p>
                </div>
                <div className="buttonBox">
                    <a href="https://refrigerationversification.netlify.app/">Website</a>
                    <a href="https://github.com/AndrewCraigPortfolio/RefrigerationVersification">Github</a>
                </div>

            </div>
            
            <div className="projectDiv four" data-aos="fade-up" data-aos-duration="1200" data-aos-anchor-placement="top-bottom" data-aos-delay="50">
                    <h4>Oscar Finder</h4>
                <div className="projectImgBox"><img src={image4} alt="The website Oscar Finder running on a laptop and mobile phone. A drop down menu displays year."/></div>
                <div className="projectInside">
                    <p>Draws Oscar winners by year from <span>JSON data inside Firebase</span></p>
                </div>
                <div className="buttonBox">
                        <a href="https://oscarfinder.netlify.app/">Website</a>
                        <a href="https://github.com/AndrewCraigPortfolio/OscarFinder">Github</a>
                </div>
            </div>
        </div>
        {/* <div className="projectDiv even">
            <div className="projectImgBox">
                <img src={} alt=""/>
                </div>
            <div className="projectInside">
                <h4>Cage Finder</h4>
                <p>Looking for romance? Treat yourself with the Cage Finder website. CSS/HTML, API and Javascript</p>
                <p>Solo Project</p>
                <div>
                <a href="https://cagefinder.netlify.app/">Live Site</a>
                <a href="https://github.com/AndrewCraigPortfolio/cageFinder">Github</a>
                </div>
            </div>
        </div> */}
    </section>
)
}

export default Projects;



