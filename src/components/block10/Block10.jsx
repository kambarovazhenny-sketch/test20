import React from 'react';
import './Block10.css';

import bathtubImg from './block10img/img1.png'  
import sinkImg from    './block10img/img2.png'   
import text from    './block10img/text.png'   
import star from    './block10img/icon.svg'   


const Block10 = () => {
  return (
    <div className="block10">
      
      <div className="badge">
        <img className='badge-star' src={star} alt="" />
       <img className='badge-icon' src={text} alt="" />

      </div>

      <div className="content-grid">
        
        <div className="left-column">
          <img src={bathtubImg} alt="Bathtub in Superior Twin room" className="bathtub-image" />

          <h2 className="room-title">Superior Twin</h2>

          <p className="description left-description">
            All rooms in Bank Hotel have a special charm achieved through a combination of
            modern functional design and original 20th century layout.
          </p>
        </div>

       
        <div className="right-column">
          <img src={sinkImg} alt="Sink area in Superior Twin room" className="sink-image" />

          <p className="description right-description">
           All rooms in Bank Hotel have a special<br />
  charm achieved through a combination of<br />
  modern functional design and original 20th<br />
  century layout.
          </p>
        </div>
      </div>

      
      <div className="book-button-container">
        <button className="book-button10">/ BOOK ROOM</button>
      </div>
    </div>
  );
};

export default Block10;