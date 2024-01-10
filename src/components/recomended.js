import React from "react";
import BoseOne from '../assets/Bose-one.png';
import BoseTwo from '../assets/Bose-two.png';
import BoseThree from '../assets/Bose-three.png';

import '../styles/recomendedstyles.scss'

function Recommended () {
   return(
      <div className="recommended-block-container">
         <div className="recommended-block">
            <div className="recommended-text">Recommended</div>
            <div className="examples-block">
               <div className="example">
                  <div className="example-img">
                     <img src={BoseOne} alt='img'></img>
                  </div>
                  <div className="characteristics-block">
                     <div className="name">Bose portable Smart speaker</div>
                     <div className="description">Smart home</div>
                     <div className="price">$ 399.00</div>
                  </div>
               </div>
               <div className="example">
                  <div className="example-img">
                     <img src={BoseTwo} alt='img'></img>
                  </div>
                  <div className="characteristics-block">
                     <div className="name">SoundLink Flex Bluetooth speaker</div>
                     <div className="description">Portable bluetooth</div>
                     <div className="price">$ 149.00</div>
                  </div>
               </div>
               <div className="example">
                  <div className="example-img">
                     <img src={BoseThree} alt='img'></img>
                  </div>
                  <div className="characteristics-block">
                     <div className="name">SoundLink Color Bluetooth speaker II</div>
                     <div className="description">Portable bluetooth</div>
                     <div className="price">$ 129.00</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Recommended