import React from "react";
import Dashboardcomp from "../DASHBOARD_COMPONENT/dashboardcomp";
import ImageUpload from "./DD2Content";

const DD2 = () => {
  return (
    <div>
      <Dashboardcomp content={<ImageUpload />} />
    </div>
  );
};

export default DD2;
