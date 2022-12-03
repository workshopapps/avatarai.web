import lock from "./LoginImg/lock.svg";
import Button from "../landingPage/Button/Button";
import { Link } from "react-router-dom";
import  designL from './LoginImg/designL.svg'
import  designR from './LoginImg/designR.svg'
import  mdesign from './LoginImg/mdesign.svg'
import { useForm } from "react-hook-form";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  const watchEmail = watch("sendEmail");

  return (
    <div
      className="flex flex-col justify-center items-center h-screen
    w-screen overflow-hidden"
    >
      <div className="flex flex-col w-full max-w-xl px-6 gap-6 md:gap-8 items-center justify-center">
        <div className="bg-[#F3F0FF] p-3 md:p-5 rounded-full mr-[5%]">
          <div
            className="w-[60px] md:w-[220px] ld:w-[220px] h-[60px] md:h-[220px] ld:h-[220px] "
            style={{
              backgroundImage: `url(${lock})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-2 text-center max-[480px]:text-start">
          <h1 className="font-bold text-[#333333] text-xl md:text-4xl max-[480px]:text-center">
            Forgot Password?
          </h1>
          <p className="text-sm md:text-2xl text-[#808080] font-[28px] max-w-[200px] md:max-w-[500px] text-center max-[480px]:text-left max-w-[900px] ">
            Please enter the email address associated with this account
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full max-[480px]:w-[130%]"
        >
          <input
            name="email"
            required
            type="email"
            placeholder="Email address"
            className={`border ${
              errors.sendEmail && "border-red-600"
            } p-4 w-[77%] ml-[10%] my-1 rounded-lg outline-none max-[480px]:w-[100%]mt-0`}
            {...register("sendEmail", {
              required: true,
              pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            })}
          />
          {errors.sendEmail && (
            <span className="text-xs text-red-600">
              Please enter a valid email address
            </span>
          )}
          <Button className="w-[77%] mt-6 bg-[#8B70E9] text-white font-[Nunito] text-[22px] ml-[10%] max-[480px]:w-[100%]pr-[50%]">
            {!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
              watchEmail
            ) ? (
              "Send"
            ) : (
              <Link to="/check-email">Send</Link>
            )}
          </Button>
        </form>
        <div class="absolute bottom-[0] left-[-42vw] w-[42%] max-[1024px]:left-[-88%] max-[480px]:hidden ">
          <img src={designL} alt="design" />
        </div>
        <div class="max-[480px]:absolute top-[-70%] right-[-45vw] w-[25%] min-[480px]:relative mt-[-45%] right-[-45vw] ">
          <img src={designR} alt="design" />
        </div>
        <div class="max-[480px]:absolute bottom-[9%] left-0 w-20 mr-[90%] min-[480px]:hidden">
          <img src={mdesign} alt="design" />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
