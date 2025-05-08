import React from 'react'
import '../stylesheets/Menu.css';
import Button from './Button';
import ToggleDarkNightMode from './ToggleDarkLightMode';

function Menu({ activeSection, isChecked, handleChange }) {
  return (
    <div className='container-menu'>
      <div className='menu'>
        <Button text='Home' link='home' activeSection={activeSection} />
        <Button text='About' link='about' activeSection={activeSection} />
        <Button text='Skills' link='skills' activeSection={activeSection} />
        <Button text='Works' link='works' activeSection={activeSection} />
        <Button text='Contact' link='contact' activeSection={activeSection} />
        <ToggleDarkNightMode 
          isChecked={isChecked}
          handleChange={handleChange}
        />
      </div>
    </div>
  )
}

export default Menu
