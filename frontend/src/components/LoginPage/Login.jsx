import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../landingPage/Button/Button";
import Navbar from "../landingPage/Navbar/Navbar";
import { useForm } from "react-hook-form";
import { useGoogleLogin } from "@react-oauth/google";

const Login = ({ props }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [passwordVisibility, setPasswordVisibility] = useState(() => false);

  const handleVisibility = () => {
    setPasswordVisibility((prev) => !prev);
  };

  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
    onError: () => console.log("Login with Google Failed"),
  });

  const onSubmit = async (data) => {
    console.log(data);

    let result = fetch("https://zuvatar.hng.tech/api/user/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    result = await result.json();
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex gap-16 p-6 w-full justify-center max-w-[1440px]">
        <div className="hidden lg:flex flex-col rounded-2xl items-center bg-[#6c6191] justify-center w-full max-w-[535px] px-14 py-32">
          <div className="flex flex-col gap-4 w-full">
            <h2 className="font-nunito font-extrabold text-5xl text-white max-w-2xl">
              Create your own AI-generated Avatars
            </h2>
            <p className="font-nunito font-medium text-2xl text-[#bfc3d4] max-w-xs">
              Create profile pictures, online gaming display pictures, and much
              more on the go.
            </p>
          </div>
          <div className="h-12 w-full"></div>
          <div className="w-full h-[350px] relative">
            <div className="absolute left-44 top-10">
              <img src="/arrow.svg" />
            </div>
            <div className="absolute h-[222px] w-[163px]">
              <div className="absolute -top-2 -left-2 bg-white h-[222px] w-[163px]"></div>
              <img className="absolute" src="/parker-og.png" />
            </div>
            <div className="absolute h-[180px] w-[180px] bottom-0 right-0">
              <div className="absolute bg-white h-[180px] w-[180px] -bottom-2 -right-2"></div>
              <img src="parker-avartar.png" className="absolute" />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full items-center max-w-lg py-2">
          <div className="logo w-10 h-10">
            <img src="/tapart.svg" />
          </div>
          <div className="h-[72px] lg:h-12"></div>
          <div className="flex flex-col gap-4 lg:gap-10 w-full">
            <h1 className="font-nunito font-extrabold lg:text-5xl text-2xl text-[#212529]">
              Log In
            </h1>
            <div className="flex flex-col gap-2">
              <p className="font-nunito font-semibold lg:text-4xl text-base text-[#212529]">
                Hey, Welcome Back
              </p>
              <p className="font-nunito text-[#808080] font-medium text-sm lg:text-2xl">
                Enter the information you used to sign up
              </p>
            </div>
          </div>
          <div className="h-8 lg:h-12"></div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full gap-7 lg:gap-10"
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-black font-nunito font-medium text-sm lg:text-xl"
              >
                Email Address
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                {...register("email", {
                  required: true,
                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                })}
                placeholder="Email Address"
                className="border border-[#121212] py-3  px-4 rounded-md placeholder-[#808080] text-sm lg:text-xl font-nunito font-medium w-full"
              />
              {errors.email && (
                <span className="text-xs text-red-600">
                  Please enter a valid email address
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 relative">
              <label
                htmlFor="password"
                className="text-black font-nunito font-medium text-sm lg:text-xl"
              >
                Password
              </label>
              <input
                type={passwordVisibility ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Password"
                className="border border-[#121212] py-3 px-4 rounded-md placeholder-[#808080] text-sm lg:text-xl font-nunito font-medium w-full"
                {...register("password", {
                  required: true,
                  minLength: 8,
                })}
              ></input>
              <div
                onClick={handleVisibility}
                className="h-5 w-5 absolute lg:top-[53px] top-[42px] right-14 cursor-pointer"
              >
                <img src={passwordVisibility ? "/view.png" : "/hide.png"} />
              </div>
              {errors.password && (
                <span className="text-xs text-red-600">
                  Password must be at least 8 characters long
                </span>
              )}
            </div>
            <div className="flex flex-row justify-between gap-2">
              <div className="flex flex-row gap-2 items-center">
                <input type="checkbox" className="" />
                <span className="font-nunito font-semibold text-[#333] text-sm lg:text-xl">
                  Remember me
                </span>
              </div>
              <span className="font-nunito font-semibold text-sm lg:text-xl text-[#8b70e9]">
                Forgot Password?
              </span>
            </div>
            <button
              type="submit"
              className="bg-[#8b70e9] text-white font-nunito font-bold text-lg lg:text-xl p-4  rounded-lg"
            >
              Log In
            </button>
          </form>
          <div className="h-7 lg:h-10"></div>
          <div
            onClick={googleLogin}
            className="cursor-pointer w-full border border-[#808080] font-nunito font-bold p-4 rounded-lg flex gap-4 items-center justify-center"
          >
            <div className="google h-8 w-8">
              <img src="/google.svg" />
            </div>
            <span className="font-nunito font-semibold text-lg lg:text-xl text-[#808080]">
              Log In with Google
            </span>
          </div>
          <div className="h-6"></div>
          <div>
            <span className="font-nunito font-medium text-sm lg:text-xl text-[#808080]">
              Don't have an account?{" "}
            </span>
            <span className="font-nunito font-bold text-sm lg:text-xl text-[#6c6191]">
              Sign Up
            </span>
          </div>
        </div>
      </div>
    </div>
    // <div className="lg:h-screen">
    //   <Navbar />
    //   <div className="flex flex-col-reverse gap-6 lg:flex-row w-full h-full lg:pl-[60px]">
    //     <div className="flex flex-col gap-6 lg:gap-8 w-full justify-center px-6 lg:px-[60px]">
    //       <div className="flex flex-col gap-1 lg:gap-[10px]">
    //         <h1 className="text-xl lg:text-4xl font-semibold text-[#333333]">
    //           Welcome back
    //         </h1>
    //         <p className="lg:text-2xl font-medium text-[#333333]">
    //           Log in to have access to your account
    //         </p>
    //       </div>
    //       <form
    //         onSubmit={handleSubmit(onSubmit)}
    //         className="flex flex-col gap-8 w-full"
    //       >
    //         <div className="flex flex-col gap-4">
    //           <div className="flex flex-col w-full">
    //             <label className="text-[#333333]" htmlFor="email">
    //               Email
    //             </label>
    //             <input
    //               type="text"
    //               id="email"
    //               placeholder="Email address"
    //               className={`border ${
    //                 errors.email && "border-red-600"
    //               } p-3 w-full my-1 rounded-lg outline-none`}
    //               required
    //               {...register("email", {
    //                 required: true,
    //                 pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    //               })}
    //             />
    //             {errors.email && (
    //               <span className="text-xs text-red-600">
    //                 Please enter a valid email address
    //               </span>
    //             )}
    //           </div>
    //           <div>
    //             <label className="text-[#333333]" htmlFor="password">
    //               Password
    //             </label>
    //             <input
    //               type="password"
    //               id="password"
    //               placeholder="Password"
    //               className={`border ${
    //                 errors.password && "border-red-600"
    //               } p-3 w-full my-1 rounded-lg outline-none`}
    //               required
    //               {...register("password", {
    //                 required: true,
    //                 minLength: 8,
    //               })}
    //             />
    //             {errors.password && (
    //               <span className="text-xs text-red-600">
    //                 Password must be at least 8 characters long
    //               </span>
    //             )}
    //           </div>
    //         </div>
    //         <div className="flex justify-between items-center outline-none">
    //           <div className="flex items-center gap-2 lg:gap-5">
    //             <input
    //               className="h-4 w-4 lg:h-[26px] lg:w-[26px]"
    //               type="checkbox"
    //               name="remember"
    //               id="remember"
    //             />
    //             <span className="text-[#333333] text-base lg:text-[20px] font-medium">
    //               Remember me
    //             </span>
    //           </div>
    //           <p className="text-[#8B70E9] text-base lg:text-[20px] font-medium">
    //             <Link to="/forgot-password">Forgot Password</Link>
    //           </p>
    //         </div>
    //         <Button type="submit" className="w-full bg-[#8B70E9] text-white">
    //           Login
    //         </Button>
    //         <p className="text-center text-[#333333] text-base lg:text-xl font-semibold">
    //           Dont have an account?{" "}
    //           <a
    //             href="sign-up"
    //             className="text-[#8B70E9] text-base lg:text-xl font-semibold"
    //           >
    //             Sign Up
    //           </a>
    //         </p>
    //       </form>
    //     </div>
    //     <div className="flex flex-col-reverse lg:flex-col items-center justify-center gap-[18px] lg:gap-16 w-full">
    //       <div className="w-[128px] lg:w-[305px]">
    //         <img
    //           src={log}
    //           alt=""
    //           className="bg-white rounded-full object-scale-down "
    //         />
    //       </div>
    //       <p className="lg:block hidden text-[14px] lg:text-[32px] font-semibold max-w-[228px] lg:max-w-[547px] text-center text-[#333333]">
    //         Generate and customize AI Avatars just the way you like it!
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Login;
