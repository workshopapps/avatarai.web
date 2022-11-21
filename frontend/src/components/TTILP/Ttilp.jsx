import "./TTILP.css";
import Get_started from "./Get_started";
import Heroimg from "./img/heroimg.png";
import Creative from "./Creative";
import Hero_img from "./img/heroimg2.png";
import Button from "./Button";
// import Navbar from "../landingPage/Navbar/Navbar";
import Faq from './../faq/index'
import QuestionSection from "./../faq/QuestionSection";
import FaqNewsletter from "./../faq/FaqNewsletter";
// import Footer from "../Footerpage/Footer";


export default function Ttilp() {
  return (
    <div className="vic">
      {/* <Navbar /> */}
      <div className="vic_hero">
        <div className="vic_hero_text">
          <h1> Generate Eye catchy images with just your words </h1>
          <p>
            Bring your words to life with our new and improved text to Image AI
            generator.
          </p>
          <Button />
        </div>

        <div className="vic_hero_img_div">
          <img src={Heroimg} className="imageone" />
          <img src={Hero_img} className="imagetwo" />
        </div>
      </div>

      <Get_started />
      <Creative />
      <QuestionSection />
      <FaqNewsletter />
      {/* <Footer /> */}
      {/* <Faq /> */}
    </div>
  );
}
