import '../block2/block2.css'; 
import AboutUsImg from '../../assets/AboutUs.png'; 
import tableImg from '../../assets/table.png';
import labelImg from '../../assets/label.png'; 
import scrollImg from '../../assets/scroll.png'; 
import img1 from '../../assets/img.png'; 

function block2() {
    return (
<div className="about-us-container">
     
      <div className="background-overlay" />


      <div className="content-wrapper">
      
        <div className="left-image">
          <img 
            src={img1} 
            alt=""
            className="reception-photo"
          />
        </div>

   
        <div className="center-content">
       
          <div className="about-us-title">
            <img 
              src={AboutUsImg} 
              alt=""
              className="about-us-image"
            />
          </div>

          <h2 className="subtitle">High Quality</h2>

          <p className="description">
            The five-star Bank Hotel was reopened to visitors in 2016. 
            The Building was renovated and modernized to meet the expectations 
            of the most demanding guests. We offer luxurious rooms, numerous facilities, 
            and exceptional service.
          </p>
        </div>

          <div className="hotel-badge">
            <img 
              src={labelImg} 
              alt="Premium rooms 5 stars"
              className="badge-image"
            />
          </div>
  
        <div className="right-side">
       
          <div className="top-small-image">
            <img 
              src={tableImg} 
              alt="Hotel detail"
              className="small-photo"
            />
          </div>

          

          
          <div className="scroll-hint">
            <img 
              src={scrollImg} 
              alt="Scroll to rooms and apartments"
              className="scroll-image"
            />
          </div>
        </div>
      </div>
    </div>
    );
};

export default block2;