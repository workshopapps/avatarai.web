import React from "react";
import Arrow from "./images/icon.svg";
import Header from "./Header";
import "./style.css";

function Upload() {
  return (
    <div className="create-avatar">
      <Header />
      <div className="upload-block">
        <img src={Arrow} alt="arrow-right" id="arrow" />
        <div className="right">
          <p id="number">2</p>
          <h2>Upload your Pictures</h2>
          <p id="upload-text">
            You have to upload 10 pictures of you in different scenario
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

export default Upload;
