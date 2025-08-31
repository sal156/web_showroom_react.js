import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

function Header() {
  const [hideHeader, setHideHeader] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > prevScrollY && currentY > 80) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
      setPrevScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  return (
    <div className="header-container">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/videos/jum.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Header content */}
      <header className={`header ${hideHeader ? 'hide' : ''}`}>
  <div className="logo">Showfas</div>

  <nav className="nav-menu">
    <ul>
      <li><a href="#home">Home</a></li>
      <li className="dropdown">
        <a href="#listings">Listings <span className="arrow-down"></span></a>
        <div className="dropdown-content">
          <a href="#cars">Cars</a>
          <a href="#motorcycles">Motorcycles</a>
        </div>
      </li>
      <li><a href="#blog">Blog</a></li>
      <li><a href="#pages">Pages</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <div className="auth-buttons">
    <a href="#signup" className="sign-in-link">
      <i className="fas fa-user"></i> Sign in
    </a>
    <button className="login-btn">Login</button>
  </div>
</header>

    </div>
  );
}

export default Header;
