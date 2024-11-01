import React, { useState } from 'react';
import './NavbarSection.css';

export default function NavbarSection() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleToggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`navbar-section-d ${darkMode ? 'dark' : ''}`}>
      <div className="navbar-section-d-logo">
        <img src="/Images/botmindz.svg" alt="Logo" />
      </div>

      <div className={`left-part-d-nav ${toggleMenu ? 'active' : ''}`}>
        <div className="navbar-section-d-menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Plan</a></li>
          </ul>
        </div>
        <div className="navbar-btn-d">
          <button onClick={handleToggleMode}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
      <button className="toggle-button" onClick={handleToggleMenu}>
        ☰
      </button>
    </div>
  );
}


