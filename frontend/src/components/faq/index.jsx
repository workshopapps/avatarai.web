import FaqHero from "./FaqHero";
import FaqNewsletter from "./FaqNewsletter";
import QuestionSection from "./QuestionSection";
import Navbar from "../landingPage/Navbar/Navbar";
// import Footer from "../Footerpage/Footer";
import Foooter from "../footer/Foooter";
import { useContext,useEffect } from "react";
import { NavContext, pages } from "../../../context/nav-context";

const Faq = () => {
  const {setPage} = useContext(NavContext)
   
     useEffect(()=>{
      setPage(pages.Faqs)
     },[])
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
