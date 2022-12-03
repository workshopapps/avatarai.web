import tick from "./LoginImg/tick.svg";
import Button from "../landingPage/Button/Button";
import { Link } from "react-router-dom";

const PasswordReset = () => {
  return (
    <div className="flex flex-col md:p-0 justify-center items-center h-screen">
      <div className="flex flex-col w-full max-w-xl px-6 gap-6 md:gap-8 items-center justify-center">
        <div className="rounded-full flex justify-center w-full">
          <img className="md:w-[31.4%] w-[80px]" src={tick} alt="" />
        </div>
        <div className="flex flex-col gap-2 text-center">
          <h1 className="font-bold text-[#333333] text-xl md:text-4xl">
            Password Reset Successfully
          </h1>
          <p className="text-sm md:text-2xl text-[#333] font-medium max-w-[278px] flex justify-center align-center md:max-w-lg text-center">
            Your password has been reset successfully. Log in to your dashboard
          </p>
        </div>
        <Button className="w-full bg-[#8B70E9] text-white h-[54px] font-[600] md:h-[88px] text-lg md:text-3xl">
          <Link
            to="/login"
            className="text-white w-full flex justify-center align-center font-[600] text-lg md:text-3xl"
          >
            Log in
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default PasswordReset;
