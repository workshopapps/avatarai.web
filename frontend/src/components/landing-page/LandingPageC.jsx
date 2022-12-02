import React from 'react';
import Main from './main/Main';
import CTA from './cta/Cta';
import Benefits from './benefits/Benefits';
import About from './about/About';
import Social from './socialproof/SocialProof';
import Header from './header/header/Header';
import Navbar from "../landingPage/Navbar/Navbar";
import QuestionSection from "../faq/QuestionSection.jsx";
import Any from './Any/any.jsx'
import FaqNewsletter from "../faq/FaqNewsletter.jsx";
import Foooter from '../footer/Foooter';
import Learn from './learn/learn.jsx'
import Top from './Top/top.jsx';
import Final from './final/final';
import {useContext} from "react";
import {NavContext, pages} from "../../../context/nav-context"
import { useEffect } from 'react';
// import Footer from "../Footerpage/Footer.jsx";


function LandingPageC() {
  const [show,setShow] = React.useState(true)
  const [preview,setPreview] = React.useState(true)
  React.useEffect(() => {
    let timeout;
      timeout = setTimeout(() => {
        setShow((current) => !current);
        setPreview(false)
      }, 5000);
    return () => clearTimeout(timeout);
  });

  const {setPage} = useContext(NavContext)
 
   useEffect(()=>{
    setPage(pages.Home)
   },[])
  return (
    <div>
        <Navbar />
        {preview && <div className="disclamiar">
          <p>it will Take a few seconds for image and Icons to Loads</p>
        </div>}
        <Header />
        <Any/>
        <Main />
        <CTA />
        <Benefits />
        {/* <Social />
        <Learn/>
        <Top/>
        <Final/> */}
        {/* <QuestionSection /> */}
        <FaqNewsletter />
        <Foooter /> 
    </div>
  )
}

export default LandingPageC
