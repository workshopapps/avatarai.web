import React from "react";
import Header from "./Header";
import "./style.css";

function LoadingImages() {
  return (
    <div>
      <div className="create-avatar">
        <Header />
        <div className="upload-block">
          <div className="right">
            <h2>Getting your Images</h2>
            <p id="upload-text">Wait while we load your images</p>
            <p>
              <span>1</span> of 10 images has been uploaded
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingImages;
