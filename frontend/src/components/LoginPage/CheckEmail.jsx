import lock from "../../assets/images/lock.png";
import Button from "../landingPage/Button/Button";
import { Link } from "react-router-dom";

import mailbox from "./LoginImg/mailbox.svg";
import { useContext } from "react";
import { NavContext } from "../../../context/nav-context";

const CheckEmail = () => {
  const {resetEmail} = useContext(NavContext)

  return (
    <div className="flex flex-col md:p-0 justify-center items-center h-screen font-nunito">
      <div className="flex flex-col w-full max-w-xl px-6 gap-6 md:gap-8 items-center justify-center">
        <img className="w-[49.54%]  h-[56.34%]" src={mailbox} alt="" />

        <div className="flex flex-col gap-2 text-center">
          <h1 className="font-bold text-[#333333] text-[16px] xl md:text-4xl">
            Check your email
          </h1>
          <p className="text-sm md:text-2xl text-[#333] font-medium max-w-[278px] md:max-w-lg text-center">
            A password reset link has been sent to {resetEmail} click on
            the link to reset your password.
          </p>
        </div>
        <Button className="w-full bg-[#8B70E9] text-white">
          <Link to="#">Open Email App</Link>
        </Button>
        <p className="text-[16px] md:text-2xl text-[#333] font-medium max-w-[278px] md:max-w-lg text-center">
          Didn't receive the email?{" "}
          <a href="" className="text-[16px] md:text-2xl text-[#8B70E9]">
            Resend
          </a>
        </p>
      </div>
    </div>
  );
};

export default CheckEmail;
