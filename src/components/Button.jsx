import React from 'react'
import '../stylesheets/Button.css';

function Button({ text, link }) {
  return (
    <a href={link}>
      <div className='btn home'>
        {text}
      </div>
    </a>
  )
}

export default Button
