import React from 'react';
import { useState } from 'react';
import SoundWaves from '../assets/Sound waves.png';
import Cover from '../assets/image_3.png';
import LogoBose from '../assets/Logo_Bose.png';

function Header ({setActive}) {
   const [isVisible, setVisible] = useState(false)
   return (
      <div className='header-block'>
         <img src={Cover} alt='img' className='cover'></img>
         <div className='header-container'>
            <header>
               <div className='navbar-block'>
                  <img src={LogoBose} alt='img' className='logo'></img>
                  <div className='menu-phone-block'>
                     <div className={isVisible ? 'number visible' : 'number'}>+1 234 555-55-55</div>
                     <div className='phone-burger-container'>
                        <div 
                           className='phone'
                           onMouseOver={()=> setVisible(true)}
                           onMouseOut={()=> setVisible(false)}
                        ></div>
                        <div 
                           className='burger'
                           onClick={()=> setActive(true)}
                        ></div>
                     </div>
                  </div>
               </div>
            </header>
            <div className='header-text-block'>
               <div className='sound-wave'>
                  <img src={SoundWaves} alt='img' className='sound-img'></img>
               </div>
               <div className='sound-text-block'>The world shades.<br/>Your music shines.</div>
            </div>
         </div>
      </div>
   )
}

export default Header