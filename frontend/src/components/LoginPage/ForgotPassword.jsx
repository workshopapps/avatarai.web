import lock from "../../assets/images/lock.png";
import Button from "../landingPage/Button/Button";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col gap-8 items-center justify-center">
        <div className="bg-[#F3F0FF] p-5 rounded-full">
          <img src={lock} alt="" />
        </div>
        <div className="flex flex-col gap-2 text-center">
          <h1 className="font-bold text-[#333333] text-4xl">
            Forgot Password?
          </h1>
          <p className="text-2xl text-[#333] font-medium max-w-lg text-center">
            Please enter the email address associated to this account
          </p>
        </div>
        <form className="flex flex-col w-full">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            required
            type="email"
            placeholder="Email address"
            className="border p-3 my-1 rounded-lg outline-none"
          />
        </form>
        <Button className="w-full bg-[#8B70E9] text-white">
          <Link to="/check-email">Send email</Link>
        </Button>
      </div>
    </div>
  );
};

export default ForgotPassword;
