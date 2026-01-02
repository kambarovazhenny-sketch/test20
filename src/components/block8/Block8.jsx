import React from 'react';
import sofaPhoto from './block8img/tbl.png';
import waveLine from './block8img/Curve.svg';
import starIcon from './block8img/Star.svg'; 
import './block8.css';

const block8 = () => {
  return (
    <section className="get-in-touch-section">
      <div className="get-in-touch-background" />

    
      <div className="contact-info">
        <p className="phone-number">+38 032 297 50 20</p>
        <p className="address">
          8 LYSTOPADOVOHO<br />
          CHYN, LVIV
        </p>
      </div>


      <div className="title-wrapper">
        <h1 className="main-title">
          GET IN
          <span className="star-icon">
            <img src={starIcon} alt="" />
          </span>
          TOUCH
        </h1>

        <div className="sofa-photo">
          <img src={sofaPhoto} alt="Cozy room" className="sofa-img" />
        </div>
      </div>


      <img src={waveLine} alt="" className="wave-line" />


      <div className="booking-wrapper">
        <p className="find-room-text">FIND A ROOM</p>

        <form className="booking-form">
          <div className="input-group">
            <label>CHECK IN</label>
            <input type="text" placeholder="Select date" />
          </div>

          <div className="input-group">
            <label>CHECK OUT</label>
            <input type="text" placeholder="Select date" />
          </div>

          <button type="submit" className="book-room-btn">BOOK ROOM</button>
        </form>
      </div>
    </section>
  );
};

export default block8;