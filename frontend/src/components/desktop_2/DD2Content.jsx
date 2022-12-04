import React, { useState, useEffect, useRef } from "react";
import "./DD2.css";
import "../desktop_4/DD4.css";
import arrowRightMobile from "./arrow-right-mobile.svg";
import arrowRightDesktop from "./arrow-right-desktop.svg";
import upload from "./upload.svg";
import progress from "./progress.svg";
import { v4 as uuidv4 } from "uuid";

import { Link } from "react-router-dom";
import Button from "../landingPage/Button/Button.jsx";
import arrowright from "../desktop_4/img/arrow-right.png";
import Arrowright from "../desktop_4/img/arrowright.png";
import three from "./line.png";
import left from "../desktop_4/img/arrowpleft.png";
import right from "../desktop_4/img/arrowpright.png";
import Her from "../desktop_4/img/her.png";
// import Background from "./../DASHBOARD_COMPONENT/dashboardcomp";
import Content from "../Desktop_3/Content";
import add from "./add.png";

// import axios from "axios";

const ImageUpload = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [size, setSize] = useState(window.innerWidth);
  const [imageUpload, setImageUpload] = useState({ file: null });
  const [showAlertLink, setShowAlertLink] = useState(false);
  const [preview, setPreview] = useState(false);
  let addFile = false;

  const labelText = `(PNG or JPEG)`;

  const handleFile = (e) => {
    let file = e.target.files;
    setImageUpload({ file: file });
    const selectedFilesArray = Array.from(file);
    // console.log(selectedFilesArray);
    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
    setShow(false);
    setShowAlertLink(!showAlertLink);
  };


  const handleFilee = (e) => {
    let file = e.target.files;
    setImageUpload({ file: file });
    const selectedFilesArray = Array.from(file);
    // console.log(selectedFilesArray);
    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
    setShow(false);
    // setShowAlertLink(!showAlertLink);
  };
  // console.log(selectedImages);

 

  // getting email from localhost
   let mail;
   let personality;
/*  function getItems() {
    if (
      localStorage.getItem("opt_mail") !== "" &&
      localStorage.getItem("personality") !== ""
    ) {
      mail = localStorage.getItem("opt_mail").slice(1, -1);
      personality = localStorage.getItem("personality").slice(1, -1);
      console.log(personality);
    }
  }
  getItems(); */

  async function sendData() {
 

    let formdata = new FormData();
    formdata.append("file", selectedImages);
    formdata.append("email", mail);
 
    let result = await fetch("https://zuvatar.hng.tech/api/v1/avatar", {
      method: "POST",
      // body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
      data: formdata,

    });
    result = await result.json();
    console.warn("result", result)
  }



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
    let timeout;
    if (showAlertLink) {
      timeout = setTimeout(() => {
        setShowAlertLink((current) => !current);
        setPreview(true);
      }, 5000);
    }
    return () => clearTimeout(timeout);
  }, [showAlertLink]);

  useEffect(() => {
    window.addEventListener("resize", checkSize);
  }, []);
  const [show, setShow] = useState(true);
  const click = (event) => {
    setShow((current) => !current);
  };
  const isVisible = false;
  const [image, setImage] = useState();
  // const [preview, setPreview] = useState();

  return (
    <div className="w-full h-full">
      {!showAlertLink && !preview && (
        <div
          style={{ display: show ? "block" : "none" }}
          className="aso-dd2-content-container"
        >
          <div className="aso-dd2-top">
            <Link className="link" to="/Dashboard">
              <div className="previous-page">
                {size < 760 ? (
                  <img src={arrowRightMobile} alt="share icon" />
                ) : (
                  <img src={arrowRightDesktop} alt="share icon" />
                )}
              </div>
            </Link>
            {/* <p>2</p> */}
            <div className="imgs flex justify-center items-center w-full h-10">
              <img src={progress} alt="" className="w-full " />
            </div>
          </div>

          <h1>Upload your Pictures</h1>
          <p className="aso-dd2-p">
            You can upload files like PNG, JPG, PDF, WEBP are supported
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
                <img src={upload} alt="" />
                <br />
                <p> Drag and drop or click here to upload file</p>
                {/* {labelText} */}
              </label>
            </div>
            <Button type="button" className="aso-dd2-btn">
              Upload
            </Button>
          </form>
        </div>
      )}
      {showAlertLink && addFile === false && (
        <div className="flex flex-col items-center w-full h-full justify-center">
          <div className="grow">
            <Content />
            
          
          </div>
        </div>
      )}
      {preview && (
        <div className="vic_content">
          <div className="aso-dd2-top">
            <Link className="link" to="/Dashboard_2">
              <div className="previous-page">
                {size < 760 ? (
                  <img src={arrowRightMobile} alt="share icon" />
                ) : (
                  <img src={arrowRightDesktop} alt="share icon" />
                )}
              </div>
            </Link>
            {/* <p>2</p> */}
            <div className="imgs flex justify-center items-center w-full h-10">
              <img src={three} alt="" className="w-full " />
            </div>
          </div>
          <h3>Preview your Images</h3>

          {/* <div className="vic_img_and_direction"> */}
          {/* <img src={left} className="vic_left" /> */}
          <div className="vic_image_preview_div">
            {selectedImages &&
              selectedImages.map((image, index) => {
                return (
                  <div
                    key={image}
                    className="vic_her_div relative"
                    // onChange={storeItem(image)}
                  >
                    <img src={image} className="vic_her" />

                    <button
                      id="closeSideBar"
                      className=" mr-8 vic_x"
                      onClick={() =>
                        setSelectedImages(
                          selectedImages.filter((e) => e !== image)

                        )
                      }
                     
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-x"
                        width={30}
                        height={30}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="white"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        key={image}
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1={18} y1={6} x2={6} y2={18} />
                        <line x1={6} y1={6} x2={18} y2={18} />
                      </svg>
                    </button>
                  </div>
                );
              })}

            <form action="" className="vic-dd2-form">
              <div className="aso-dd2-input">
                
                <input
                  accept="image/*"
                  multiple
                  type="file"
                  name="file"
                  id="file"
                  // onclick={setPreview(false)}
                  onChange={handleFilee}
                 
                />
                  
                <label htmlFor="file"
                
                >
                  {/* <label htmlFor="file" className="aso-dd2-label"> */}
                  <img src={upload} alt="" />
                </label>
              </div>
            </form>
          </div>
          {/* <img src={right} className="vic_right" /> */}
          {/* </div> */}
          <div className="vic_div_div">
            <Link to="/Dashboard_5" className="vic_link" onClick={sendData}>
              <Button
                className="bg-[#8B70E9] w-100 w-lg-120 text-white"
                children="Generate Avatar"
                
              />{" "}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
