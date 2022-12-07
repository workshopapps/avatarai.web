import "./styling.css";

import { Faq } from "./Faq";
import FaqNewsletter from "../faq/FaqNewsletter";
import Foooter from "../footer/Foooter";
import Navbar from "../landingPage/Navbar/Navbar";
import Pricetop from "./Pricetop";
import React from "react";
import Sponsors from "./Sponsors";
import TotalPriceCards from "./TotalPriceCards";
import { useContext , useEffect} from 'react';
import { NavContext, pages } from '../../../context/nav-context';
// import Footer from "../Footerpage/Footer";

function Pricing() {

    const {setPage} = useContext(NavContext)
   
     useEffect(()=>{
      setPage(pages.Pricing)
     },[])
  return (
    <section className="price-top">
      <Navbar />
      <div className="overflow-x-hidden">
        <Pricetop />
        <TotalPriceCards />
        <FaqNewsletter />
        <Foooter />
      </div>
    </section>
  );
}

export default Pricing;
