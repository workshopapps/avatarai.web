import "./desktop-eye.css";
import SidebarEye from "./SidebarEye";
import FrameEye from "./FrameEye";

const DesktopEye = () => {
  return (
    <div className='desktop-eye-main'>
      <SidebarEye />
      <FrameEye />
    </div>
  );
};

export default DesktopEye;
