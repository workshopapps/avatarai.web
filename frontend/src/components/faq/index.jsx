import FaqHero from "./FaqHero";
import FaqGetInTouch from "./FaqGetInTouch";
import FaqNewsletter from "./FaqNewsletter";
import QuestionSection from "./QuestionSection";
import Navbar from "../landingPage/Navbar/Navbar";

const Faq = () => {
  return (
    <>
      <Navbar />
      <FaqHero />
      <QuestionSection />
      <FaqNewsletter />
    </>
  );
};

export default Faq;
