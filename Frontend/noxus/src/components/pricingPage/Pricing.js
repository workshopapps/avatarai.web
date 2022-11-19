import { Faq } from "./Faq";
import Pricetop from "./Pricetop";
import React from "react";
import Sponsors from "./Sponsors";
import TotalPriceCards from "./TotalPriceCards";

function Pricing() {
  return (
    <section className="overflow-x-hidden">
      <Pricetop />

      <TotalPriceCards />
      <Sponsors />
      <Faq />
    </section>
  );
}

export default Pricing;
