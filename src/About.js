import image from './cosmetics/heroPhoto.png';

// import image6 from './cosmetics/mail.png';


const About = () => {
    return (
        <section id="about" className="about">

            <div className="wrapper" 
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="400"
                data-aos-easing="ease-out">

                <div className="heroImgDiv">
                    <img src={image} alt="The developer smiling into camera"/>
                </div>

                 {/* <div className="heroImgDiv"  styles={{ backgroundImage:`url(${image})` }}>
                </div> */}

                {/* <div className="heroImgDiv">
                </div> */}
                 
                <div className="aboutContainer">
                    <h3>About Me</h3>
                    <p>Hello, my name is Andrew, I’m a Front End Web Developer based in Toronto. I am passionate about creating detailed, efficient and well styled work that is accessible and responsive. I’m also interested in workflow speed (Emmet, SCSS and React) and programming knowledge that saves time. I mainly work in agile environments doing paired programming, group projects or working alone. I’m self motivated and dedicated to learning and growing in the industry. Outside of work I play guitar and read sci fi books. I’ve also recorded over 60 songs! Please feel free to <a href="#contact">contact me!</a> 
                    </p>
                </div>
            </div>
        </section>     
        
    )
}

export default About

