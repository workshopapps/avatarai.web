import lock from "../../assets/images/loc.png";
import Button from "../landingPage/Button/Button";
import { Link } from "react-router-dom";

const PasswordReset = () => {
  return (
    <div className="flex flex-col pt-[120px] md:p-0 md:justify-center items-center h-screen">
      <div className="flex flex-col w-full max-w-xl px-6 gap-6 md:gap-8 items-center justify-center">
        <div className="bg-[#F3F0FF] rounded-full">
          <img className="w-[72px]" src={lock} alt="" />
        </div>
        <div className="flex flex-col gap-2 text-center">
          <h1 className="font-bold text-[#333333] text-xl md:text-4xl">
            Password Reset
          </h1>
          <p className="text-sm md:text-2xl text-[#333] font-medium max-w-[278px] md:max-w-lg text-center">
            Your password has been successfully reset click below to log in
          </p>
        </div>
        <Button className="w-full bg-[#8B70E9] text-white">
          <Link to="/dashboard">Continue</Link>
        </Button>
      </div>
    </div>
  );
};

export default PasswordReset;
