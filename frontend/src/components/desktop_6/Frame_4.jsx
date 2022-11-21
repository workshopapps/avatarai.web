import "./Frame_4.css";
import Group_6 from "./Group_6.png";
import Frame_0 from "./Frame_0.png";
import Frame_1 from "./Frame_1.png";
import Frame_2 from "./Frame_2.png";
import Frame_3 from "./Frame_3.png";
import Arrow_0 from "./Arrow_0.png";
import {Link} from "react-router-dom"

const Frame_4 = () => {
    return ( 
        <div className="frame_4_bpc">
            <div className="G_6_bpc">
                <img src={Group_6} />
            </div>
            <h3>Your Avatars are Ready</h3>
            <div className="AV_im_bpc">
                <div className="img_bpc">
                <img src={Frame_0} />
                </div>
                <div className="img_bpc">
                <img src={Frame_1} />
                </div>
                <div className="img_bpc">
                <img src={Frame_2} />
                </div>
                <div className="img_bpc">
                <img src={Frame_3} />
                </div>
            </div>
            <div className="G_5_bpc">
                <img src={Arrow_0} />
            </div>
            <div className="SD_btn_bpc">
                <div className="btn1_bpc">
                <Link to="#">Share </Link>
                </div>
                <div className="btn2_bpc">
                <Link href="#">Download</Link>
                </div>
            </div>
        </div>
     );
}
 
export default Frame_4;