import React from 'react'
import './cta.css'

const Cta = () => {
  return (
    <div className="any-sect">
      <h4 className="be">High quality avatars for your personal use</h4>
      <p>
        Zuvatar generates high quality avatars that can be used as profile
        pictures on social media and precise avatars that can be used as
        passport images on different occasions.
      </p>
      <div className="img-bat">
        <img
          src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1670933622/71_jhvd30_11zon_ar09jk.jpg"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1670933592/72_bdfh5z_11zon_kp1din.jpg"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1670933574/73_vav6w6_11zon_sfwgp0.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Cta