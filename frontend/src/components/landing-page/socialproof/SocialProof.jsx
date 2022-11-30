import React from 'react'
import '../cta/cta.css'
import Diva from './diva.png'
import war from './war.png'
import { Link } from 'react-router-dom'
import './socialproof.css';

const SocialProof = () => {
  return (
    <div className='section-bat'>
        <h2 ><span className='aiii-ony'>Explore</span> avatars created by users</h2>
        
        <div className='ai__ony'>
        
          <div className='aii-ony'>
            <img className='ai___img-ony' src='./images/ai5.png'/>
            <img className='ai___img-ony' src='./images/a3.png'/>
            <img className='ai___img-ony' src='./images/ai2.png'/>
            <img className='ai___img-ony' src='./images/ai4.png'/>
          </div>
          <div className='aii-ony' >
            <img src={Diva}/>
            <img src='./images/ava2.png'/>
            <img src='./images/ava5.png'/>
            <img src='./images/ava6.png'/>
            <img src={war}/>
          </div>
        </div>
        <Link to='/signupfirst'>
          <button className="social-btn">
            Explore more
          </button>
        </Link>  
    </div>
  )
}

export default SocialProof