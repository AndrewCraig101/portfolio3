import './scss/styles.scss';

import Header from './Header.js';
import About from './About.js';
import Projects from './Projects.js';
import Skills from './Skills.js';
import Contactform from './Contactform.js'
import Contactlinks from './Contactlinks.js';
import Footer from './Footer.js';
// import Spinner from './Spinner.js';


import './sass/app.scss';
import 'aos/dist/aos.css'; 

function App() {
  return (
    <>
    {/* <Spinner /> */}
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <div className="contactSection" id="contact">
          <Contactform />
          <Contactlinks />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
