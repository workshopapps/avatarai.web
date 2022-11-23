import React, { useState, useEffect } from "react";
import "./DD2.css";
import arrowRightMobile from "./arrow-right-mobile.svg";
import arrowRightDesktop from "./arrow-right-desktop.svg";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
const ImageUpload = () => {
  const [size, setSize] = useState(window.innerWidth);
  const [imageUpload, setImageUpload] = useState({ file: null });

  const labelText = `(PNG or JPEG)`;

  const handleFile = (e) => {
    let file = e.target.files;
    setImageUpload({ file: file });
  };

  const handleUpload = (e) => {
    let file = imageUpload;
    console.log(file);
    let formdata = new FormData();
    formdata.append("image", file);
    formdata.append("id", `${uuidv4()}`);
    // console.log(formdata);
    axios({
      url: "/some/api",
      method: "POST",
      headers: {
        authorization: "your token",
      },
      data: formdata,
    }).then(
      (res) => {},
      (err) => {}
    );
  };

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
  }, []);

  return (
    <div className="aso-dd2-content-container">
      <div className="aso-dd2-top">
        <div className="previous-page">
          {size < 760 ? (
            <img src={arrowRightMobile} alt="share icon" />
          ) : (
            <img src={arrowRightDesktop} alt="share icon" />
          )}
        </div>
        <p>2</p>
      </div>
      <h1>Upload your Pictures</h1>
      <p className="aso-dd2-p">
        You have to upload 10 pictures of you in different scenarios
      </p>
      <form action="" className="aso-dd2-form">
        <div className="aso-dd2-input">
          <input
            accept="image/*"
            multiple
            type="file"
            name="file"
            id="file"
            onChange={handleFile}
          />
          <label htmlFor="file" className="aso-dd2-label">
            Choose pictures from file <br />
            {labelText}
          </label>
        </div>
        <button type="button" className="aso-dd2-btn" onClick={handleUpload}>
          Upload
        </button>
      </form>
    </div>
  );
};

export default ImageUpload;
