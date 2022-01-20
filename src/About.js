import image from './cosmetics/heroPhoto.jpg';


const About = () => {
    return (
        <section id="about" className="about">

            <div className="wrapper">
                <div className="heroImgDiv" 
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="400"
                data-aos-easing="ease-out"
                >
                <img src={image} alt="The developer smiling into camera"/>
                </div>
                 
                <div className="aboutContainer">
                    <h3 data-aos="fade-up" data-aos-duration="1200" data-aos-anchor-placement="top-bottom">About Me</h3>
                    <p data-aos="fade-up" data-aos-duration="1200" data-aos-anchor-placement="top-bottom">Hello, my name is Andrew, I’m a Front End Web Developer based in Toronto. I
                    am passionate about creating detailed, efficient and well styled work. I’m also
                    interested in workflow speed (Emmet, SCSS and React) and programming
                    knowledge that saves time. During my studies I worked in agile environments
                    doing paired programming, group projects or working alone. I’m self motivated
                    and dedicated to learning and growing in the industry. Outside of work I play
                    guitar and read sci fi books. I’ve also recorded over 60 songs!
                    Please feel free to contact me! 
                    </p>
                </div>
            </div>
        </section>     
        
    )
}

export default About

