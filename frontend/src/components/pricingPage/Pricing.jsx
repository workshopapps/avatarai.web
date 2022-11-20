import { Faq } from "./Faq";
import Pricetop from "./Pricetop";
import React from "react";
import Sponsors from "./Sponsors";
import TotalPriceCards from "./TotalPriceCards";
import Footer from "../Footerpage/Footer";

function Pricing() {
  return (
    <section className="overflow-x-hidden">
      <Pricetop />
      <TotalPriceCards />
      <Sponsors />
      <Faq />
      <Footer />
    </section>
  );
}

export default Pricing;
