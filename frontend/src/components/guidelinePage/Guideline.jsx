import React from "react";
import Navbar from "../landingPage/Navbar/Navbar";
import "./style.css";
import Cover from "./images/home.png";
import Frame1 from "./images/fr.png";
import FaqNewsletter from "../faq/FaqNewsletter.jsx";
import Foooter from "../footer/Foooter";
import Button from "../landingPage/Button/Button";

const GuidelinePage = () => {
  return (
    <div className="guideline_page">
      <Navbar />
      <div className="guide">
        <div className="guide-top">
          <h1>What is Zuvatar?</h1>
          <p>
            <span style={{ color: "#8B70E9" }}>Zuvatar</span> is a site that
            enables you to upload your own photos and create AI-generated
            avatars of yourself.
          </p>
          <img
            src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1670939118/home_11zon_hgpgxb.webp"
            alt="home-cover-photo"
          />
        </div>
        <div className="guide-middle">
          <h2>How Does Zuvatar Work?</h2>
          <p>
            Creating your own avatars on Zuvatar is relatively easy and only
            takes a few minutes.
          </p>
          <div className="cards">
            <img
              src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1670939119/fr_11zon_wu5yav.webp"
              alt="frame1"
            />
            <Button>Create Avatar</Button>
          </div>
        </div>
      </div>
      <FaqNewsletter />

      <Foooter />
    </div>
  );
};

export default GuidelinePage;
