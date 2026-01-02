import React from 'react';
import './block12.css';

import restaurantSmall from './block12img/image1.png';  
import restaurantLarge from './block12img/image2.png';     

const Block12 = () => {
  return (
    <div className="block12">

      <h1 className="main-title12">
        Once you try our cuisine and service, you<br />
        shall never want to visit another restaurant.
      </h1>

      <div className="content-container12">
   
        <div className="left-side12">
          <img src={restaurantSmall} alt="Safe Restaurant interior" className="small-image12" />

          <p className="eco-text12">
            ALL ROOM DECORATION WAS<br />
            MADE WITH ECOLOGICAL<br />
            CERTIFIED AND SAFE MATERIALS.
          </p>
        </div>

        <div className="right-side12">
          <img src={restaurantLarge} alt="Safe Restaurant bar area" className="large-image12" />

          <div className="bottom-text12">
            <h2>Spend Your Time<br />With Us</h2>
            <p>
              If you are looking for an exclusive place to have a<br />
              romantic dinner, organize a business meeting, or<br />
              spend an enjoyable evening with friends, visit Safe<br />
              Restaurant in Bank Hotel. With our delicious meals,<br />
              unique interior design, and atmosphere of comfort and<br />
              exquisiteness you shall never want to go to a different<br />
              restaurant.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block12;