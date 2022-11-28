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
// import Footer from "../Footerpage/Footer.jsx";


function LandingPageC() {
  return (
    <div>
        <Navbar />
        <Header />
        <Main />
        <CTA />
        <Any/>
        <Benefits />
        <Social />
        <Learn/>
        <Top/>
        <Final/>
        {/* <QuestionSection /> */}
        <FaqNewsletter />
        <Foooter /> 
    </div>
  )
}

export default LandingPageC
