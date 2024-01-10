import React from 'react';
import '../styles/contactsstyles.scss';

function Contacts () {
   return(
      <div className='contacts-block-container'>
         <div className='contacts-block'>
            <div className='contacts-block-title'>Contact us</div>
            <div className='contact-forms-container'>
               <div className='contacts-forms-block'>
                  <div className='contacts-form'>
                     <div className='contact-inputs-block'>
                        <input 
                           className='contact-input'
                           placeholder='Name'
                        >
                        </input>
                        <input 
                           className='contact-input'
                           placeholder='Email'
                        >  
                        </input>
                        <textarea 
                           className='message-input'
                           placeholder='Message'
                        >
                        </textarea>
                     </div>
                     <button className='send-button'>Send</button>
                  </div>
                  <div className='contacts'>
                     <div className='phone'>
                        <div className='phone-title'>Phone</div>
                        <div className='phone-number'>+1 234 5555-55-55</div>
                     </div>
                     <div className='email'>
                        <div className='email-title'>Email</div>
                        <div className='email-address'>hello@miami.com</div>
                     </div>
                     <div className='address'>
                        <div className='address-title'>Address</div>
                        <div className='address-data'>400 first ave.<br/>suite 700<br/>Minneapolis, MN 55401</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
export default Contacts