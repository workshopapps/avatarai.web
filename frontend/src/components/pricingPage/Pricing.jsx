import "./styling.css";

import { Faq } from "./Faq";
import FaqNewsletter from "../faq/FaqNewsletter";
import Foooter from "../footer/Foooter";
import Navbar from "../landingPage/Navbar/Navbar";
import Pricetop from "./Pricetop";
import React from "react";
import Sponsors from "./Sponsors";
import TotalPriceCards from "./TotalPriceCards";

// import Footer from "../Footerpage/Footer";

function Pricing() {
  return (
    <section className="overflow-x-hidden price-top">
      <Navbar />
      <Pricetop />
      <TotalPriceCards />
      <FaqNewsletter />
      <Foooter />
    </section>
  );
}

export default Pricing;
