import "./frame.css";
import oneicon from "./oneicon.png";
import male_icon from "./male_icon.png";
import female_icon from "./female_icon.png";
import { Link } from "react-router-dom";

const Frame = () => {
  return (
    <div className='frame-eye'>
      <div>
        <img src={oneicon} alt='One Icon' />
        <div className='gender-eye'>
          <h1>Choose your Gender</h1>
          <p>Are you a male or female?</p>
        </div>
        <div className='male-female-eye'>
          <img src={male_icon} alt='male icon' />
          <img src={female_icon} alt='female icon' />
        </div>
        <div className='link-eye'>
          <Link to='/'>Proceed</Link>
        </div>
      </div>
    </div>
  );
};

export default Frame;
