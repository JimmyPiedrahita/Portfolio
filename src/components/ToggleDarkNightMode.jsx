import React, { useState } from 'react'
import '../stylesheets/ToggleDarckNightMode.css';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function ToggleDarkNightMode() {

  const [ isNightMode, setIsNightMode ] = useState(false);

  const changeToggleMode = () => {
    setIsNightMode(!isNightMode);
  }

  return (
    <div className='container-toggle'>
      <DarkModeSwitch
        checked={!isNightMode}
        onChange={changeToggleMode}
        size={25}
        moonColor='white'
        sunColor='white'
      />
    </div>
  )
}

export default ToggleDarkNightMode
