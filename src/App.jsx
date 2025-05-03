import './App.css'
import SectionAbout from './components/SectionAbout';
import SectionHome from './components/SectionHome';
import SectionSkills from './components/SectionSkills';
import Menu from './components/Menu';
import { useRef, useState } from 'react';

function App() {
  return (
    <>
      <Menu />
      <SectionHome />
      <SectionAbout />
      <SectionSkills />
    </>
  )
}

export default App
