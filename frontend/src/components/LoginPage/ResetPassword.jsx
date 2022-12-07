import lock from "./LoginImg/lock.svg";
import Button from "../landingPage/Button/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

const RpContext = createContext();

const ResetPassword = () => {
  const [formData, setFormData] = useState(() => {});
  const [placeholder, setPlaceholder] = useState(true)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => setFormData(data);
  const watchPasswords = watch(["newPassword", "confirmPassword"]);

  return (
    <RpContext.Provider value={{setPlaceholder}}>
      <div className="flex flex-col pt-[120px] md:p-0 md:justify-center items-center h-screen">
        {placeholder&&<PlaceholderPopup />}
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
              <label
                htmlFor="new-password"
                className="font-semibold font-[16px] md:font-[20px]"
              >
                New password
              </label>
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
              <label htmlFor="confirm-password" className="font-semibold">
                Confirm password
              </label>
              <input
                name="confirm-password"
                required
                type="password"
                placeholder="Confirm password"
                className={`border ${
                  formData?.newPassword !== formData?.confirmPassword &&
                  "border-red-600"
                } p-3 md:p-5 w-full my-1 rounded-lg outline-none`}
                {...register("confirmPassword", {
                  required: true,
                  minLength: 8,
                })}
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
    </RpContext.Provider>
  );
};

export default ResetPassword;

const PlaceholderPopup = () => {
  const {setPlaceholder} = useContext(RpContext)
  const [email, setEmail] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [failedReq, setFailedReq] = useState("");
  const invalidEmail = !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    email
  );

  const onSubmit = (e) => {
    e.preventDefault();
    if (invalidEmail) {
      setInvalid(true);
      return;
    }
    setInvalid(false);
    fetch("https://zuvatar.hng.tech/api/v1/forgotPassword", {
      method: "POST",
      body: JSON.stringify({ username: email }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          setPlaceholder(false)
          console.log(res);
        } else {
          setFailedReq(
            "email may not exist on database, try eddie@gmail.com for testing"
          );
          setTimeout(() => setFailedReq(""), 3000);
        }
      })
      .catch((err) => {
        setFailedReq("could not access database, retry");
        setTimeout(() => setFailedReq(""), 3000);
      });

    setEmail("");
  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center absolute left-0 top-0 bg-[#3336]">
      <div className="max-w-[600px] w-[85vw] h-[300px] bg-[#fff] p-6 flex flex-col items-center border-box br-[10px]  rounded-2xl">
        <h3
          className="font-nunito mb-[20px] font-[700]
          text-[18px] md:text-[24px] w-full text-center"
        >
          Enter email to be authenticated
        </h3>
        {failedReq && (
          <span className="text-xs text-red-600 display-block text-center w-full">
            {failedReq}
          </span>
        )}
        <form onSubmit={onSubmit} className="w-full">
          <div className="flex flex-col">
            <label htmlFor="email" className="font-[600] m-auto w-[90%] mb-1">
              Email
            </label>
            {invalid && (
              <p className="text-red-600 w-[90%] m-auto">invalid email</p>
            )}
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              className={`${
                invalid && "border-red-600"
              } border m-auto p-3 font-nunito md:p-5 w-[90%] rounded-lg outline-none rounder-lg`}
            />
          </div>
          <button
            className="w-full flex flex-row p-4 border-box justify-center align-center bg-[#8B70E9] mt-8 rounded-lg text-white h-[58px] md:h-[68px] text-center m-auto
              text-lg md:text-3xl font-nunito w-[90%]"
          >
            Authenticate
          </button>
        </form>
      </div>
    </div>
  );
};
