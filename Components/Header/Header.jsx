import React from 'react';
import './Header.css';
import search from '../../assets/serach.png'

const Header = () => {
  return (
    <>
    <header className="header">
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#package">Package</a></li>
          <li><a href="#destination">Destination</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="search-icon">
          <img src={search} alt="search" />
        </div>
      </nav>
      <div className="hero-section">
        <h1>Mastering Your <br/>Journey</h1>
        <p>
          Let us help you explore the world's wonders in a way that <br/> speaks to your heart. Your perfect journey starts here.
        </p>
        <p className="popular-places">
          Popular Place: Bali, Istanbul, Rome, Paris.
        </p>
      </div>
    </header></>
  );
};

export default Header;
