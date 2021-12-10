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
        <section className="projectSection">

            <h3>Projects</h3>

            {/* <div className="projectDiv">
                <div className="projectImgBox">
                    <img src={} alt=""/>
                    </div>
                <div className="projectInside">
                    <h4>Tarantino vs Richie</h4>
                    <p>Is Guy Richie the UK Quentin Tarantino? is Tarantino the USA Richie? Find out as we examine both legendary directors. React, SCSS, API's.</p>
                    <p>Collaboration with</p>
                    <div>
                        <button>Live </button>
                        <button>Git</button>
                    </div>
                </div>
            </div> */}

            <div className="projectDiv">
                    <h4>NBA Codestars</h4>
                <div className="projectImgBox">
                    <img src={image3} alt=""/>
                    </div>
                <div className="projectInside">
                    <p>A database of NBA teams and players. Javascript, JSModules, API and SCSS.</p>
                    <p>Collaboration with</p>
                    <div>
                        <button>Live Site</button>
                        <button>Github</button>
                    </div>
                </div>
            </div>

            <div className="projectDiv">
                    <h4>Trivia Time</h4>
                <div className="projectImgBox">
                    <img src={image1} alt=""/>
                    </div>
                <div className="projectInside">
                    <p>Trivia game with timer. React with API and Firebase. Create multiple player avatars and save to a score leaderboard</p>
                    <p>Collaboration with</p>
                    <div>
                        <button>Live </button>
                        <button>Git</button>
                    </div>
                </div>
            </div>

            <div className="projectDiv">
                    <h4>Refrigeration Versification</h4>
                <div className="projectImgBox">
                    <img src={image2} alt=""/>
                    </div>
                <div className="projectInside">
                    <p>Inspired by magnetic fridge poetry. Employs drag and drop functionality, form autocomplete from the Datamuse API and Firebase.</p>
                    <p>Collaboration with</p>
                    <div>
                        <button>Live</button>
                        <button>Git</button>
                    </div>
                </div>
            </div>

            <div className="projectDiv">
                    <h4>Oscar Finder</h4>
                <div className="projectImgBox"><img src={image4} alt=""/></div>
                <div className="projectInside">
                    <p>Draws Oscar winners by year from JSON data inside Firebase.</p>
                    <p>Collaboration with</p>
                    <div>
                        <button>Live</button>
                        <button>Git</button>
                    </div>
                </div>
            </div>
        </section>
    )
  }
  
  export default Projects;
