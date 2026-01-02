import React from 'react';
import badgePhoto from '../block4/block4img/image1.png'; 
import smallBar from '../block4/block4img/image2.png'; 
import iceRestaurant from '../block4/block4img/holl.png'; 
import downArrow from '../../assets/next.png'; 
import txt from '../block4/block4img/txt.png'; 
import sss from '../block4/block4img/sss.png'; 
import prem from '../block4/block4img/prem.png';
import star from '../../assets/Star.png';
import './block4.css';

const block4 = () => {
  return (
    <div className="facilities-section">
 
    <img src={sss} alt="" />
     
      <div className="facilities-header">
        <img className='our' src={txt} alt="" />
          <img className='prem' src={prem} alt="" />
          <img src={badgePhoto} alt="Premium Hotel" className="badge-photo" />
           <img className='star' src={star} alt="" />
      </div>

      
      <div className="top-description-wrapper">
        <div className="small-bar-photo">
          <img src={smallBar} alt="Bar" className="small-bar-img" />
        </div>

        <p className="facilities-description">
          Bank Hotel offers you a wide range of <br />
          additional services and facilities. Visit our <br />
          restaurant to try exclusive meals, book a <br /> 
          conference hall to organize a business <br /> 
          meeting, or relax in the art bar.
        </p>
      </div>

     
      <div className="facility-slide">
        <div className="slide-number">01</div>

        <div className="facility-info">
          <h2 className="facility-name">Ice Restaurant</h2>
          <p className="facility-desc">
            The hotel's exclusive restaurant is complemented by the unique atmosphere of the 'Ice' Restaurant. 
            Author's menu, exclusive wine card, and fine music will not leave you indifferent.
          </p>
        </div>

        <div className="facility-photo">
          <img src={iceRestaurant} alt="Ice Restaurant" className="facility-large" />
        </div>

       
        <div className="down-arrow-button">
          <img src={downArrow} alt="Next" />
        </div>
      </div>
    </div>
  );
};

export default block4;