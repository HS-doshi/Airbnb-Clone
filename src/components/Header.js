import React from 'react'
import logo from '../assets/airbnb.png'
import globe from '../assets/globe.png'
import menu from '../assets/menu.png'
import profile from '../assets/round.png'
const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt="logo"/>
      <div>
        <p>Airbnb your home</p>
        <img src={globe} alt="globe"/>
        <div>
            <img src={menu} alt="menu"/>
            <img src={profile} alt="profile"/>
        </div>
      </div>
      <img className='leftArr' src='https://cdn-icons-png.flaticon.com/512/2985/2985161.png' alt='leftArr'/>
    </div>
  )
}

export default Header
