import React from "react";
import "../createAvatar/createAvatar.css";
import Arrow from "../../assets/images/arrow-right.svg";
import Left from "../../assets/images/left.svg";
import Right from "../../assets/images/right.svg";
import User from "../../assets/images/user.png";
import "./style.css";

function Preview() {
  return (
    <div>
      <div className="create-avatar">
        <h1>Welcome</h1>
        <p id="top-text">Let&apos;s Create your Avatars.</p>
        <div className="upload-block">
          <img src={Arrow} alt="arrow-right" id="arrow" />
          <div className="right">
            <p id="number">3</p>
            <h2>Preview your Pictures</h2>
            <div>
              <img src={Left} alt="left" />
              <img src={User} alt="user-pic" />
              <img src={Right} alt="right" />
            </div>
            <button type="submit">Generate Avatar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
