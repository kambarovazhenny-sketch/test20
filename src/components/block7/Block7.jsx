import React from 'react';
import centralLobby from './block7img/3.png';
import topLeft from '../block7/block7img/1.png'; 
import topRight from './block7img/4.png';
import bottomLeft from './block7img/2.png'; 
import bottomRight from './block7img/5.png'; 
import badge from './block7img/label.svg';
import './block7.css';

const block7 = () => {
  return (
    <div className="gallery-section">  <p className="gallery-subtitle">ART & CONGRESS <br />
        HALL</p>


      <div className="gallery-header">
      
  <div className="gallery-badge">
          <img src={badge} alt="Premium Rooms Bank Hotel" className="badge-img" />
        </div>

        <h1 className="gallery-title">OUR GALLERY</h1>

     
      
      </div>

       <p className="gallery-description">
        Explore our spacious rooms with the gorgeous view to the historical part of the city. Each room has an exclusive interior design decorated with modern art pieces that will make your stay unforgettable.
      </p>

     
      <div className="top-images">
        <img src={topLeft} alt="" className="top-left" />
        <img src={topRight} alt="" className="top-right" />
      </div>

     
      <div className="central-image">
        <img src={centralLobby} alt="Lobby with fireplace" className="central-img" />
      </div>

 
      <div className="bottom-images">
        <img src={bottomLeft} alt="" className="bottom-left" />
        <img src={bottomRight} alt="" className="bottom-right" />
      </div>

      <p className="gallery-bottom-text">
        <span className="yellow-dot"></span>
        It is our pleasure to meet your most unrealistic expectations.
      </p>

 <div className="watermark">Bank hotel Bank hotel Bank hotel Bank hotel</div>
    </div>
  );
};

export default block7;