import React, { useState, useEffect } from "react";
import "./DD2.css";
import "../desktop_4/DD4.css";
import arrowRightMobile from "./arrow-right-mobile.svg";
import arrowRightDesktop from "./arrow-right-desktop.svg";
import { v4 as uuidv4 } from "uuid";

import {Link} from "react-router-dom";
import Button from "../landingPage/Button/Button.jsx";
import arrowright from "../desktop_4/img/arrow-right.png";
import Arrowright from "../desktop_4/img/arrowright.png";
import three from "../desktop_4/img/3.png";
import left from "../desktop_4/img/arrowpleft.png";
import right from "../desktop_4/img/arrowpright.png";
import Her from "../desktop_4/img/her.png";
import Background from './../DASHBOARD_COMPONENT/dashboardcomp';
import Content from "../Desktop_3/Content";

// import axios from "axios";



const ImageUpload = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [size, setSize] = useState(window.innerWidth);
  const [imageUpload, setImageUpload] = useState({ file: null });
  const [showAlertLink,setShowAlertLink] = useState(false)
  const [ preview,setPreview] = useState(false)

  const labelText = `(PNG or JPEG)`;

  const handleFile = (e) => {
    let file = e.target.files;
    // setImageUpload({ file: file });
    const selectedFilesArray = Array.from(file)
    console.log(selectedFilesArray)
    const imagesArray = selectedFilesArray.map((file) =>{
      return URL.createObjectURL(file);

    });
    setSelectedImages(imagesArray);
    setShow(false)
    setShowAlertLink(true)
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
    let timeout
    if (showAlertLink) {
      timeout = setTimeout(() =>{ 
        setShowAlertLink(current => !current)
        setPreview(true)
      }, 5000);
    }
    return () => clearTimeout(timeout);
  }, [showAlertLink]);




  useEffect(() => {
    window.addEventListener("resize", checkSize);
  }, []);
  const [show, setShow] = useState(true);
  const click = event =>{
    setShow(current => !current);
  }
  const isVisible = false;
  const [image, setImage] = useState();
  // const [preview, setPreview] = useState();
 
  return (


    (<div>

      {
        <div style={{display: show? 'block' : 'none'}} className="aso-dd2-content-container">
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
      }
      {
        showAlertLink &&      <div> 
        {<Content />} 
    </div>

      }
      {  preview &&
        <div className="vic_content">
          <div className="vic_img_div">
            <div>
              <img src={arrowright} className="vic_1" />
              <img src={Arrowright} className="vic_2" />
            </div>
            <div>
              <img src={three} className="vic_3" />
            </div>
            <div></div>
          </div>
          <h3>Preview your Images</h3>

          <div className="vic_img_and_direction">

            {/* <img src={left} className="vic_left" /> */}
            <div className="vic_image_preview_div">

                      {selectedImages &&
                      selectedImages.map((image, index) =>{
                        return(
                            <div key={image} className="vic_her_div">
                              <img src={image} className="vic_her" />
                         
                            </div>
                        )
                      })}

             {/* : ( */}
                 
              {/* ) */}
            </div>
            {/* <img src={right} className="vic_right" /> */}
          </div>
          <div className="vic_div_div">
            <Link to="/Dashboard_6" className="vic_link">
              <Button
                  className="bg-purple-500 w-100 w-lg-120 text-white"
                  children="Generate Avatar"
              />{" "}
            </Link>
          </div>
        </div>
      }

    </div>)
  );
};


export default ImageUpload;
