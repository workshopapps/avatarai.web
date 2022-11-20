import React, {Fragment} from "react";
import { Link } from "react-router-dom";
import log from "../../assets/images/log.png";
import Button from "../landingPage/Button/Button";
import Navbar from "../landingPage/Navbar/Navbar";

const Login = ({props}) => {
  return (
    <Fragment>
      <Navbar />
  
    <div className="flex flex-col md:flex-row md:justify-between items-center gap-20 md:pl-20 p-10 h-screen">
      <div className="md:w-1/2 w-full">
        <h1 className="text-2xl py-5">Welcome back</h1>
        <h6 className="pb-5">Log in to have access to your account</h6>
        <form className="flex flex-col gap-y-5 ">
          <div className="flex flex-col w-full">
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="Email address"
              className="border p-3 w-full my-1 rounded-lg outline-none"
            />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input
              type="text"
              placeholder="Password"
              className="border p-3 w-full my-1 rounded-lg outline-none"
            />
          </div>
          <div className="flex justify-between outline-none">
            <span className="space-x-3">
            <input type="checkbox" name="" id="" />
            <span>Remenber</span>
            </span>
       <p className="text-purple"><Link to="/forgot_password">Forgot Password</Link></p>
          </div>
          <Button className="w-full bg-purple text-white">Log in</Button>
        </form>
        <p className="text-center py-5">Dont have an account? <a href="sign-up" className="text-purple">Sign Up</a></p>
      </div>
      <div className="h-screen md:w-1/2 bg-purple flex flex-col md:p-15 p-10  items-center justify-center">
        <div className=" w-[305px]">
        <img src={log} alt="" className="bg-white    rounded-full object-scale-down "/>
        </div>
        <p className="text-white text-xl text-center lg:p-10 pt-5">Generate and customize AI Avatars just the way you like it!</p>
      </div>
   
    </div>
    </Fragment>
  );
};

export default Login;
