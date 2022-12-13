import "./Contact.css";
import Navbar from "../landingPage/Navbar/Navbar";
// import Footer from "../landing-page/footer/Footer";
import Foooter from "../footer/Foooter";
import FaqNewsletter from "../faq/FaqNewsletter";
import Modal from "../modal/modal";

import { useEffect, useState } from "react";
import { useContext } from "react";
import { NavContext, pages } from "../../../context/nav-context";
import Loading from "../loading/Loading";
import Failed from "./failed.png";
import Success from "./success.png";

import Button from "../landingPage/Button/Button";
// import { Link } from "react-router-dom";

const Contact = () => {
  //let [overlay, setOverlay] = useState('overlay-hidden')
  const [loading, setLoading] = useState(null);
  const [modal, setModal] = useState(false);

  let [status, setStatus] = useState("");
  let [statusImg, setStatusImg] = useState(null);
  let [message, setMessage] = useState("");
  let [stateColor, setStateColor] = useState("");

  const { setPage } = useContext(NavContext);
  useEffect(() => {
    setPage(pages.ContactUs);
  }, []);

  const loader = (
    <div id="loader">
      <div>
        <Loading />
      </div>
      <p>Sending Message, pleasewait</p>
    </div>
  );
  /*     const modalResponse = (
      <div id="response">
          <h3 className={`text-${stateColor}-500 text-4xl font-semibold`}><img id="statusImg" src={statusImg}/> {status}</h3><hr/>
          <p className="mt-5">{message}</p>
          <button className="mt-5 p-2 rounded-md" onClick={() => {setOverlay('overlay-hidden')}}
        style={{border: `1px solid ${stateColor}`}}>Close</button>
      </div>
    ) */

  function sendMessage() {
    setLoading(loader);
    if (message.length) {
      setStatus("");
      setMessage("");
      setStatusImg(null);
      setStateColor("");
    }

    postMessage({
      firstname: document.getElementById("firstname").value,
      lastname: document.getElementById("lastname").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    });
    //document.getElementById('contact-form').reset()
    //setOverlay('overlay-visible')
    setModal(true);
  }
  const postMessage = async (info) => {
    // setModalContent(loader)
    try {
      const response = await fetch(
        "https://zuvatar.hng.tech/api/v1/contactForm",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            accept: "application/json",
          },
          body: JSON.stringify(info),
        }
      );

      if (response.status === 200) {
        //setModalContent(modalResponse)
        setStatusImg(Success);
        setStatus("Success !");
        setMessage(
          "Your message was successfully sent, Thanks for contacting us and watchout for our response"
        );
        setStateColor("green");
        setLoading(null);
        setStatusImg(Success);
      } else {
        //setModalContent(modalResponse)
        setStatusImg(Failed);
        setStatus("Request failed");
        setMessage(
          `Oops we ran into a ${response.status} error while trying to send your message, please try again later`
        );
        setStateColor("red");
        setLoading(null);
        setStatusImg(Failed);
      }
    } catch (error) {
      setStatus("Request failed :(");
      setMessage(
        `Oops we ran into an unknown error while trying to send your message, please try again later`
      );
      setStatusImg(Failed);
      setLoading(null);
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="barner">
        <div className="overlay"></div>
        <img
          className="contact-img"
          src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1670938078/barner_kl4dyj_11zon_yu97ed.jpg"
        />
        <div className="barner-text">
          <h1 className="text-white font-semibold text-2xl mb-5">
            Contact Us!
          </h1>
          <p className="text-white font-semibold text-5xl mb-5">
            How Can We Help You ?
          </p>
          <button
            className="text-white bg-violet-500 p-3 rounded-md"
            onClick={() => {
              document
                .getElementById("contact-form")
                .scrollIntoView({ behavior: "smooth" });
              console.log("scroll");
            }}
          >
            Send A Message
          </button>
        </div>
      </div>
      <div className="flex max-[1000px]:block">
        <form
          className="contact-form p-10"
          id="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
        >
          <h2 className="font-semibold text-5xl mb-5">Have some Questions ?</h2>
          <p className="">
            Do you have a quick message for us? Kindly send us a message using
            the form and we will be in touch with you as soon as possible.
            Thanks!
          </p>
          <div className="mt-5">
            <label htmlFor="firstname" className="text-xl">
              First name
            </label>
            <input
              type="text"
              id="firstname"
              placeholder="Jane"
              className="block border border-gray-400 p-3 rounded-md w-full"
              required
            />
          </div>
          <div className="mt-5">
            <label htmlFor="lastname" className="text-xl">
              Last name
            </label>
            <input
              type="text"
              id="lastname"
              placeholder="Doe"
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
          src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1670938076/illus_ubfd58_11zon_qphrjh.jpg"
        />
      </div>
      {/*  <div className="contact-overlay" id={overlay} onClick={() => {setOverlay('overlay-hidden')}}>
            <div className='contact-modal bg-white p-10 rounded-md'>
              {modalResponse}
            </div>
        </div>  */}
      {modal && (
        <Modal
          header={status}
          HeaderImg={() => <img id="statusImg" src={statusImg} />}
          headerStyle={`text-${stateColor}`}
          text={message}
          setShow={setModal}
          Image={() => loading}
        />
      )}

      <FaqNewsletter />
      <Foooter />
    </div>
  );
};

export default Contact;
