import React from 'react';
import './block9.css';

const Block9 = () => {
  return (
    <div className="block9-wrapper">
      
      <section className="superior-twin-section">
        <div className="hero-section">
          <div className="hero-overlay"></div>
          <h1 className="page-title">Superior<br />Twin</h1>
          <p className="eco-subtitle">
            ALL ROOM DECORATION WAS<br />
            MADE WITH ECOLOGICAL<br />
            CERTIFIED AND SAFE MATERIALS
          </p>
          <button className="book-button">Book room</button>
        </div>

        <div className="info-section">
          <div className="since-badge">
            <span>★ Since 1973</span>
          </div>

          <div className="content-wrapper">
            <h2 className="unique-design-text">
              All suites have a unique design<br />
              because we want our every guest<br />
              to feel special.
            </h2>

            <p className="room-description-b9">
              The Superior twin would perfectly match<br />
              the needs of those who plan to stay long.<br />
              The bright and airy room is equipped with<br />
              superior soft Italian furniture. Large<br />
              windows open a beautiful view to the<br />
              historical part of the city. Contemporary<br />
              interior design and comfortable beds will<br />
              make your stay cozy and delightful.
            </p>
          </div>
        </div>
      </section>

      
      <section className="premier-standard-section">
        <div className="wave-top"></div>

        <h1 className="page-title-9">Premier Standard</h1>

        <div className="room-image-container">
          <div className="room-image-b9"></div>
        </div>

        <div className="wave-bottom"></div>
      </section>
    </div>
  );
};

export default Block9;