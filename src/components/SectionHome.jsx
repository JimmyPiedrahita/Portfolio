import React, { forwardRef } from 'react';
import '../stylesheets/SectionHome.css';
import Hero from '../assets/img/img-hero.png';
import TypeWriterEffect from './TypeWriterEffect';

const SectionHome = forwardRef((props, ref) => {
  return (
    <div id='home' className='section-home' ref={ref}>
      <div className='container-hero'>
        <div className='hero'>
          <div className='texts'>
            <div className='text-greeting'>Hello, I'm</div>
            <h1>Jimmy<br />Piedrahita</h1>
            <TypeWriterEffect
              text='SOFTWARE DEVELOPER'
              speed={80}
              cursor={true}
            />
          </div>
          <img src={Hero} alt="Jimmy Piedrahita, Software developer" />
        </div>
      </div>
    </div>
  );
});

export default SectionHome;