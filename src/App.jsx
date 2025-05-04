import './App.css'
import SectionAbout from './components/SectionAbout';
import SectionHome from './components/SectionHome';
import SectionSkills from './components/SectionSkills';
import Menu from './components/Menu';
import { useRef, useState, useEffect } from 'react';

function App() {

  const [activeSection, setActiveSection] = useState('home');
  const sectionsRef = useRef([]);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Menu activeSection={activeSection}/>
      <SectionHome ref={addToRefs} />
      <SectionAbout ref={addToRefs} />
      <SectionSkills ref={addToRefs} />
    </>
  )
}

export default App
