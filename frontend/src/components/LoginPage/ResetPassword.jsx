import lock from "./LoginImg/lock.svg";
import Button from "../landingPage/Button/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";

const ResetPassword = () => {
  const [formData, setFormData] = useState(() => {});

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => setFormData(data);
  const watchPasswords = watch(["newPassword", "confirmPassword"]);

  return (
    <div className="flex flex-col pt-[120px] md:p-0 md:justify-center items-center h-screen">
      <div className="flex flex-col w-full max-w-xl px-6 gap-6 md:gap-8 items-center justify-center">
        <div className="bg-[#F3F0FF] p-3 md:p-5 rounded-full">
          <img
            className="w-4 h-[60px] w-[60px] md:w-[160px] md:h-[160px]"
            src={lock}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4 items-center">
          <h1 className="font-bold text-[#333333] text-xl md:text-4xl">
            Reset Password
          </h1>
          <p className="text-sm md:text-2xl text-[#808080] font-medium font-nunito max-w-[278px] md:max-w-lg text-center">
            Please enter a new password for this account
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full"
        >
          <div className="flex flex-col">
            <label htmlFor="new-password"
            className="font-semibold font-[16px] md:font-[20px]">New password</label>
            <input
              name="new-password"
              required
              type="password"
              placeholder="New password"
              className={`border ${
                errors.newPassword && "border-red-600"
              } p-3 md:p-5 w-full my-1 rounded-lg outline-none`}
              {...register("newPassword", { required: true, minLength: 8 })}
            />
            {errors.newPassword && (
              <span className="text-xs text-red-600">
                Password must be at least 8 characters long
              </span>
            )}
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="confirm-password"
            className="font-semibold">Confirm password</label>
            <input
              name="confirm-password"
              required
              type="password"
              placeholder="Confirm password"
              className={`border ${
                formData?.newPassword !== formData?.confirmPassword &&
                "border-red-600"
              } p-3 md:p-5 w-full my-1 rounded-lg outline-none`}
              {...register("confirmPassword", { required: true, minLength: 8 })}
            />
            {formData?.newPassword !== formData?.confirmPassword && (
              <span className="text-xs md:text-sm text-red-600">
                Passwords do not match! Please confirm
              </span>
            )}
            <Button
              className="w-full flex align-center justify-center bg-[#8B70E9] mt-8 text-white h-[58px] md:h-[68px] 
              text-lg md:text-3xl font-nunito"
            >
              {watchPasswords[0] === watchPasswords[1] &&
              watchPasswords[0]?.length > 7 ? (
                <Link
                  to={`/password-reset`}
                  className="text-white flex align-center justify-center text-center m-0 p-0
              text-lg md:text-3xl font-nunito"
                >
                  Reset Password
                </Link>
              ) : (
                "Reset Password"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
