import React from "react";
import Arrow from "./images/icon.svg";
import Header from "./Header";
import "./style.css";
import SearchComponent from "../DashboardSearchComponent/SearchComponent";
import SidebarEye from "../Desktop_1/SidebarEye";
import MobileLogo from "./images/mobileLogo.svg";
import Menu from "./images/menu.svg";

function Upload() {
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
    </div>
  );
}

export default Upload;
