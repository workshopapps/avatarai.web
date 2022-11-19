import React from 'react'
import './cta.css'

const Cta = () => {
  return (
    <div>
  <h2 className='cta__title-ony' >Choose your scenery</h2>
  <div className='cta__images-ony'>
    <img className='side___ony' src='./images/Frame75.png' alt='call to action '/>
    <img className='cta__section-pic-ony' src='./images/Frame76.png' alt='call to action '/>
    <img className='cta__section-pic-ony'src='./images/Frame77.png' alt='call to action ' />
    <img className='cta__section-pic-ony' src='./images/Frame78.png' alt='call to action ' />
    <img className='side___ony'  src='./images/Frame79.png' alt='call to action ' />
  </div>
  <div className='cta__support-content'>
    <h3 className='cta__support-title-ony'>Be Anywhere</h3>
    <p className='cta__support-description-ony'>Choose as many template as you want and put yourself anywhere you choose to be. Tapert offers you the ability to elect amazing scenes and backgrounds to create amazing AI avatars</p>
  </div>
    </div>
  )
}

export default Cta