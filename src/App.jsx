import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contacts from './sections/Contacts';
import Experience from './sections/Experience';

function App() {
  useEffect(() => {
    // Always scroll to home on page refresh
    window.location.hash = '#home';

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (let section of sections) {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
          const id = section.getAttribute('id');
          if (window.location.hash !== `#${id}`) {
            history.replaceState(null, '', `#${id}`);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // trigger once on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#0a192f] text-white min-h-screen font-sans">
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contacts">
        <Contacts />
      </section>
    </div>
  );
}

export default App;
