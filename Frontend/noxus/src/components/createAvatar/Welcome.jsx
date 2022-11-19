import React from "react";
import Arrow from "../../assets/images/arrow-right.svg";
import "./createAvatar.css";

function Welcome() {
  return (
    <div className="create-avatar">
      <h1>Welcome</h1>
      <p id="top-text">Let&apos;s Create your Avatars.</p>
      <div className="upload-block">
        <img src={Arrow} alt="arrow-right" id="arrow" />
        <div className="right">
          <p id="number">2</p>
          <h2>Upload your Pictures</h2>
          <p id="upload-text">
            You have to upload a 10 pictures of you in different scenario
          </p>
          <p id="add-pictures">
            Choose pictures from file <br /> (PNG or JPEG)
          </p>
          <button type="submit">Proceed</button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
