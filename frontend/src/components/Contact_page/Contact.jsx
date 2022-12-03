import "./Contact.css";
import Navbar from "../landingPage/Navbar/Navbar";
import Barner from "./barner.png";
import Illustration from "./illus.png";
import Foooter from "../footer/Foooter";
import { useEffect } from "react";
import { useContext } from "react";
import { NavContext, pages } from "../../../context/nav-context";
import Button from "../landingPage/Button/Button";
// import { Link } from "react-router-dom";

const Contact = () => {
  const { setPage } = useContext(NavContext);

  useEffect(() => {
    setPage(pages.ContactUs);
  }, []);
  return (
    <div>
      <Navbar />
      <div className="barner">
        <div className="overlay"></div>
        <img className="contact-img" src={Barner} />
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
        <form className="contact-form p-10">
          <h2 className="font-semibold text-5xl mb-5">Have some Questions ?</h2>
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
              id="email"
              placeholder="Write your message here..."
              className="block border border-gray-400 p-3 rounded-md w-full"
              rows="5"
              required
            />
          </div>
          <Button className="text-white bg-violet-500 p-3 rounded-md w-full mt-5">
            Contact Us
          </Button>
        </form>
        <img
          className="w-1/2 contact-img max-[1000px]:w-3/4"
          src={Illustration}
        />
      </div>
      <Foooter />
    </div>
  );
};

export default Contact;
