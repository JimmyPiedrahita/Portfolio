import React, { forwardRef } from 'react'
import '../stylesheets/SectionAbout.css';

const SectionAbout = forwardRef((props, ref) => {
  return (
    <div id='about' className='section-about' ref={ref}>

    </div>
  );
});

export default SectionAbout;
