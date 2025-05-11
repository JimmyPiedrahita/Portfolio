import './App.css'
import SectionAbout from './components/SectionAbout';
import SectionHome from './components/SectionHome';
import SectionSkills from './components/SectionSkills';
import useLocalStorage from 'use-local-storage';
import Noise from './components/Noise';
import Menu from './components/Menu';
import { useRef, useState, useEffect } from 'react';

function App() {

  const [activeSection, setActiveSection] = useState('home');
  const sectionsRef = useRef([]);

  const preference = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDarkMode, setIsDarkMode] = useLocalStorage('isDarkMode', preference);

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
    <div className='App' data-theme={isDarkMode ? 'dark' : 'light'}>
      <Noise />
      <Menu 
        activeSection={activeSection}
        isChecked={!isDarkMode}
        handleChange={() => setIsDarkMode(!isDarkMode)}
      />
      <SectionHome ref={addToRefs} />
      <SectionAbout ref={addToRefs} />
      <SectionSkills ref={addToRefs} />
    </div>
  )
}

export default App
