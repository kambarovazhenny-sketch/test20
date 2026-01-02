import React from 'react';
import './Block11.css';

import restaurantLeft from './block11img/img1.png';   
import restaurantRight from './block11img/img2.png';  

const Block11 = () => {
  return (
    <div className="block11">
     
      <h1 className="main-title">
        <span className="quote">“Safe”</span> restaurant
      </h1>

      
      <h2 className="subtitle11">One Of A Kind</h2>

     
      <div className="badge11">
        <span className="badge-text">PREMIUM ROOMS</span>
        <span className="badge-icon11">✺</span>
        <span className="badge-text">BANK HOTEL</span>
      </div>

      
      <p className="description11">
        Bank Hotel proudly welcomes you to the Safe Restaurant – a place where you will wish you could dine every day. 
        The restaurant offers a unique menu developed by the team of professionals led by chef Mary-Ann Jones, 
        the wine list with more than 250 items, the outstanding service, and the unforgettable atmosphere.
      </p>

  

      
      <div className="images-section">
        <div className="image-left11">
          <img src={restaurantLeft} alt="Safe Restaurant main hall" />
        </div>
        <div className="image-right11">
          <img src={restaurantRight} alt="Safe Restaurant lounge area" />
        </div>
      </div>    
      <div className="txt11">
        <h2>At your service</h2>
        <p>
          The team of the Safe Restaurant aims to exceed all <br />
          expectations of our guests. Our chef worked hard to <br />
          develop a unique menu that features the best meals of <br />
          the European cuisine that will match the tastes of the <br />
          most demanding clients. Friendly and attentive waiters <br />
          will ensure that you will enjoy your time in our <br />
          restaurant.
        </p>
        <span>— Mary-Ann Jones, Head Chef</span>
      </div>
    </div>
  );
};

export default Block11;