import React from 'react'
import '../stylesheets/ToggleDarckNightMode.css';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function ToggleDarkNightMode({ isChecked, handleChange }) {
  return (
    <div className='container-toggle'>
      <DarkModeSwitch
        checked={isChecked}
        onChange={handleChange}
        size={25}
        moonColor='white'
        sunColor='white'
      />
    </div>
  )
}

export default ToggleDarkNightMode;
