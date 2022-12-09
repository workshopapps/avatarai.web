import lock from "./LoginImg/lock.svg";
import Button from "../landingPage/Button/Button";
import { useNavigate } from "react-router-dom";
import { createContext, useState } from "react";
import { useAuth } from "../../../context/auth-context";
import { useContext } from "react";

const RpContext = createContext();

const ResetPassword = () => {
  const [pwd, setPwd] = useState({
    new_password: "",
    confirm_password: "",
  });
  const [errMessage, setErrMessage] = useState("");

  const [invalid, setInvalid] = useState(false);

  const {resetDetails:{
    email
  }} = useAuth()



  const invalidPassword = pwd.new_password.length < 8;
  const pwdNotMatch = pwd.new_password != pwd.confirm_password;

  const [closeAuthModal, setCloseAuthModal] = useState(false);
  const navigate = useNavigate()

  const handleChange = ({ target }) => {
    if (invalid) {
      setInvalid(false);
    }
    let name = target.name;
    let value = target.value;
    setPwd((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (invalidPassword) {
      setInvalid(true);
      setErrMessage("passwords must be longer than seven characters");

      return;
    }
    if (pwdNotMatch) {
      setInvalid(true);
      setErrMessage("passwords don't match");
      return;
    }
    setInvalid(false);
    fetch("https://zuvatar.hng.tech/api/v1/updatepassword", {
      method: "PUT",
      body: JSON.stringify({ email, password: pwd.new_password }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        if (res.status === 201||res.status===200) {
          setPwd({
            new_password: "",
            confirm_password: "",
          });
          navigate('/password-reset')
        } else {
          setInvalid(true);
          setErrMessage(
            `password reset failed. got a ${res.status} code, try again.`
          );
          setTimeout(() => setErrMessage(""), 3000);
        }
      })
      .catch(() => {
        setInvalid(true);
        setErrMessage(
          "password reset failed. Check your network and try again."
        );
        setTimeout(() => setErrMessage(""), 3000);
      });

    setPwd({
      new_password: "",
      confirm_password: "",
    });
  };

  return (
    <RpContext.Provider value={{setCloseAuthModal}}>
      {!closeAuthModal&&(
        <AuthenticationPopup/>
      )}
      <div className="flex flex-col pt-[120px] md:p-0 md:justify-center items-center h-screen">
        <div className="flex flex-col w-full max-w-xl px-6 gap-6 md:gap-8 items-center justify-center">
          <div className="bg-[#F3F0FF] p-3 md:p-5 rounded-full">
            <img
              className=" h-[60px] w-[60px] md:w-[100px] md:h-[100px]"
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
          <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full">
            <div className="flex flex-col">
              {invalid && (
                <span className="text-xs text-red-600">{errMessage}</span>
              )}
              <label
                htmlFor="new-password"
                className="font-semibold font-[16px] md:font-[20px]"
              >
                New password
              </label>
              <input
                name="new_password"
                required
                type="password"
                placeholder="New password"
                className={`border ${
                  invalid && invalidPassword && "border-red-600"
                } p-3 md:p-5 w-full my-1 rounded-lg outline-none`}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="confirm-password" className="font-semibold">
                Confirm password
              </label>
              <input
                name="confirm_password"
                required
                type="password"
                placeholder="Confirm password"
                className={`border ${
                  invalid && pwdNotMatch && "border-red-600"
                } p-3 md:p-5 w-full my-1 rounded-lg outline-none`}
                onChange={handleChange}
              />
              <Button
                type="submit"
                className="w-full flex align-center justify-center bg-[#8B70E9] mt-8 text-white h-[58px] md:h-[68px] 
                text-lg md:text-3xl font-nunito"
              >
                
                  "Reset Password"
              
              </Button>
            </div>
          </form>
        </div>
      </div>
    </RpContext.Provider>
  );
};

export default ResetPassword;

const AuthenticationPopup = () => {
  const {setCloseAuthModal} = useContext(RpContext)
  const [pin, setPin] = useState("");
  const { resetDetails:{
    pin: resetPin
  } } = useAuth();
  const [error, setError] = useState("");
  const [invalid, setInvalid] = useState(false)


  const handleChange = ({ target }) => {
    if(target.value.length>6){
      setError("pins length shouldn't be longer than 6")
      setTimeout(()=>setError(''), 3000)
      return
    }
    
    if(!Number(target.value)&&target.value!='0'){
      if(target.value.length){

        setError('you can only input numbers')
        setInvalid(true)
        setTimeout(()=>{
          setInvalid(false)
          setError('')
        }, 3000)
        return
      }
    }
    setPin(target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (pin == resetPin) {
      setCloseAuthModal(true)
    } else {
      setError("incorrect pin, check your email and try again");
      setInvalid(true)
      setTimeout(()=>{
        setInvalid(false)
        setError('')
      }, 5000)
    }
  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center absolute left-0 top-0 bg-[#3336]">
      <div className="max-w-[600px] w-[85vw] h-[300px] bg-[#fff] p-6 flex flex-col items-center border-box br-[10px]  rounded-2xl">
        <h3
          className="font-nunito mb-[20px] font-[700]
          text-[18px] md:text-[24px] w-full text-center"
        >
          Enter pin sent to email
        </h3>
        {error && (
          <span className="text-xs text-red-600 display-block text-center w-full">
            {error}
          </span>
        )}
        <form onSubmit={onSubmit} className="w-full">
          <div className="flex flex-col">
            <label htmlFor="pin" className="font-[600] m-auto w-[90%] mb-1">
              Pin
            </label>
            <input
              type="pin"
              name="pin"
              id="pin"
              min={6}
              max={6}
              required
              placeholder="Enter pin"
              value={pin}
              onChange={handleChange}
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
