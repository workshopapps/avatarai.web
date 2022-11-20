import React from "react";
import log from "../../assets/images/log.png";
import Button from "../landingPage/Button/Button";

const Login = ({props}) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center gap-20 md:pl-20 h-screen">
      <div className="w-1/2">
        <h1 className="text-2xl py-5">Welcome back</h1>
        <h6 className="pb-5">Log in to have access too your account</h6>
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
            <span className="space-x-5">
            <input type="checkbox" name="" id="" />
            <span>Remenber</span>
            </span>
            <p className="text-purple">Forgot Password</p>
          </div>
          <Button className="w-full">Log in</Button>
        </form>
        <p className="text-center py-5">Dont have an account? <a href="sign-up" className="text-purple">Sign Up</a></p>
      </div>
      <div className="h-screen w-1/2 bg-purple flex flex-col md:p-20 p-10  items-center justify-center">
        <div className=" w-[305px]">
        <img src={log} alt="" className="bg-white    rounded-full object-scale-down "/>
        </div>
        <p className="text-white text-xl text-center md:p-10">Generate and customize AI Avatars just the way you like it!</p>
      </div>
   
    </div>
  );
};

export default Login;
