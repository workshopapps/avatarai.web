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
      <div className="section-footer">
        <div className="part1">
          <div className="logo">
            <Link to="/">
              <img src="/tapart.svg" height={`40px`} width={`40px`} />
            </Link>
          </div>
          <div className="text">
            <p className='sub'>Subscribe to our newsletter for info for new avatar scenes,blogs and updates</p>
            <p id='class3'>Are you looking to stay up to date with the latest news and trends? Subscribe to our page to get the latest updates on the topics that matter to you!</p>
          </div>
        </div>
        <div className="part2">
          <div className="error">
            {errorInFormInput ? (
              <h2 className="text-red-500 font-semibold ml-3">
                ⚠ Please input a valid email address
              </h2>
            ) : (
              ""
            )}
          </div>
          <div className="big-div">
            <div className='small-div'>
            <div className="input2">
              <img className='pl-1' src="/sms.svg" />
              <input type="text"                  
                  placeholder="Enter your email address"
                  name="email"
                  value={emailField}
                  onChange={clicked}
                  className='sad'
              />
            </div>
            <button 
                id="subscribe"
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
          header={"Thanks for subscribing with Zuvatar!!!"}
          text={" Check your mail to keep up with our newsletter."}
          Image={() => (
            <img
              src={green}
              alt="green tick"
              className="w-[5rem] md:w-[7rem] pt-3"
            />
          )}
        />
      ) : (
        ""
      )}
      {showErrorModal ? (
        <Modal
        setShow={setshowErrorModal}
        header={' Oops!! Something when wrong '}
        Image={()=>(<img src={red} alt="red tick" className="w-[5rem] md:w-[7rem] pt-3" />)}
        />
      ) : (
        ""
      )}
    </section>
    // <section className="bg-[#F9F9FB] section-width">
    //   <div className="flex flex-col md:flex-row md:items-center justify-between  bg-[#F9F9FB] md:px-[4rem] px-[1.5rem] md:[90%] m-auto py-[3.5rem]">
    //     <div className="justify-between md:flex-[]">
    //       <div className="flex flex-col gap-[24px] w-[100%] md:w-[100%]">
            // <Link to="/">
            //   <img src="/tapart.svg" height={`40px`} width={`40px`} />
            // </Link>

    //         <div className="flex flex-col gap-[8px] w-[85%]">
    //           <p
    //             data-testid="subscribe"
    //             className="text-[#201F23] font-jakarta font-bold"
    //           >
    //             Subscribe to our newsletter for info for new avatar scenes,
    //             blogs and updates
    //           </p>
    //           <p className="text-[#605E65] font-nunito">
    //           Are you looking to stay up to date with the latest news and trends? Subscribe to our page to get the latest updates on the topics that matter to you!

    //           {/* With our page, you can stay in the loop about the topics you care about most. We offer a variety of content for you to choose from, such as industry news, product reviews, and more. We’ll also keep you informed about upcoming events and special offers.
    //           When you subscribe to our page, you’ll get regular updates so you never miss out on what’s happening. Plus, you can customize your subscription to receive only the topics that interest you most. */}

    //           {/* Subscribe now to start receiving the latest news and trends from our page! */}
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     {/* <div className=" lg:flex-[100%] md:flex-[0%]"></div> */}
    //     <div className="w-[45%]">
    //       <div className="flex flex-col gap-[16px] w-[100%]   pt-[2rem]">
            // {errorInFormInput ? (
            //   <h2 className="text-red-500 font-semibold ml-3">
            //     ⚠ Please input a valid email address
            //   </h2>
            // ) : (
            //   ""
            // )}

    //         <div
    //           id="big-div"
    //           className=" flex items-center md:gap-4 gap-1 justify-between rounded-[5px] p-[5px] h-[52px] w-full max-w-[512px] bg-white"
    //         >
    //           <div
    //             id="input"
    //             className="border border-[#403E46] h-full flex justify-between md:gap-[8px] gap-1 items-center font-nunito grow text-[#848484] rounded py-[8px] md:pl-[12px] pl-2"
    //           >
                // <img className='pl-1' src="/sms.svg" />
    //             <input
    //               type={`text`}
    //               id='input-faq'
    //               className="grow outline-none "
                  // placeholder="Enter your email address"
                  // name="email"
                  // value={emailField}
                  // onChange={clicked}
    //             />
    //           </div>

    //           <button
    //             id="subscribe"
    //             onClick={validate}
    //             className="text-white border-[#8B70E9] cursor-pointer  bg-[#8B70E9] h-full relative flex items-center font-nunito rounded-[5px] px-[20px] py-[8px]"
    //           >
    //             Subscribe
    //           </button>
    //         </div>
    //         <p className="text-[#AFB6B6] text-sm px-2">
    //           By subscribing you agree to accept newsletters and emails from us.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
      // {showSuccessModal ? (
      //   <Modal
      //     setShow={setShowSuccessModal}
      //     header={"Thanks for subscribing with Zuvatar!!!"}
      //     text={" Check your mail to keep up with our newsletter."}
      //     Image={() => (
      //       <img
      //         src={green}
      //         alt="green tick"
      //         className="w-[5rem] md:w-[7rem] pt-3"
      //       />
      //     )}
      //   />
      // ) : (
      //   ""
      // )}
      // {showErrorModal ? (
      //   <Modal
      //   setShow={setshowErrorModal}
      //   header={' Oops!! Something when wrong '}
      //   Image={()=>(<img src={red} alt="red tick" className="w-[5rem] md:w-[7rem] pt-3" />)}
      //   />
      // ) : (
      //   ""
      // )}
    // </section>
  );
};

export default FaqNewsletter;
