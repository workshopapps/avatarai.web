import Background from "./../DASHBOARD_COMPONENT/dashboardcomp";
import Content from "./Content";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Desktop3 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/Dashboard_6");
    }, 5000);
  });

  return (
    <div>
      <Background content={<Content />} />
    </div>
  );
};

export default Desktop3;
