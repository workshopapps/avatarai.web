import React from "react";
import "./dashboardcomp.css";
import Mic from "./img/mic.svg";
import Arrow from "./img/arrowdown.svg";
import Search from "./img/search.png";
import Sidebar from "./Sidebar";

export default function Dashboardcomp(props) {
  return (
    <main className="aso-dashboard-comp-main">
      <Sidebar />
      <div className="vic_dash_bg ">
        <div className="vic_dash_inner_div  ">
      
      
        <div className="w-[95vw] h-20  bg-[#fafafa] absolute top-0 right-0">
        <div className="vic_dash_header mb-10 mt-5 md:w-[90vw]  ">
            <div className="vic_dash_input_div md:ml-8 lg:ml-24 ">
              <img src={Search} className="vic_search" />
              <input
                type="text"
                placeholder="Search collections"
                className="vic_dash_input"
              />
              <img src={Mic} className="vic_mic" />
            </div>
            <div className="vic_dash_translate ">
              <p>English</p>
              <img src={Arrow} onClick="" />
              {/* translation languages come here and will be linked to the onClick event above  */}
          
          </div>
         </div>
        </div>
          {/* <div className="vic_dash_text_div">
            <h2 className="vic_dash_h2">Welcome</h2>
            <p className="vic_dash_p">Let's create your Avatars.</p>
          </div> */}
          <div className="vic_dash_content">{props.content}</div>
        </div>
      </div>
    </main>
  );
}
