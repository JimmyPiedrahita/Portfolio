import React from 'react'
import '../stylesheets/Menu.css';
import Button from './Button';

function Menu() {
  return (
    <div className='container-menu'>
      <div className='menu'>
        <Button text='Home' link='#home'/>
        <Button text='About' link='#about'/>
        <Button text='Skills' link='#skills'/>
        <Button text='Works' link='#works'/>
        <Button text='Contact' link='#contact'/>
      </div>
    </div>
  )
}

export default Menu
