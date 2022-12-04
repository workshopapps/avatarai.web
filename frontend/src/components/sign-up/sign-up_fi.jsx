import React from "react";
import './signup.css';
import {Link} from "react-router-dom";
import Button from "../landingPage/Button/Button";
export default function SignUp_fi(){

    return (
      <div className="first_opt">
        <div className="nav_opt">
          <img
            className="logo_opt logo_opt_2"
            src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1670070847/logo_dpfx4a.png"
            alt="logo.png"
          />
        </div>
        <img
          className="mail_opt"
          src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1670070847/tick-circle_m33ccm.png"
          alt="tick.png"
        />
        <div className="bb_opt">
          <div className="ch___opt">Weldone, Tolu </div>
          <img
            className="clap_opt"
            src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1670070846/clap_qtbbib.png"
            alt="clap.png"
          />
        </div>
        <div className="li_opt">Your account has been created successfully</div>

        <div className="button_div_opt">
          <Link to="/Dashboard">
            <Button className="mybutton_opt" id="mybutton_opt">
              Proceed to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    );
}
