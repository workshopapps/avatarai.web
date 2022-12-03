import "./TTILP.css";
import Button from "./Button";

function Creative() {
  return (
    <div className="vic_mid">
      <div className="vic_mid_section">
        <div>
          <h2 className="one">
            An image is worth <span>a thousand words</span>
          </h2>
          <p>
            Tell the story you always wanted to tell in the way only you can
            tell it, with your words coming to life and taking a visual style.
          </p>
        </div>
        <div className="br"></div>
        <img src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1670068760/thousand_m27dxv.png" />
      </div>

      <div className="vic_mid_section " id="two">
        <div>
          <h2>
            <span>Creativity </span>without Borders
          </h2>
          <p>
            Tell the story you always wanted to tell in the way only you can
            tell it, with your words coming to life and taking a visual style.
          </p>
        </div>
        <div className="br"></div>
        <img src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1670068756/creativity_xirlyp.png" />
      </div>

      <div className="vic_creative">
        <div className="vic_mid_start">
          <img src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1670068757/Group_urpdwm.png" />
          <h3>Start your creative journey here</h3>
          <p>Create tons of beautiful images from the comfort of your mind</p>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Creative;
