// import lock from "../../assets/images/lock.png";
import mail_opt from '../LoginPage/LoginImg/mail_box.svg';
import Button from "../landingPage/Button/Button";
import { Link } from "react-router-dom";
import  designL from './LoginImg/designL.svg'
import  designR from './LoginImg/designR.svg'
import  mdesign from './LoginImg/mdesign.svg'
import { useContext } from 'react';
import { ForgetPasswordContext } from '../../../context/forgetpassword-context';

const CheckEmail = () => {
  const {emailForgot}=useContext(ForgetPasswordContext)
  const mydata = localStorage.getItem("opt_mail")
  return (
    <div className="flex flex-col pt-[120px] w-[100vw] md:p-0 md:justify-center items-center h-screen">
      <div className="flex flex-col w-full max-w-xl px-6 gap-6 md:gap-8 items-center justify-center">
        <div>
          <img className="w-[55%] ml-[30%]" src={mail_opt} alt="" />
        </div>
        <div className='w-[100%] content-center justify-center '>
        <div className="flex flex-col gap-2 text-center">
          <h1 className=" text-center font-bold text-[#333333] text-xl md:text-4xl text-center">
            Check your email address
          </h1>
        </div>
        <div>
        <p className=" pb-[5%] pt-[5%] text-[22px] text-center md: pb-[5%] text-center md:w-[100%] pt-[5%] text-[#808080] text-[32px] mt-[-2%] font-[500] tracking-[0.2px]">
        A password reset link has been sent to <span className='text-[#6C6191] font-[700]'>{emailForgot}</span> click on the link to reset your password.
          </p>
        </div>
          <div>
            <div className='w-[100%] justify-center content-center'>
          <button className=" w-[100%] items-center content-center justify-center p-[12px] rounded-[8px] md:w-[60%] justify-center rounded-[8px] md:ml-[20%] p-[12px] bg-[#8B70E9] md:text-white sm:w-[60%]">
          <Link to="/reset-password">Continue</Link>
          </button>
          </div>
          <div className='ml-[-50%]'>
          <p className=" w-[130%] text-[#808080] text-center mt-[4%] md:w-[130%]  text-[15px] text-center">
          Didn't receive the e-mail?{""}
          <a href="" className=" md:font-[700] text-[#8B70E9] text-[15px] ">
            Resend
          </a>
        </p>
          </div>
          </div>
        </div>
        
        
        
      </div>
      <div class=' md:relative bottom-0 left-[-33vw] w-[42%] :left-[-88%] max-[480px]:hidden '>
          <img src={designL} alt='design'/>
        </div>
        <div class='max-[480px]:relative top-[-25%] right-[-40vw] w-[25%] min-[480px]:relative mt-[-45%] right-[-45vw] max-[380px]:top-[-60%] md:right-[-45%] '>
          <img src={designR} alt='design'/>
        </div>
        <div class='max-[480px]:relative bottom-[2%] left-0 w-20 mr-[80%] min-[480px]:hidden'>
          <img src={mdesign} alt='design'/>
        </div>
    </div>
  );
};

export default CheckEmail;
