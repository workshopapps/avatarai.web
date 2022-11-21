import React from 'react'
import moc from "../../assets/images/moc.png";
import Button from '../landingPage/Button/Button';
import { Link } from 'react-router-dom';
const CheckEmail = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-y-5 mt-10  px-10  h-screen '>
    <img src={moc} alt="" />
    <div className='w-full md:w-[28rem] text-center'>
    <h1 className='text-bold text-3xl py-5'>Check your mail</h1>
    <p className='text-xl'>We sent a password reset link to Ibrahimabasiye1@gmail.com</p>
    </div>
    
      <Button className="w-full md:w-[28rem] bg-purple-500 text-white"><a href="malito:">Check mail app</a></Button>
      
      

</div>
  )
}

export default CheckEmail