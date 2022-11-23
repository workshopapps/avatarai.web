import "./Frame_2.css";
import { Link } from "react-router-dom";
import Group11 from "./Group11.png";
import Group4 from "./Group4.png";
import Frame35 from "./Frame35.png";
import Vector from "./Vector.png";
import Vector1 from "./Vector1.png";

const Frame_2 = () => {
    return ( 
        <div className="frame_2_bpc">
            <div className="G_11_bpc">
                <img src={Group11} />
            </div>
            <div className="G_4_bpc">
                <img src={Group4} />
            </div>
            <h1>Preview your pictures</h1>
            <div className="frame_35_bpc">
            <img src={Frame35} />
            </div>
            <div className="frame_36_bpc">
                <div className="img_1_bpc">
                <img src={Vector} />
                </div>
                <div className="img_2_bpc">
                <img src={Vector1} />
                </div>
            </div>
            <div className="AV_btn_bpc">
            <Link to="#">Generate Avatar</Link>
            </div>
        </div>
     );
}
 
export default Frame_2;