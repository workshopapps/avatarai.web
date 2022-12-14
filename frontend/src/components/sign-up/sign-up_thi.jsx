import React from "react";
import "./signup.css";
import Button from "../landingPage/Button/Button";
import { Link } from "react-router-dom";
let handleclick;
let state;

export default function SignUp_thi() {
  state = {
    disabled: true,
  };
  handleclick = (e) => {
    if (e.target.checked === true) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  };

  return (
    <div className="houset_opt">
      <div className="first__opt">
        {/*<div className="nav_opt">*/}
        {/*  <img className="logo_opt logo_opt_2" src={logo_opt} alt="logo.png" />*/}
        {/*</div>*/}
        <img
          className="mail__opt"
          src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1670070847/tick-circle_m33ccm.png"
          alt="tick.png"
        />
        <div className="ch__opt">E-mail verification successful</div>
        <div className="li_opt">
          Your e-mail verification was successfully. You can start generating
          avatars now.
        </div>

        <div className="button_div_opt">
          <Button
            className="mybutton_opt text-white border-[#8B70E9] bg-[#8B70E9]"
            id="mybutton_opt"
          >
            <Link to="/Dashboard"> Dashboard </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
