import "./frame-eye.css";
import oneicon from "./oneicon.png";
import male_icon from "./male_icon.png";
import female_icon from "./female_icon.png";
import { Link } from "react-router-dom";
import SearchComponent from "../DashboardSearchComponent/SearchComponent";
import Frame_1 from "../desktop_4/Frame_1";

const FrameEye = () => {
  return (
    <div className='frame-eye-main'>
      <div className='search-eye'>
        <SearchComponent />
      </div>
      <div className='welcome-eye'>{/* <Frame_1 /> */}</div>
      <div className='gender-select-eye'>
        <div className='one-icon'>
          <img src={oneicon} alt='One Icon' />
        </div>
        <div className='gender-eye'>
          <h1>Choose your Gender</h1>
          <h2>Are you a male or female?</h2>
        </div>
        <div className='male-female-eye'>
          <button className='gender'>
            <img src={male_icon} alt='male icon' />
          </button>
          <button className='gender'>
            <img src={female_icon} alt='female icon' />
          </button>
        </div>
        <div className='link-eye'>
          <Link to='/'>Proceed</Link>
        </div>
      </div>
    </div>
  );
};

export default FrameEye;
