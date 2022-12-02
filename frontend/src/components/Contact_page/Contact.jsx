import "./Contact.css";
import Navbar from "../landingPage/Navbar/Navbar";
import Con0 from "./Con0.png";
import google from "./google.png";
import location from "./location.png";
import Zoom_in from "./Zoom_in.png";
import Zoom_out from "./Zoom_out.png";
import google1 from "./google1.png";
import Footer from "../landing-page/footer/Footer";
import Button from "../landingPage/Button/Button";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div>
        <Navbar />
        <div className="container_bpc">
            <img src={Con0} alt="4 people smiling" />
        <div className="content_bpc">
            <div className="content0_bpc">
            <p>Contact Us!</p>
            <h1>How Can We Help You?</h1>
            </div>
            <Button className="text-white border-[#8B70E9] bg-[#8B70E9] cbk-login-btn">
            <Link to="/"> Send A Message </Link>
          </Button>
        </div>
        </div>
        <div className="contain_bpc">
        <div className="container0_bpc">
            <div className="content1_bpc">
                <h1>Send Us A Message</h1>
                <p>Do you have a quick message for us? Kindly send us a message using the form and we will be in touch with you as soon as possible. Thanks!</p>
            </div>
            <div className="content2_bpc">
                <div className="content3_bpc">
                    <div className="con">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Jane Doe" required />
                    </div>
                    <div className="con">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="janedoe@hotmail.com" required />
                    </div>
                    <div className="con1">
                    <label htmlFor="message">Message</label>
                    <textarea cols={50} rows={5} id="message" placeholder="Write your message here..." required></textarea>
                    </div>
                </div>
                <div className="content4_bpc">
                <Button className="text-white border-[#8B70E9] bg-[#8B70E9] cbk-login-btn">
                    <Link to="/"> Contact Us </Link>
          </Button>
                    <p>We’ll be in touch soon</p>
                </div>
            </div>
        </div>
        <div className="container1_bpc">
           <img src={google} alt="map" className="map_bpc" />
            <img src={location} alt="map-pin" className="map1_bpc" />
            <img src={Zoom_in} alt="zoom in" className="map2_bpc" />
            <img src={Zoom_out} alt="zoom out" className="map3_bpc" />
            <img src={google1} alt="map" className="map0_bpc" />
            <p className="map_tag_bpc" >View on Google maps</p>
            </div>
            </div>
            <Footer />
        </div>
      );
}
 
export default Contact;