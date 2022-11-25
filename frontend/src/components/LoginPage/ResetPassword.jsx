import lock from "../../assets/images/lock.png";
import Button from "../landingPage/Button/Button";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col gap-8 items-center justify-center">
        <div className="bg-[#F3F0FF] p-5 rounded-full">
          <img src={lock} alt="" />
        </div>
        <div className="flex flex-col gap-10 items-center">
          <h1 className="font-bold text-[#333333] text-4xl">Reset Password</h1>
          <p className="text-2xl text-[#333] font-medium max-w-lg text-center">
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
