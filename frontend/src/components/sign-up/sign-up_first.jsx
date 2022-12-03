import React, { useEffect } from "react";
import "./signup.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGoogleLogin } from '@react-oauth/google';
import ErrorSuccessCard from "../utils/ErrorSuccessCard.jsx";
import Button from "../landingPage/Button/Button";

let state;
let result;
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
  const [googlesignup, setgooglesignup] = useState("");

  const signup = useGoogleLogin({
    onSuccess: (tokenResponse) => setgooglesignup(tokenResponse),
    onError: () => console.log("Login with Google Failed"),
  });

  //  Navigates to the Opt_sec page
  useEffect(() => {
    if (googlesignup) {
      navigate("/Opt_sec");
    }
  }, [googlesignup]);

  //  https://zuvatar.hng.tech/api/v1/docs

  const navigate = useNavigate();

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

  const[first_name,setFirstName]=useState("")
  const[last_name, setLastName]=useState("")
  const[email,setEmail]=useState("")
    const [errorStatus, setErrorStatus] = useState({
        error: null,
        message: '',
    });
  async function signUp(){
    // setTimeout(function() {
    // }, 8000);

    let password = input.password;
    let item = { first_name, last_name, email, password };
    // console.warn("item",item)
    localStorage.setItem("opt_mail", JSON.stringify(item.email))
    result = await fetch("https://zuvatar.hng.tech/api/v1/api/user",{
      method:'POST',
      body:JSON.stringify(item),
      headers:{
        "Content-Type":'application/json',
        "Accept":'application/json'
      }
    })
    result = await result.json()
      console.warn('result', result.detail.msg)
      if (result.username){
          navigate("/Opt_sec");
          setErrorStatus({ error: false, message: 'Login successful' });

      }
      else{
          setErrorStatus({ error: true, message: "Invalid Email or Username" });
      }

  }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (error.confirmPassword === "") {
            signUp()
        }
    };

  return (
    <div className="unn_opt">
      <div className="rb_opt">
        <div className="cre_opt">Create your own AI-generated Avatars</div>
        <div className="creone_opt">
          Create profile pictures, online gaming display pictures, and much more
          on the go.
        </div>
        <div className="d_ava_opt">
          <img
            src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1670070851/ava_zeukiv.png"
            className="ava_opt"
            alt="avatar.png"
          />

        </div>
      </div>
      <div className="house_opt">
        <div className="nav_opt">
          <img
            className="logo_opt"
            src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1670070847/logo_dpfx4a.png"
            alt="logo.png"
          />
        </div>
        <div className="first_opt">
          <div className="get_opt">Sign Up</div>
          <div className="gett_opt">Create new account</div>
          {/*<div className="motion_opt">*/}
          {/*  <div className="one"></div>*/}
          {/*  <div className="two"></div>*/}
          {/*  <div className="three"></div>*/}
          {/*</div>*/}
          <div className="all_opt">
            Already a member?
            <span className="col_opt">
              {" "}
              <a href="\Login">Log in</a>
            </span>
          </div>

          <form id="myform_opt" onSubmit={handleSubmit} method="post">
            {/*<div style={{ display: show ? "block" : "none" }}>*/}
            <div className="opt_error">
              {errorStatus.message && <ErrorSuccessCard error={errorStatus.error} message={errorStatus.message} />}
            </div>
            <div className="ss_opt">
              <div className="sss_opt">
                <label htmlFor="myinput_op">First name</label>
                <br />
                <input
                  id="myinput_op"
                  placeholder="First Name"
                  value={first_name}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  required
                />
                <br />
              </div>
              <div className="sss_opt">
                <label htmlFor="myinput_o">Last name</label>
                <br />
                <input
                  id="myinput_o"
                  value={last_name}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                  type="text"
                  required
                />
                <br />
              </div>
            </div>

            <label htmlFor="myinput_opt">Email</label>
            <br />
            <input
              id="myinput_opt"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            />
            <br />
            {/*<label htmlFor="check_opt" className="container_opt" id="cap">*/}
            {/*  <span className="note_opt">*/}
            {/*    I agree to the terms & service and privacy policy*/}
            {/*  </span>*/}
            {/*  <input*/}
            {/*    type="checkbox"*/}
            {/*    id="check_opt"*/}
            {/*    onClick={() => setShow_s(!show_s)}*/}
            {/*    required*/}
            {/*  />*/}
            {/*  <span className="checkmark" />*/}
            {/*</label>*/}
            {/*<button onClick={click} disabled={show_s} className="mybutton_opt">*/}
            {/*  Continue*/}
            {/*</button>*/}
            {/*</div>*/}

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
                    <img
                      className="info_opt"
                      src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1670070847/info_outline_jgpkxp.png"
                      alt="info.png"
                    />
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
                      src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1670070847/info_outline_jgpkxp.png"
                      alt="info.png"
                    />{" "}
                    {error.confirmPassword}
                  </div>
                )}
              </div>
              <Button
                role="Opt_submit"
                className="mybutton_opt"
                id="mybutton_opt"
                type="submit"
              >
                Sign Up
              </Button>
              <Button className="button_opt" onClick={signup}>
                <div className="gog_opt">
                  <img
                    src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1670070846/google_npmeof.png"
                    className="google_opt"
                    alt="google.png"
                  />
                  <span className="annoyed_opt">Sign Up with Google</span>
                </div>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
