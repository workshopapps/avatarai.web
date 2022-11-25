import WhyUsCard from "./WhyUsCard";
import TeamMemberCard from "./TeamMemberCard";
import "./aboutUs.css";
import Banner from "./img/aboutBg.png";
import PolygonLeft from "./img/polygonLeft.png";
import PolygonRight from "./img/polygonRight.png";
import Navbar from "../landingPage/Navbar/Navbar";

import { WHY_US, TEAM } from "./data";
// import Footer from "../Footerpage/Footer";
import Foooter from "../footer/Foooter";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <main id="dja_main">
        <section className="dja_banner_section">
          <div className="dja_container">
            <div className="dja_banner_img">
              <img src={Banner} alt="Avart" />
            </div>
            <div id="banner_title">
              <h1>
                About <span>Us</span>
              </h1>
            </div>
          </div>
          <div className="dja_overlay"></div>
        </section>

        <section className="dja_mission_section">
          <div className="dja_container" >
           <p className='dja_container_text'><strong>Avert</strong> helps individuals online create a virtual identity to be
            used on various social media platforms while protecting their actual
            personality. This is done with a state of the art dream booth
            technology.
            <br />
            <br />
            The dream booth technology is an open-source deep learning
            generation model used to fine-tune artificial intelligence imaging
            models. It lets us teach artificial intelligence imaging model who
            you are, by training it on your photos and then generate any image
            in any style you want with you in it.
            </p> 
          </div>
        </section>

        <section className="dja_story_section">
           
          <div className="dja_story_design_wrap" id="dja_design_1">
            <img src={PolygonLeft} alt="story" />
          </div>
          <div className="dja_story_design_wrap" id="dja_design_2">
            <img src={PolygonRight} alt="story" />
          </div>
        </section>

        <section className="dja_why_section">
          <div className="dja_container">
            <h2 className="dja_title">Why Us?</h2>
            <div className="dja_why_ctn">
              {WHY_US.map((item) => (
                <WhyUsCard title={item.title} content={item.content} />
              ))}
            </div>
          </div>
        </section>

        <section className="dja_team_section">
          <div className="dja_container">
            <h2 className="dja_title">Our Team</h2>
            <div className="dja_team_ctn">
              {TEAM.map((item, i) => (
                <TeamMemberCard name={item.name} index={i} role={item.role} />
              ))}
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
      <Foooter />
    </>
  );
};

export default AboutUs;
