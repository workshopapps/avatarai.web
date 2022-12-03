import React from "react";
import "./header.css";
import Hero from "./img/Hero1.png";
import { Link } from "react-router-dom";
import Button from "../../../landingPage/Button/Button";

const Header = () => {
  return (
    <header className="bat-header">
      <div className="bat-header-content">
        <h2>
          Create your own <span>AI-generated </span>avatars
        </h2>
        <p>
          Create Profile pictures, Online gaming display pictures, Pet potraits
          and much more on the go.
        </p>

        <Button className="text-white border-[#8B70E9] bg-[#8B70E9] cbk-login-btn bat-btn">
          <Link to="/Signup"> Generate Avatars </Link>
        </Button>
      </div>
      <div className="bat-header-overlay"></div>
    </header>
  );
};

export default Header;
