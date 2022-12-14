import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./DD2.css";
import "../desktop_4/DD4.css";
import arrowRightMobile from "./arrow-right-mobile.svg";
import arrowRightDesktop from "./arrow-right-desktop.svg";
import GrayLine from "./../DASHBOARD_COMPONENT/img/gray-rect.svg";
import PurpleLine from "./../DASHBOARD_COMPONENT/img/purple-rect.svg";
import upload from "./upload.svg";
import { v4 as uuidv4 } from "uuid";
import GeneratingAvatar from "../desktop_5/GeneratingAvatar";
import { Link } from "react-router-dom";
import Button from "../landingPage/Button/Button.jsx";
import three from "./line.png";
import Content from "../Desktop_3/Content";
import { useAuth } from "../../../context/auth-context";
import Error from "./../faq/faqHero/errorModal";


const ImageUpload = ({ setStep, step, photoUser }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageToUpload, setImageToUpload] = useState([]);
  const [size, setSize] = useState(window.innerWidth);
  const [genAvt, setGenAvt] = useState(false);
  const [showAlertLink, setShowAlertLink] = useState(false);
  const [preview, setPreview] = useState(false);
  const [show, setShow] = useState(true);
  const { user } = useAuth();


  const closeModalNow =()=>{
  
    setShowSuccessModal(false)
    setshowErrorModal(false)

}


  const handleFile = (e) => {
    let file = e.target.files;

    const selectedFilesArray = Array.from(file);

    //Displays images
    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

    setImageToUpload((prev) => prev.concat(selectedFilesArray));
    setShow(false);
    setShowAlertLink(!showAlertLink);
  };

  const sendImages = async () => {
    setGenAvt(true);
    console.log(user.email, "email");

    const formData = new FormData();
    imageToUpload.forEach((image) => {
      formData.append("files", image);
    });
    formData.append("email", user?.email);
    formData.append("photo_class", photoUser);

    await axios
      .post("https://zuvatar.hng.tech/api/v1/photos", formData)
      .then((response) => {
        console.log("upload data: ", response.data);
        setGenAvt(false);
        setStep(step + 1);
      })
      .catch((e) => {
        setGenAvt(false);
        const err = e?.response?.data;
        // setErrorStatus({ error: true, message: err });
        console.log(err);
      });
  };

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  const removeImage = (index) => {
    setSelectedImages(selectedImages.filter((_, i) => i !== index));
    setImageToUpload(imageToUpload.filter((_, i) => i !== index));
  };

  useEffect(() => {
    let timeout;
    if (showAlertLink) {
      timeout = setTimeout(() => {
        setShowAlertLink((current) => !current);
        setPreview(true);
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [showAlertLink]);

  useEffect(() => {
    window.addEventListener("resize", checkSize);
  }, []);

  return (
    <div className="w-full h-full relative overflow-x-hidden">
      {!showAlertLink && !preview && (
        <div
          style={{ display: show ? "block" : "none" }}
          className="aso-dd2-content-container"
        >
          <div className="aso-dd2-top w-full">
            <div className="link absolute" onClick={() => setStep(step - 1)}>
              <div className="previous-page ">
                {size < 760 ? (
                  <img src={arrowRightMobile} alt="share icon" />
                ) : (
                  <img src={arrowRightDesktop} alt="share icon" />
                )}
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 w-full">
              <img
                src={GrayLine}
                alt=""
                className="w-[50px] md:w-[120px] md:h-[5px]"
              />
              <img
                src={PurpleLine}
                alt=""
                className="w-[50px] md:w-[120px] md:h-[5px] "
              />
              <img
                src={GrayLine}
                alt=""
                className="w-[50px] md:w-[120px] md:h-[5px]"
              />
            </div>
          </div>

          <h1>Upload your Pictures</h1>
          <p className="aso-dd2-p">
            You can upload files like PNG, JPG, WEBP are supported
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
      {showAlertLink && (
        <div className="flex flex-col items-center w-full h-full justify-center">
          <div className="grow">
            <Content />
          </div>
        </div>
      )}
      {preview && !showAlertLink && (
        <>
          {genAvt ? (
            <GeneratingAvatar />
          ) : (
            <div className="vic_content">
              <div className="aso-dd2-top w-full">
                <div className="absolute" onClick={() => setStep(step - 1)}>
                  <div className="previous-page">
                    {size < 760 ? (
                      <img src={arrowRightMobile} alt="share icon" />
                    ) : (
                      <img src={arrowRightDesktop} alt="share icon" />
                    )}
                  </div>
                </div>
                {/* <p>2</p> */}
                <div className="md:mb-5 flex items-center justify-center gap-3 w-full">
                  <img
                    src={GrayLine}
                    alt=""
                    className="w-[50px] md:w-[120px] md:h-[5px]"
                  />
                  <img
                    src={GrayLine}
                    alt=""
                    className="w-[50px] md:w-[120px] md:h-[5px]"
                  />
                  <img
                    src={PurpleLine}
                    alt=""
                    className="w-[50px] md:w-[120px] md:h-[5px] "
                  />
                </div>
              </div>
              <h3>Preview your Images</h3>

              {/* <div className="vic_img_and_direction"> */}
              {/* <img src={left} className="vic_left" /> */}
              <div className="vic_image_preview_div">
                {
				
                
                  selectedImages &&
                //   selectedImages.length >= 5 &&
                //   selectedImages.length <= 20 &&
                  selectedImages.map((image, index) => {
					if (selectedImages.length < 5 || selectedImages.length > 20 )
					{
						return <Error /> }
						// showErrorModal ? (
						// 		<Error
						// 		setShow={setshowErrorModal}
						// 		header={' Oops!! Something when wrong '}
						// 		Image={()=>(<img src={red} alt="red tick" className="w-[5rem] md:w-[7rem] pt-3" />)}
						// 		/>
						// 		) : (
						// 		  ""
						// 		)}
						

					
					else {
					
                    return (
                      <div
                        key={index}
                        className="vic_her_div relative cbk-hover"
                        // onChange={storeItem(image)}
                      >
                        <img
                          src={image}
                          className="vic_her w-[120px] h-[125px]"
                        />

                        <button
                          id="closeSideBar"
                          className=" vic_x"
                          onClick={() => removeImage(index)}
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
					}
                  })
                }

                <form className="vic-dd2-form">
                  <div className="aso-dd2-input">
                    <input
                      accept="image/*"
                      multiple
                      type="file"
                      name="file"
                      id="file"
                      // onclick={setPreview(false)}
                      onChange={handleFile}
                    />

                    <label htmlFor="file">
                      {/* <label htmlFor="file" className="aso-dd2-label"> */}
                      <img src={upload} alt="" />
                    </label>
                  </div>
                </form>
              </div>
              {/* <img src={right} className="vic_right" /> */}
              {/* </div> */}
              <div className="vic_div_div w-full">
                <div className="vic_link w-full" onClick={sendImages}>
                  <Button
                    className="bg-[#8B70E9] w-100 w-lg-120 text-white"
                    children="Generate Avatar"
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ImageUpload;
