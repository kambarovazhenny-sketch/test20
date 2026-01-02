import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        
        <div className="footer-column about-column">
          <h3 className="column-title">ABOUT US</h3>
          <p className="column-text">
            The five-star hotel in a beautiful European city with a modern restaurant, conference-hall, and art-bar.
          </p>
        </div>

       
        <div className="footer-column news-column">
          <h3 className="column-title news-title">NEWS</h3>
          <p className="column-text">
            Sign up to our newsletter not to miss exclusive offers and information about the upcoming events.
          </p>
        </div>

        
        <div className="footer-column social-column">
          <h3 className="column-title">SOCIAL</h3>
          <div className="social-links">
            <a href="#" className="social-link">FACEBOOK</a>
            <a href="#" className="social-link">INSTAGRAM</a>
            <a href="#" className="social-link">TWITTER</a>
          </div>
        </div>
      </div>

     
      <div className="newsletter-form-wrapper">
        <form className="newsletter-form">
          <input type="email" placeholder="EMAIL" className="email-input" />
          <button type="submit" className="submit-arrow">
            <span>→</span>
          </button>
        </form>
      </div>

      
      <div className="copyright">
        ©2021 All rights reserved. Bankhotel
      </div>
    </footer>
  );
};

export default Footer;