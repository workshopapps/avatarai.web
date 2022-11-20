import React from 'react';
import Main from './main/Main';
import CTA from './cta/Cta';
import Benefits from './benefits/Benefits';
import About from './about/About';
import Social from './socialproof/SocialProof';
import Header from './header/Header';


function LandingPageC() {
  return (
    <div>
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
