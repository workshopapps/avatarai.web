import FaqHero from "./FaqHero";
import FaqNewsletter from "./FaqNewsletter";
import QuestionSection from "./QuestionSection";
import Navbar from "../landingPage/Navbar/Navbar";
// import Footer from "../Footerpage/Footer";
import Foooter from "../footer/Foooter";

const Faq = () => {
  return (
    <>
      <Navbar />
      <FaqHero />
      <QuestionSection />
      <FaqNewsletter />
      {/* <Footer /> */}
      <Foooter />
    </>
  );
};

export default Faq;
