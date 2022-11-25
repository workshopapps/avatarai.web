import lock from "../../assets/images/lock.png";
import Button from "../landingPage/Button/Button";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <div className="flex flex-col pt-[120px] md:p-0 md:justify-center items-center h-screen">
      <div className="flex flex-col w-full max-w-xl px-6 gap-6 md:gap-8 items-center justify-center">
        <div className="bg-[#F3F0FF] p-3 md:p-5 rounded-full">
          <img className="w-4 h-4 md:w-8 md:h-8" src={lock} alt="" />
        </div>
        <div className="flex flex-col gap-10 items-center">
          <h1 className="font-bold text-[#333333] text-xl md:text-4xl">
            Reset Password
          </h1>
          <p className="text-sm md:text-2xl text-[#333] font-medium max-w-[278px] md:max-w-lg text-center">
            Your new password must be different from previously used password
          </p>
        </div>
        <form className="flex flex-col gap-4 w-full">
          <div className="flex flex-col">
            <label htmlFor="new-password">New password</label>
            <input
              name="new-password"
              required
              type="password"
              placeholder="New password"
              className="border p-3 my-1 rounded-lg outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirm-password">Confirm password</label>
            <input
              name="confirm-password"
              required
              type="password"
              placeholder="Confirm password"
              className="border p-3 my-1 rounded-lg outline-none"
            />
          </div>
        </form>
        <Button className="w-full bg-[#8B70E9] text-white">
          <Link to="/password-reset">Reset password</Link>
        </Button>
      </div>
    </div>
  );
};

export default ResetPassword;
