import React, { forwardRef } from 'react'
import '../stylesheets/SectionAbout.css';
import Button from './Button';

const SectionAbout = forwardRef((props, ref) => {
  return (
    <div id='about' className='section-about' ref={ref}>
      <h1>About me</h1>
      <p>Colombian software developer. I'm passionate about creating cool interfaces,
        mobile apps and websites that look and work great. I'm a fast learner, I work well
        in a team and I always bet on projects that break the mold.</p>
      <button className='btn-download'>Download CV</button>
    </div>
  );
});

export default SectionAbout;
