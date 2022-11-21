import React, { useState } from "react";
import lock from "../../assets/images/lock.png";
import Button from "../landingPage/Button/Button";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-5 mt-10  px-10  h-screen ">
      <img src={lock} alt="" />
      <div className="w-full md:w-[28rem] text-center">
        <h1 className="text-bold text-3xl py-5">Forgot Password ?</h1>
        <p className="text-xl">
          Please enter the email address associated to this account
        </p>
      </div>
      <form className="flex flex-col w-full md:w-[28rem]">
        <label htmlFor="">Email</label>
        <input
       required
          type="email"
          placeholder="Email address"
          className="border p-3 w-full md:w-[28rem] my-1 rounded-lg outline-none"
        />
      </form>
      <Button className="w-full md:w-[28rem] bg-purple text-white">
        <Link to="/CheckEmail">Log in</Link>
      </Button>
    </div>
  );
};

export default ForgotPassword;
