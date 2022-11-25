import lock from "../../assets/images/lock.png";
import Button from "../landingPage/Button/Button";
import { Link } from "react-router-dom";

const CheckEmail = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col gap-8 items-center justify-center">
        <div className="bg-[#F3F0FF] p-5 rounded-full">
          <img src={lock} alt="" />
        </div>
        <div className="flex flex-col gap-2 text-center">
          <h1 className="font-bold text-[#333333] text-4xl">Check your mail</h1>
          <p className="text-2xl text-[#333] font-medium max-w-lg text-center">
            We sent a password reset link to name@mail.com
          </p>
        </div>
        <Button className="w-full bg-[#8B70E9] text-white">
          <Link to="/reset-password">Check mail app</Link>
        </Button>
        <p className="text-center text-[#333333] text-xl font-semibold">
          Didn't receive the email?{" "}
          <a href="" className="text-[#8B70E9]">
            Click to resend
          </a>
        </p>
      </div>
    </div>
  );
};

export default CheckEmail;
