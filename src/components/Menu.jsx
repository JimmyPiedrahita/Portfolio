import React, { useState } from 'react'
import '../stylesheets/Menu.css';
import Button from './Button';
import { DarkModeSwitch } from 'react-toggle-dark-mode';


function Menu({ activeSection }) {

  const [isNightMode, setIsNightMode] = useState(false);

  const toggleMode = () => {
    setIsNightMode(!isNightMode);
  }

  return (
    <div className='container-menu'>
      <div className='menu'>
        <Button text='Home' link='home' activeSection={activeSection} />
        <Button text='About' link='about' activeSection={activeSection} />
        <Button text='Skills' link='skills' activeSection={activeSection} />
        <Button text='Works' link='works' activeSection={activeSection} />
        <Button text='Contact' link='contact' activeSection={activeSection} />
        <DarkModeSwitch
          checked={!isNightMode}
          onChange={toggleMode}
          size={25}
          moonColor='black'
        />
      </div>
    </div>
  )
}

export default Menu
