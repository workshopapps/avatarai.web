import React from "react";
import logo_opt from "./images/sign_up/logo.png";
import info_opt from "./images/sign_up/info_outline.png";
import "./signup.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

let state;
export default function SignUp_first() {
  state = {
    disabled: true,
  };
  const handleclick = (e) => {
    if (
      e.target.checked &&
      document.getElementById("myinput_opt").target.value !== ""
    ) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (error.confirmPassword === "") {
      navigate("/Opt_sec");
    }
  };
  const [show_s, setShow_s] = useState(true);
  const [show_s_, setShow_s_] = useState(true);

  const [show, setShow] = useState(true);

  const click = (event) => {
    setShow((current) => !current);
  };
  const [input, setInput] = useState({
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    password: "Must be 8 characters long",
    confirmPassword: "Both passwords must match",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };
  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  return (
    <div className="house_opt">
      <div className="nav_opt">
        <img className="logo_opt" src={logo_opt} alt="logo.png" />

        <div className="all_opt">
          Already have an account?
          <span className="col_opt">
            {" "}
            <a href="\Login">Log in here</a>
          </span>
        </div>
      </div>
      <div className="first_opt">
        <div className="get_opt">Get Started With A Free Account</div>
        <div className="gett_opt">Sign Up to get your AI-generated avatars</div>
        <div className="motion_opt">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
        <div className="provide_opt">Please provide your name and e-mail</div>

        <form id="myform_opt" onSubmit={handleSubmit} method="post">
          <div style={{ display: show ? "block" : "none" }}>
            <label htmlFor="myinput_op">First name</label>
            <br />
            <input id="myinput_op" placeholder="John" type="text" required />
            <br />
            <label htmlFor="myinput_o">Last name</label>
            <br />
            <input id="myinput_o" placeholder="Doe" type="text" required />
            <br />
            <label htmlFor="myinput_opt">Email</label>
            <br />
            <input
              id="myinput_opt"
              placeholder="name@example.com"
              type="email"
              required
            />
            <br />
            <label className="container_opt" id="cap">
              <span className="note_opt">
                I agree to the terms & service and privacy policy
              </span>
              <input
                type="checkbox"
                id="check_opt"
                onClick={() => setShow_s(!show_s)}
                required
              />
              <span className="checkmark" />
            </label>
            <button onClick={click} disabled={show_s} className="mybutton_opt">
              Continue
            </button>
          </div>

          {!show && (
            <div>
              <label>Password</label>
              <br />
              <input
                id="myinput_opt"
                name="password"
                placeholder="Choose Password"
                minLength="8"
                value={input.password}
                onChange={onInputChange}
                onBlur={validateInput}
                type="password"
                required
              />
              <br />
              <div className="tt">
                {error.password && (
                  <div className="info__opt">
                    {" "}
                    <img className="info_opt" src={info_opt} alt="info.png" />
                    {error.password}
                  </div>
                )}
              </div>
              <label>Confirm Password</label>
              <br />
              <input
                id="myinput_opt"
                role="Opt_pass"
                name="confirmPassword"
                value={input.confirmPassword}
                onChange={onInputChange}
                onBlur={validateInput}
                placeholder="Choose your password"
                type="password"
                required
              />
              <br />
              <div className="tt">
                {error.confirmPassword && (
                  <div className="info__opt">
                    {" "}
                    <img
                      className="info_opt"
                      src={info_opt}
                      alt="info.png"
                    />{" "}
                    {error.confirmPassword}
                  </div>
                )}
              </div>

              <button
                role="Opt_submit"
                className="mybutton_opt"
                id="mybutton_opt"
                type="submit"
              >
                Continue
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
