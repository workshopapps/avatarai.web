import React, {useState} from 'react'
import loc from "../../assets/images/loc.png";
import Button from '../landingPage/Button/Button';
import { Link } from 'react-router-dom';

const PasswordReset = () => {


  return (
    <div className='flex flex-col justify-center items-center gap-y-5 mt-10  px-10  h-screen '>
    <img src={loc} alt="" />
    <div className='w-full md:w-[28rem] text-center'>
    <h1 className='text-bold text-3xl py-5'>Password Reset</h1>
    <p className='text-xl'>Your password has been successfully reset click below to log in </p>
    </div>
    
      <Button className="w-full md:w-[28rem] bg-purple text-white"><Link to="/SetPassword">Continue</Link></Button>
      
      

</div>
  )
}

export default PasswordReset