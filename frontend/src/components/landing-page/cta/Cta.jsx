import React from 'react'
import './cta.css'
import img1 from './Frame1.png'
import img2 from './Frame2.png'


const Cta = () => {
  return (
    <div>
  <h2 className='main__title-ony' id='main' >Choose your <span className='aiii-ony'>scenery</span></h2>
  <div className='cta__images-ony'>
    <img className='side___ony' src={img1} alt='call to action '/>
    <img className='cta__section-pic-ony' src='./images/Frame76.png' alt='call to action '/>
    <img className='cta__section-pic-ony'src='./images/Frame77.png' alt='call to action ' />
    <img className='cta__section-pic-ony' src='./images/Frame78.png' alt='call to action ' />
    <img className='side___ony'  src={img2} alt='call to action ' />
  </div>
    </div>
  )
}

export default Cta