import './hero.css';
 import Star from '../../assets/Star.png';
 import Logo from '../../assets/BankHotel.png';
 import ButtonImg from '../../assets/Button.png';

 function Hero() {
  return (
    <div className="hero">
      <div className="hero-top">
        <div>
          <img width={600}div src={Logo} alt="" />
          <div className="hero-sub">
            ROOMS // RESTAURANT // CONGRESS HALL // WINE BAR
          </div>
        </div>

        <div className="hero-info">
          <div className="since">
            
            <img width={30} src={Star} alt="" />
            <p> Since 1973</p>
            </div>
          <p>
            The luxurious hotel in the most beautiful <br /> European city with an
            exclusive restaurant,<br /> conference hall, and art-bar.
          </p>
          <img className='button' src={ButtonImg} alt="" />
        </div>
      </div>

      <div className="booking">
        <div>CHECK IN</div>
        <div>CHECK OUT</div>
        <div>BOOK ROOM</div>
      </div>

      <div className="hero-image"></div>
    </div>
  );
}
export default Hero;