import React from 'react'
import './navber.css'
import logo from '../../assets/logo.png'

const navber = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo' />
        <ul>
            <li>Home</li>
            <li>program</li>
            <li>About us</li>
            <li>Campus</li>
            <li>Testimonils</li>
            <li><button className='btn'>Contact us</button></li>
        </ul>
    </nav>
  )
}

export default navber