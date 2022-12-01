import React from 'react'
import './cta.css'
import img1 from './71.png'
import img2 from './72.png'
import img3 from './73.png'


const Cta = () => {
  return (
    <div className="any-sect">
      <h4 className="be">
        High quality avatars for your personal use
      </h4>
      <p>Zuvatar generates high quality avatars that can be used as profile pictures on social media and precise avatars that can be used as passport images on different occasions.</p>
      <div className="img-bat">
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
      </div>
    </div>
  )
}

export default Cta