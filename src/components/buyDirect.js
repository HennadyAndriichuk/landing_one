import React from 'react';
import '../styles/buyDirectstyle.scss';

function Buydirect (){
   return(
      <div className='buy-direct-container'>
         <div className='buy-direct-block'>
            <div className='buy-direct-textblock'>
               <div className='buy-direct-text'>
                  <div className='buy-direct-title'>Why buy direct<br/> from Bose</div>
                  <div className='buy-direct-features'>
                     <div className='features-list'>
                        <div className='feature'>Free 2-day shipping and returns</div>
                        <div className='feature'>90-day risk-free trial</div>
                        <div className='feature'>World class customer service</div>
                        <div className='feature'>My Bose account management</div>
                     </div>
                     <div className='promo-text'>
                        A great product is more than what's in the<br/> 
                        box. It's a promise of premium performance, world-class<br/> 
                        support, and everything you expect from a trusted<br/> 
                        brand. It's just one of many reasons why you'll shop<br/> 
                        with confidence on Bose.com.
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
export default Buydirect;