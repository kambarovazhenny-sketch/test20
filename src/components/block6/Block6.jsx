import best from './block6img/best.png'; 
import backgroundImg from '../block6/block6img/image5.png'; 
import all from '../block6/block6img/all.png'; 

import './block6.css';


function block6() {
    return(
        <div className="container-block6" style={{ backgroundImage: `url(${backgroundImg})` }}>
            <div className="sod">
           <img className='best' src={best} alt="" /><br />
             <img className='all'  src={all} alt="" />
             </div>
        </div>
    )
}
export default block6;