import FaqHero from "./FaqHero";
import FaqNewsletter from "./FaqNewsletter";
import QuestionSection from "./QuestionSection";
import Navbar from "../landingPage/Navbar/Navbar";
import Footer from "../Footerpage/Footer";

const Faq = () => {
  return (
    <>
      <Navbar />
      <FaqHero />
      <QuestionSection />
      <FaqNewsletter />
      <Footer />
    </>
  );
};

export default Faq;
