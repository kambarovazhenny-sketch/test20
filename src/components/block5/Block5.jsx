import React from 'react';
import conferenceHall from '../block5/block5img/Hall.png'; 
import wineBar from '../block5/block5img/wineBar.png';
import arrowRight from '../block5/block5img/arrow.svg';
import './block5.css';

const block5 = () => {
  return (
    <div className="facilities-list-section">
 
      <div className="facility-item">
        <div className="facility-image">
          <img src={conferenceHall} alt="Conference Hall" className="facility-small-img" />
        </div>

        <div className="facility-text">
          <span className="facility-number">02</span>
          <h3 className="facility-title">Conference Hall</h3>
        </div>

        <div className="facility-arrow">
          <img src={arrowRight} alt="Next" className="arrow-right" />
        </div>
      </div>

      <hr className="facility-divider" />

      <div className="facility-item">
        <div className="facility-image">
          <img src={wineBar} alt="Wine Bar Reserve" className="facility-small-img" />
        </div>

        <div className="facility-text">
          <span className="facility-number">03</span>
          <h3 className="facility-title">Wine Bar “Reserve”</h3>
        </div>

        <div className="facility-arrow">
          <img src={arrowRight} alt="Next" className="arrow-right" />
        </div>
      </div>

      <hr className="facility-divider" />


    </div>
  );
};

export default block5;