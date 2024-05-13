import React, { useEffect, useState } from 'react'
import './navber.css'
import logo from '../../assets/logo.png'

const navber = () => {

  const [sticky, setsticky] = useState(false)

  useEffect(()=> {
    window.addEventListener('scroll', ()=> {
      window.scrollY > 690 ? setsticky(true) : setsticky(false);
    })
  },[])

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
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