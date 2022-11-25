import { useState, useEffect } from "react";
import "./DD4.css";
import arrowright from "./img/arrow-right.png";
import Arrowright from "./img/arrowright.png";
import three from "./img/3.png";
import left from "./img/arrowpleft.png";
import right from "./img/arrowpright.png";
import Her from "./img/her.png";
import Button from "./../landingPage/Button/Button";
import { Link } from "react-router-dom";
// import ImageUpload from "./../desktop_2/DD2Content";

function DD4content() {
  const isVisible = false;
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
//   useEffect(() => {
//     if (image) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreview(reader.result);
//       };
//       reader.readAsDataURL(image);
//     } else {
//       setPreview(null);
//     }
//   }, [image]);
//  setPreview = ImageUpload;

  return (
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
        <img src={left} className="vic_left" />
        <div className="vic_image_preview_div">
          {/* <img src={Her} className='vic_her' /> */}
          {preview ? (
            <img src={preview} className="vic_her" />
          ) : (
            <img src={Her} className="vic_her" />
          )}
        </div>
        <img src={right} className="vic_right" />
      </div>
      <div className="vic_div_div">
        {/* <input
          type="file"
          className="vic_input_cls bg-purple-500"
          accept="image/*"
          onClick={!isVisible}
          onChange={(event) => {
            const file = event.target.files;
            if (file && file.type.substr(0, 5) === "image") {
              setImage(file);
            } else {
              setImage(null);
            }
          }}
        /> */}
        {/* <div className="vic_spacer"></div> */}
        <Link to="/Dashboard_6" className="vic_link">
          <Button
            className="bg-purple-500 w-100 w-lg-120 text-white"
            children="Generate Avatar"
          />{" "}
        </Link>
      </div>
    </div>
  );
}

export default DD4content;
