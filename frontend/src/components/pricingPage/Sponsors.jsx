import React, { useState } from "react";

import logo1 from "./images/Logo.svg";
import logo10 from "./images/Zendesk.svg";
import logo11 from "./images/Lemlist.svg";
import logo12 from "./images/Databricks.svg";
import logo2 from "./images/Microsoft.svg";
import logo3 from "./images/Oracle.svg";
import logo4 from "./images/Atlassian.svg";
import logo5 from "./images/Zoom.svg";
import logo6 from "./images/Twilio.svg";
import logo7 from "./images/Pipeliner.svg";
import logo8 from "./images/Quickbooks.svg";
import logo9 from "./images/Freshbooks.svg";

const Sponsors = () => {
  const [lists, setLists] = useState([
    { images: logo1 },
    {
      images: logo2,
    },
    {
      images: logo3,
    },
    {
      images: logo4,
    },
    {
      images: logo5,
    },
    {
      images: logo6,
    },
    {
      images: logo7,
    },
    {
      images: logo8,
    },
    {
      images: logo9,
    },
    {
      images: logo10,
    },
    {
      images: logo11,
    },
    {
      images: logo12,
    },
  ]);
  return (
    <section className="mt-8">
      <div className="text-center font-nunito py-6 vnc_text w-full md:w-3/5 mx-auto">
        Trusted by millions of folks around the world who use our platform for
        avatar integration, knowledge development and for fun.
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 place-items-center w-4/5 mx-auto">
        {lists.map((list) => (
          <img className="p-4 " src={list.images} alt="" />
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
