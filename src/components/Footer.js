// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">

        {/* About Section */}
        <div className="footer-col about">
          <div className="footer-logo">BOXCARS</div>
          <p>
            BOXCARS is your premier destination for finding the perfect car. 
            We offer a vast selection of new and used vehicles, along with financing options and exceptional customer service.
          </p>
          <div className="footer-contact-info">
            <p><i className="fas fa-map-marker-alt"></i> jln Joyo nganto, jawa timur Indonesia</p>
            <p><i className="fas fa-phone-alt"></i> +62 867-876-986</p>
            <p><i className="fas fa-envelope"></i> info@Showfass.com</p>
          </div>
          <div className="social-icons">
            <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#twitter"><i className="fab fa-twitter"></i></a>
            <a href="#instagram"><i className="fab fa-instagram"></i></a>
            <a href="#linkedin"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#inventory">Inventory</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        {/* Brands */}
        <div className="footer-col brands">
          <h3>Our Brands</h3>
          <ul>
            
          </ul>
        </div>

        {/* Vehicle Types */}
        <div className="footer-col vehicles">
          <h3>Vehicle Types</h3>
          <ul>
            
          </ul>
        </div>

        {/* Mobile App and Newsletter */}
        <div className="footer-col app">
          <h3>Aplikas kami</h3>
          <p>Saat ini belum tersedia via aplikasi</p>
          <div className="app-badges">
            <a href="#app-store">
              <img
                src={process.env.PUBLIC_URL + 'https://img.favpng.com/18/23/8/app-store-apple-download-logo-png-favpng-2BMS9KidgmX2fHMtAhjpVHway.jpg'}
                alt="App Store"
              />
            </a>
            <a href="#google-play">
              <img
                src={process.env.PUBLIC_URL + 'https://freelogopng.com/images/all_img/1664287128google-play-store-logo-png.png'}
                alt="Google Play"
              />
            </a>
          </div>

          <h3>Connect With Us</h3>
          <form className="newsletter-form">
            <input type="email" placeholder="Your Email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2025 Showfass. All rights reserved.</p>
        <p>
          <a href="#privacy">Privacy Policy</a> |{" "}
          <a href="#terms">Terms of Service</a> |{" "}
          <a href="#sitemap">Sitemap</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
