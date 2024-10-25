import React from 'react'
import './NavbarSection.css'

export default function NavbarSection() {
  return (
        <div className='navbar-section-d'>
            <div className='navbar-section-d-logo'><img src="/Images/botmindz.svg"/></div>
            <div className='navbar-section-d-menu'>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Services</a></li>
                    <li><a href='#'>Conact Us</a></li>
                    <li><a href='#'>Plan</a></li>
                </ul>
            </div>
                   <div className='navbar-btn'>
                    <button>Contact Us</button>
                   </div>
            </div>
  )
}
