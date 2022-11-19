import "./desktop.css";
import Frame from "./Frame";
import Sidebar from "./Sidebar";

const Desktop = () => {
  return (
    <div className='desktop-eye'>
      <Sidebar />
      <div>
        <div className='welcome-eye'></div>
        <Frame />
      </div>
    </div>
  );
};

export default Desktop;
