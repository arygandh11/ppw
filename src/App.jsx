import CustomCursor from './components/layout/CustomCursor';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import Experience from './components/sections/Experience';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Resume from './components/sections/Resume';

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Certifications />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
