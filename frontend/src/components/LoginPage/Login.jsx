import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import log from "../../assets/images/log.png";
import Button from "../landingPage/Button/Button";
import Navbar from "../landingPage/Navbar/Navbar";

const Login = ({ props }) => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex w-full h-full pl-[60px]">
        <div className="flex flex-col gap-8 w-full justify-center px-[60px]">
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-4xl font-semibold text-[#333333]">
              Welcome back
            </h1>
            <p className="text-2xl font-medium text-[#333333]">
              Log in to have access to your account
            </p>
          </div>
          <form className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col w-full">
                <label className="text-[#333333]" htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Email address"
                  className="border p-3 w-full my-1 rounded-lg outline-none"
                  required
                />
              </div>
              <div>
                <label className="text-[#333333]" htmlFor="password">
                  Password
                </label>
                <input
                  type="text"
                  id="password"
                  placeholder="Password"
                  className="border p-3 w-full my-1 rounded-lg outline-none"
                  required
                />
              </div>
            </div>
            <div className="flex justify-between items-center outline-none">
              <div className="flex items-center gap-5">
                <input
                  className="h-[26px] w-[26px]"
                  type="checkbox"
                  name="remember"
                  id="remember"
                />
                <span className="text-[#333333] text-[20px] font-medium">
                  Remember me
                </span>
              </div>
              <p className="text-[#8B70E9] text-[20px] font-medium">
                <Link to="/forgot-password">Forgot Password</Link>
              </p>
            </div>
            <Button className="w-full bg-[#8B70E9] text-white">Login</Button>
            <p className="text-center text-[#333333] text-xl font-semibold">
              Dont have an account?{" "}
              <a href="sign-up" className="text-[#8B70E9]">
                Sign Up
              </a>
            </p>
          </form>
        </div>
        <div className="flex flex-col items-center justify-center gap-16 w-full">
          <div className=" w-[305px]">
            <img
              src={log}
              alt=""
              className="bg-white    rounded-full object-scale-down "
            />
          </div>
          <p className="text-[32px] font-semibold max-w-[547px] text-center text-[#333333]">
            Generate and customize AI Avatars just the way you like it!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
