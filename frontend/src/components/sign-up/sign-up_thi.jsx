import React from "react";
import logo_opt from "./images/sign_up/logo.png";
import tick_opt from "./images/sign_up/tick-circle.png";
import "./signup.css";
import {Link} from "react-router-dom";
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
        <div className="nav_opt">
          <img className="logo_opt logo_opt_2" src={logo_opt} alt="logo.png" />
        </div>
        <img className="mail_opt" src={tick_opt} alt="tick.png" />
        <div className="ch__opt">E-mail verification successful</div>
        <div className="li_opt">
          Your e-mail verification was successfully. You are very close to
          completing your account setup.
        </div>

        <div className="button_div_opt">
          <Link to="/Opt_for">
            <button className="mybutton_opt" id="mybutton_opt">
              Complete Your Account Setup
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
