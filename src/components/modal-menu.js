import React from "react";
import '../styles/modal-menu-style.scss';
import CloseIcon from '../assets/Icon-Close.png';
import LogoBose from '../assets/Logo_Bose.png';

function ModalMenu ({active, setActive}) {
   console.log(active);
   return (
      <div className={active ? 'modal active': 'modal'} onClick={()=> setActive(false)}>
         <div className='modal-menu-container' onClick={(e)=> e.stopPropagation()}>
            <div className='header-menu-block'>
               <div className='header-menu-logo'>
                  <img src={LogoBose}  alt='img' className="logo"></img>
                  <img 
                     src={CloseIcon}  
                     alt='img'
                     className="close-icon"
                     onClick={()=> setActive(false)}
                  ></img>
               </div>
               <div className='menu-items-container'>
                  <div className='menu-items'>
                     <div className='menu-item'>HOME</div>
                     <div className='menu-item'>RECOMMENDED</div>
                     <div className='menu-item'>CATEGORIES</div>
                     <div className='menu-item'>HOW TO BUY</div>
                     <div className='menu-item'>CALL TO BUY</div>
                  </div>
                  <div className='call-items'>
                     <div className='call-item-number'>+1 234 5555-55-55</div>
                     <div className='call-item'>call to order</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ModalMenu;