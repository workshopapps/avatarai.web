import React, {useState} from 'react'
import lock from "../../assets/images/lock.png";
import Button from '../landingPage/Button/Button';
import { Link } from 'react-router-dom';

const ResetPassword = () => {


  const textHandler = (e) => {
    setText(e.target.value);
  }
  return (

    <div className='flex flex-col justify-center items-center gap-y-5 mt-10  px-10  h-screen '>
    <img src={lock} alt="" />
    <div className='w-full md:w-[28rem] text-center'>
    <h1 className='text-bold text-3xl py-5'>Reset Password</h1>
    <p className='text-xl'>Your new password must be different from previously used password</p>
    </div>
    <div className="flex flex-col w-full md:w-[28rem]">
        <label htmlFor="">New Password</label>
        <input
          type="Password"
          placeholder="Password"
          className="border p-3 w-full md:w-[28rem] my-1 rounded-lg outline-none"
          onChange={textHandler}
        />
      </div>
      <div className="flex flex-col w-full md:w-[28rem]">
        <label htmlFor="">Confirm Password</label>
        <input
          type="Password"
          placeholder="Password"
          className="border p-3 w-full md:w-[28rem] my-1 rounded-lg outline-none"
        />
      </div>
      <Button className="w-full md:w-[28rem] bg-purple text-white"> <Link to="/SetPassword">Reset Password</Link></Button>
      

</div>
  )
}

export default ResetPassword