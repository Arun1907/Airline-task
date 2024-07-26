import React from 'react';
import './Footer.css';
import footerbac from '../../assets/footbac.png';
import locationIcon from '../../assets/location.png';
import phoneIcon from '../../assets/phone.png';
import mailIcon from '../../assets/mail.png';
import facebookIcon from '../../assets/facebook.png';
import twitterIcon from '../../assets/twitter.png';
import instagramIcon from '../../assets/instagram.png';
import youtubeIcon from '../../assets/youtube.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-subscribe" style={{ backgroundImage: `url(${footerbac})` }}>
        <h2>Subscribe to get special price</h2>
        <p>Dont wanna miss something? subscribe right now and get special <br/> promotion and monthly newsletter</p>
        <div className="subscribe-form">
          <input type="email" placeholder="Type your email here" />
          <button type="button">Subscribe</button>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-section footer-contact">
          <h3>Contact Information</h3>
          <p><img src={locationIcon} alt="Location" /> 732 Despard St, Atlanta</p>
          <p><img src={phoneIcon} alt="Phone" /> +97 888 8888</p>
          <p><img src={mailIcon} alt="Email" /> Info@traveller.com</p>
        </div>
        <div className="footer-section footer-links">
          <h3>Quick Link</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Tours</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section footer-social">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
            <a href="#"><img src={twitterIcon} alt="Twitter" /></a>
            <a href="#"><img src={youtubeIcon} alt="YouTube" /></a>
            <a href="#"><img src={instagramIcon} alt="Instagram" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
