import React from 'react';
import './header.css'


const Header = () => {
  return (
    <div>
       <div className='header__content-ony'>
       <h1 className='header__title-ony'>Create amazing <span className='span__color-ony'>AI-generated </span>avatars fast</h1>
        <p className='header__description-ony'>Noxus let’s you make magic with your images on the go. Upload your images and generate amazing avatars.</p>
       </div>
         <p className='header__description2-ony'>Trusted by millions of folks around the world who use our platform for avatar integration, knowledge development and for fun.</p>
         <div className='tech__logos-ony'>
           <div className='tech__logo-ony'>
            <img src='./images/Google.png'/>
            <img src='./images/Microsoft.png'/>
            <img src='./images/Oracle.png'/>
            <img src='./images/Atlassian.png'/>
            </div>
            <div className='tech__logo-ony'>
            <img src='./images/Zoom.png'/>
            <img src='./images/Twilio.png'/>
            <img src='./images/Pipeliner.png'/>
           <img src='./images/Quickbooks.png'/>
           </div>
           <div className='tech__logo-ony'>
          
           <img src='./images/Freshbooks.png'/>
           <img src='./images/Zendesk.png'/>
           <img src='./images/Lemlist.png'/>
           <img src='./images/Databricks.png'/>
           </div>
         </div>
       
    </div>
  )
}

export default Header