// Projects.js
// Projects.js
// Projects.js

import image1 from './assets/p1.jpg'
import image2 from './assets/p2.jpg'
import image3 from './assets/p3.jpg'
import image4 from './assets/p4.jpg'
import React from 'react';


const Projects = () => {
return (
    <section id="#projects" className="projectSection">

        <div className="wrapper">
            <h3>Projects</h3>
            {/* <div className="projectDiv odd">
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
            <div className="projectDiv even">
                    <h4>NBA Codestars</h4>
                <div className="projectImgBox">
                    <img src={image3} alt=""/>
                    </div>
                <div className="projectInside">
                    <p>A database of NBA teams and players. <span>Javascript, JSModules, API and SCSS.</span></p>
                    {/* <p>Collaboration with <a href=""></a></p> */}
                </div>
                <div className="buttonBox">
                    <a href="https://nbacodestarsac.netlify.app/">Website</a>
                    <a href="https://github.com/AndrewCraigPortfolio/NBACodeStars">Github</a>
                </div>
            </div>
            <div className="projectDiv odd">
                    <h4>Trivia Time</h4>
                <div className="projectImgBox">
                    <img src={image1} alt=""/>
                    </div>
                <div className="projectInside">
                    <p>Trivia game with timer. <span>React with API and Firebase.</span> Create multiple player avatars and save to a score leaderboard.</p>
                    {/* <p>Collaboration with <a href=""></a>, <a href=""></a> and <a href=""></a></p> */}
                </div>
                <div className="buttonBox">
                    <a href="https://triviatimeac.netlify.app/">Website</a>
                    <a href="https://github.com/AndrewCraigPortfolio/triviaTimeAC">Github</a>
                </div>
            </div>
            <div className="projectDiv even">
                    <h4 className="reversH4">Refrigeration Versification</h4>
                <div className="projectImgBox">
                    <img src={image2} alt=""/>
                    </div>
                <div className="projectInside">
                    <p>Inspired by magnetic fridge poetry. Employs <span>drag and drop functionality, form autocomplete from the Datamuse API and Firebase</span>.</p>
                    {/* <p>Collaboration with <a href="">, </a><a href="">, </a><a href=""> and </a></p> */}
                </div>
                <div className="buttonBox">
                    <a href="https://refrigerationversification.netlify.app/">Website</a>
                    <a href="https://github.com/AndrewCraigPortfolio/RefrigerationVersification">Github</a>
                </div>

            </div>
            <div className="projectDiv odd">
                    <h4>Oscar Finder</h4>
                <div className="projectImgBox"><img src={image4} alt=""/></div>
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
