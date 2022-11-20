import React from "react";
import "./benefits.css";

const Benefits = () => {
  return (
    <div>
      <h2 className="benefits__title-ony">Really fast and easy</h2>

      <div className="benefits__description-ony">
        <diV>
        <h3>Upload Images!</h3>
        <p className="first__benefit-ony">
          Upload a maximum of ten images in our system and watch it generate
          avatars with wonderful scenes that you will absolutely love to share
        </p>

        <h3>Convert images to avatars.</h3>
        <p className="second__benefit-ony">
          Our advanced machine learning tool allows us to convert your beautiful
          images to whatever you want it to be. Its totally on us to make it
          happen
        </p>

        <h3 >Voila! It’s your avatar</h3>
         
        <p className="third__benefit-ony">  Your avatars are pixel clear and can be used absolutely anywhere you
          choose.</p>
        {" "}
        
        </diV>
       

        <div className="benefits__images-ony">
          <img className="av2-ony" src="./images/av2.png" />
          <img className="second__av-ony" src="./images/av4.png" />
          <img className="av1-ony" src="./images/av1.png" />
        </div>
      </div>
      <h3 className="features__title-ony"><span className="aiii-ony">Exciting </span>features for you</h3>
      <div className="features__ony">
      <div>
        <h4>Image to avatar</h4>
        <p>Convert your images to amazing and cool avatars that you can share to friends anywhere on the internet</p>
      </div>
      <div>
        <h4>Text to avatar</h4>
        <p>Convert text to amazing and cool avatars that you can share to friends anywhere on the internet</p>
      </div>
      <div>
        <h4>Community</h4>
        <p>Connect with other tapert users and see the amazing avatars they are creating. </p>
      </div>
      </div>
    </div>
  );
};

export default Benefits;
