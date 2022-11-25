import React from "react";
import Navbar from "../landingPage/Navbar/Navbar";
import "./style.css";
import Cover from "./images/home.png";
import Frame1 from "./images/fr.png";
import FaqNewsletter from "../faq/FaqNewsletter.jsx";
import Footer from "../Footerpage/Footer.jsx";

const GuidelinePage = () => {
  return (
    <div className="guideline_page">
      <Navbar />
      <div className="guide">
        <div className="guide-top">
          <h1>What is Noxus?</h1>
          <p>
            <span style={{ color: "#8B70E9" }}>Noxus</span> is a site that
            enables you to upload your own photos and create AI-generated
            avatars of yourself.
          </p>
          <img src={Cover} alt="home-cover-photo" />
        </div>
        <div className="guide-middle">
          <h2>How Does Noxus Work?</h2>
          <p>
            Creating your own avatars on Noxus is relatively easy and only takes
            a few minutes.
          </p>
          <div className="cards">
            <img src={Frame1} alt="frame1" />
            <button>Create Avatar</button>
          </div>
        </div>
      </div>
      <FaqNewsletter />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default GuidelinePage;
