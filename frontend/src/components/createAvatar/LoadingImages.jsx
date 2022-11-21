import React from "react";
import SearchComponent from "../DashboardSearchComponent/SearchComponent";
import SidebarEye from "../Desktop_1/SidebarEye";
import Header from "./Header";
import "./style.css";

function LoadingImages() {
  return (
    <div className="desktop-2">
      <div>
        <SidebarEye />
      </div>
      <div className="create-avatar">
        <SearchComponent />
        <Header />
        <div className="upload-block">
          <div className="right">
            <h2>Getting your Images</h2>
            <p id="upload-text">Wait while we load your images</p>
            <div className="loader"></div>
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
