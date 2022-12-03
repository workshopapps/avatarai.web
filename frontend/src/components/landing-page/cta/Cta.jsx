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
          src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1670025105/71_jhvd30.png"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1670025105/72_bdfh5z.png"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1670025105/73_vav6w6.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Cta