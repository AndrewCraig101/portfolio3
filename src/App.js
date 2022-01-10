import './scss/styles.scss';

import Header from './Header.js';
import About from './About.js';
import Projects from './Projects.js';
import Skills from './Skills.js';
import Contact from './Contact.js';
import Footer from './Footer.js';

import './sass/app.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
