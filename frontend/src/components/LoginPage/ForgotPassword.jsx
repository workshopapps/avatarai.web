import lock from "./LoginImg/lock.svg";
import Button from "../landingPage/Button/Button";
import { Link, Navigate } from "react-router-dom";
import  designL from './LoginImg/designL.svg'
import  designR from './LoginImg/designR.svg'
import  mdesign from './LoginImg/mdesign.svg'
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorModal from "../faq/faqHero/errorModal";
import SuccessModal from "../faq/successModal";



const ForgotPassword = () => {

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  const watchEmail = watch("sendEmail");

  const [emailField, setEmailField] = useState("")
const [errorInFormInput, setErrorInFormInput] = useState(false)
const [showErrorModal, setshowErrorModal] = useState(false)
const [showSuccessModal, setShowSuccessModal] = useState(false)


const closeModal =()=>{
  setTimeout(() => {
    setShowSuccessModal(false)
  }, 1000);
 
}

const resetFormField =()=>{
  setEmailField("")
}
  const clicked =(e)=>{
    const {value} = e.target;
    setEmailField(value)
  }
const validate=()=>{

  if(
    !new RegExp( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(emailField)
){
 setErrorInFormInput(true)
}else{
  setEmailField('')
  console.log(emailField)
  setErrorInFormInput(false)
  requestEmail(emailField)
}  
}




// POST request using fetch()
const requestEmail = async (username)=>{
  
    const response= await fetch("https://zuvatar.hng.tech/api/v1/forgotPassword", {

      // Adding method type
  
      method: "POST",
  
       
  
      // Adding body or contents to send
  
      body:{
  
        "username": username
  
      },
  
       
  
      // Adding headers to the request
  
      headers: {
  
          "Content-type": "application/json"
  
      }
  })
  console.log(response)
  if(response.status===200){
    navigate('/check-email')
  }
  if(response.status===422){
    setshowErrorModal(true)
  }
  
  
 
 
// // Converting to JSON
// .then(response => response.json())
 
// // Displaying results to console
// .then(json => console.log(json));
}



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
        <div
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full max-[480px]:w-[130%]"
        >
          {
              errorInFormInput ?
              <h2 className='text-red-500 font-semibold text-center'>
            ⚠ Please input a valid email address</h2>
            :
            ""
            }

          <input
            name="email"
            required
            type="email" value={emailField}
            onChange={clicked}
            placeholder="Email address"
            className=" border p-4 w-[77%] ml-[10%] my-1 rounded-lg outline-none max-[480px]:w-[100%]mt-0`"
          />

            {/* pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
           {/* {`border ${ */}
              {/* errors.sendEmail && "border-red-600"
            }  */} 
          {errors.sendEmail && (
            <span className="text-xs text-red-600">
              Please enter a valid email address
            </span>
          )}
          <button className="w-[77%] p-[3%] rounded-[11px] mt-6 bg-[#8B70E9] text-white font-[Nunito] text-[22px] ml-[10%] max-[480px]:w-[100%]pr-[50%]" onClick={validate}>
            Send
          </button>
        </div>
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
