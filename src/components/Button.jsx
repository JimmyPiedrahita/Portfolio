import React from 'react'
import '../stylesheets/Button.css';

function Button({ text, link, activeSection }) {
  return (
    <a href={`#${link}`}>
      <div className={`btn ${activeSection === link ? 'active' : ''}`}>
        {text}
      </div>
    </a>
  )
}

export default Button
