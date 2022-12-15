import './faqs.css'
//import SuccessModal from './successModal';
//import ErrorModal from './faqHero/errorModal';
import Modal from '../modal/modal';
import green from './images/green.png'
import red from './images/red.png'

import { useState } from 'react';
import {Link} from "react-router-dom";



const FaqNewsletter = () => {
const [emailField, setEmailField] = useState("")
const [errorInFormInput, setErrorInFormInput] = useState(false)
const [showErrorModal, setshowErrorModal] = useState(false)
const [showSuccessModal, setShowSuccessModal] = useState(false)

const closeModal =()=>{
  setTimeout(() => {
    setShowSuccessModal(false)
    setshowErrorModal(false)
  }, 3600);
 
}
const closeModalNow =()=>{
  
    setShowSuccessModal(false)
    setshowErrorModal(false)
 
 
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
  resetFormField()
  setErrorInFormInput(false)
subscribe(emailField)
}

  
}
   
    
  const subscribe = async(userEmail)=>{
    try {
      const response = await fetch("https://zuvatar.hng.tech/api/v1/newsletter", {
        method: "POST",
      
          body:JSON.stringify({
            "email":userEmail
          }),
        
        headers: {
          "Content-Type": "application/json"
        }
       })
       console.log(response, "from najib")
       if(response.status === 200){
       setShowSuccessModal(true)
      closeModal()
       }else{
        setshowErrorModal(true)
        closeModal()
       }
    } catch (error) {
      
      setshowErrorModal(true)
      closeModal()
    }
  
  }

  return (
		<section>
			<div className="section-footer px-5 md:px-[4rem] py-[2rem] max-w-[1400px] mx-auto">
				<div className="part1">
					<div className="logo">
						<Link to="/">
							<img src="/tapart.svg" height={`40px`} width={`40px`} />
						</Link>
					</div>
					<div className="text">
						<p className="class3 text-[#201F23] text-base md:text-[20px] font-bold mb-1">
							Subscribe to our newsletter for info for new avatar scenes, blogs and updates
						</p>
						<p id="" className="text-[#605E65] text-sm md:text-base">
							Are you looking to stay up to date with the latest news and trends? Subscribe to our page to get the
							latest updates on the topics that matter to you!
						</p>
					</div>
				</div>
				<div className="part2 md:pt-[1.2rem]">
					<div className="error">
						{errorInFormInput ? (
							<h2 className="text-red-500 font-semibold ml-3">⚠ Please input a valid email address</h2>
						) : (
							''
						)}
					</div>
					<div className="big-div">
						<div className="w-full flex mb-2 relative">
							<img className="absolute top-[11px] pl-3" src="/sms.svg" />
							<input
								type="text"
								placeholder="Enter your email address"
								name="email"
								value={emailField}
								onChange={clicked}
								className="input pl-10 bg-[#ffffff] border border-[#A3A3A3] rounded-r-none w-full placeholder:text-[#B8B8B8]"
							/>
							<button
								className="inline-flex px-[24px] h-[3rem] font-bold md:px-[40px] py-[15px] outline-none normal-case border-none rounded-r-lg rounded-l-none text-[#ffffff] bg-[#8B70E9]"
								onClick={validate}
							>
								Subscribe
							</button>
						</div>

						<p className="text-[#AFB6B6] text-sm px-2">
							By subscribing you agree to accept newsletters and emails from us.
						</p>
					</div>
				</div>
			</div>
			{showSuccessModal ? (
				<Modal
					setShow={setShowSuccessModal}
					header={'Thanks for subscribing with Zuvatar!!!'}
					text={' Check your mail to keep up with our newsletter.'}
					Image={() => <img src={green} alt="green tick" className="w-[5rem] md:w-[7rem] pt-3" />}
				/>
			) : (
				''
			)}
			{showErrorModal ? (
				<Modal
					setShow={setshowErrorModal}
					header={' Oops!! Something when wrong '}
					Image={() => <img src={red} alt="red tick" className="w-[5rem] md:w-[7rem] pt-3" />}
				/>
			) : (
				''
			)}
		</section>
	);
};

export default FaqNewsletter;
