import React from 'react';
import './Header.css'; // Import CSS

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Starbugs</div>
      <nav>
        <ul>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
