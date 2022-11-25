import lock from "../../assets/images/lock.png";
import Button from "../landingPage/Button/Button";
import { Link } from "react-router-dom";

const CheckEmail = () => {
  return (
    <div className="flex flex-col pt-[120px] md:p-0 md:justify-center items-center h-screen">
      <div className="flex flex-col w-full max-w-xl px-6 gap-6 md:gap-8 items-center justify-center">
        <div className="bg-[#F3F0FF] p-3 md:p-5 rounded-full">
          <img className="w-4 h-4 md:w-8 md:h-8" src={lock} alt="" />
        </div>
        <div className="flex flex-col gap-2 text-center">
          <h1 className="font-bold text-[#333333] text-xl md:text-4xl">
            Check your mail
          </h1>
          <p className="text-sm md:text-2xl text-[#333] font-medium max-w-[278px] md:max-w-lg text-center">
            We sent a password reset link to name@mail.com
          </p>
        </div>
        <Button className="w-full bg-[#8B70E9] text-white">
          <Link to="/reset-password">Check mail app</Link>
        </Button>
        <p className="text-sm md:text-2xl text-[#333] font-medium max-w-[278px] md:max-w-lg text-center">
          Didn't receive the email?{" "}
          <a href="" className="text-sm md:text-2xl text-[#8B70E9]">
            Click to resend
          </a>
        </p>
      </div>
    </div>
  );
};

export default CheckEmail;
