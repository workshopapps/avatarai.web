import "../desktop_4/DD4.css";

import Background from "../DASHBOARD_COMPONENT/dashboardcomp";
import Content from "../desktop_4/DD4content";
import FrameEye from "./FrameEye";
import React from "react";

const DesktopEye = () => {
  return (
    <div>
      <Background content={<FrameEye />} />
    </div>
  );
};

export default DesktopEye;
