import "./Contact.css";
import Navbar from "../landingPage/Navbar/Navbar";
// import Footer from "../landing-page/footer/Footer";
import Foooter from "../footer/Foooter";
import FaqNewsletter from "../faq/FaqNewsletter";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { NavContext, pages } from "../../../context/nav-context";
import FaqNewsletter from "../faq/FaqNewsletter"
import Button from "../landingPage/Button/Button";
// import { Link } from "react-router-dom";

const Contact = () => {

    let [overlay, setOverlay] = useState('overlay-visible')  
    let [status, setStatus] = useState('')
    let [message, setMessage] = useState('')
    let [stateColor, setStateColor] = useState('')

    const {setPage} = useContext(NavContext)
    useEffect(()=>{
     setPage(pages.ContactUs)
    },[])

    function sendMessage(){
      postMessage({
        "email": [
          document.getElementById('email').value
        ]
      })
      document.getElementById('contact-form').reset()
      setOverlay('overlay-visible')
    }
    const postMessage = async(info)=>{
      try {
        const response = await fetch("https://zuvatar.hng.tech/api/v1/contactForm", {
          method: "POST",
          headers: {
            'content-type': 'application/json',
            'accept': 'application/json',
          },
          body: JSON.stringify(info)
        })
         
        if(response.status === 200){
          setStatus(':) Success')
          setMessage('Your response was successfully sent, Thanks for contacting us')
          setStateColor('green')
        }
        else{
          setStatus('Request failed :(')
          setMessage(`Oops we ran into a ${response.status} error while trying to send your message, please try again later`)
          setStateColor('red')
        }
      } catch (error) {  
        console.log(error)
      }
    }

    return (
      <div>
        <Navbar />
        <div className="barner">
          <div className="overlay"></div>
          <img
            className="contact-img"
            src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1670061928/barner_kl4dyj.png"
          />
          <div className="barner-text">
            <h1 className="text-white font-semibold text-2xl mb-5">
              Contact Us!
            </h1>
            <p className="text-white font-semibold text-5xl mb-5">
              How Can We Help You ?
            </p>
            <Button className="text-white bg-violet-500 p-3 rounded-md">
              Send A Message
            </Button>
          </div>
        </div>
        <div className="flex max-[1000px]:block">
          <form className="contact-form p-10" id="contact-form" onSubmit={(e) => {
            e.preventDefault()
            sendMessage()
          }}>
            <h2 className="font-semibold text-5xl mb-5">
              Have some Questions ?
            </h2>
            <p className="">
              Do you have a quick message for us? Kindly send us a message using
              the form and we will be in touch with you as soon as possible.
              Thanks!
            </p>
            <div className="mt-5">
              <label htmlFor="name" className="text-xl">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Jane Doe"
                className="block border border-gray-400 p-3 rounded-md w-full"
                required
              />
            </div>
            <div className="mt-5">
              <label htmlFor="email" className="text-xl">
                Email adress
              </label>
              <input
                type="email"
                id="email"
                placeholder="janedoe@gmail.com"
                className="block border border-gray-400 p-3 rounded-md w-full"
                required
              />
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="text-xl">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Write your message here..."
                className="block border border-gray-400 p-3 rounded-md w-full"
                rows="5"
                required
              />
            </div>
            <button className="text-white bg-violet-500 p-3 rounded-md w-full mt-5">
              Contact Us
            </button>
          </form>
          <img
            className="w-1/2 contact-img max-[1000px]:w-3/4"
            src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1670061925/illus_ubfd58.png"
          />
        </div>

        <div className="contact-overlay" id={overlay} onClick={() => {setOverlay('overlay-hidden')}}>
            <div className='contact-modal bg-white p-10 rounded-md'>
                  <h3 className={`text-4xl text-${stateColor}-500`}>{status}</h3><hr/>
                  <p className="mt-5">{message}</p>
                  <button className="mt-5 p-2 rounded-md" onClick={() => {setOverlay('overlay-hidden')}}
                  style={{border: `1px solid ${stateColor}`}}>Close</button>
            </div>
        </div>

        <FaqNewsletter />
        <Foooter />
      </div>
    );
};

export default Contact;
