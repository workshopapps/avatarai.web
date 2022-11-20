import React from 'react';
import Main from './main/Main';
import CTA from './cta/Cta';
import Benefits from './benefits/Benefits';
import About from './about/About';
import Social from './socialproof/SocialProof';
import Header from './header/header/Header';
import Navbar from "../landingPage/Navbar/Navbar";


function LandingPageC() {
  return (
    <div>
        <Navbar />
        <Header />
      <About />
      <Benefits />
      <CTA />
      <Main />
      <Social />
    </div>
  )
}

export default LandingPageC
