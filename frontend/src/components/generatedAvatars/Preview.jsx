import React from "react";
import "../createAvatar/style.css";
import Arrow from "./images/icon.svg";
import Left from "./images/left.svg";
import Right from "./images/right.svg";
import User from "./images/user.png";
import "./style.css";
import "../createAvatar/style.css";
import Header from "../createAvatar/Header";
import SearchComponent from "../DashboardSearchComponent/SearchComponent";
import SidebarEye from "../Desktop_1/SidebarEye";
import Menu from "../createAvatar/images/menu.svg";
import MobileLogo from "../createAvatar/images/mobileLogo.svg";

function Preview() {
  return (
    <div className="desktop-2">
      <div className="mobile-nav">
        <img src={Menu} alt="menu" />
        <img src={MobileLogo} alt="logo" />
        <div></div>
      </div>
      <div>
        <SidebarEye />
      </div>
      <div className="create-avatar">
        <SearchComponent />
        <Header />
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
