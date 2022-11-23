import "./Frame_4.css";
import Group_6 from "./Group_6.png";
import Frame_0 from "./Frame_0.png";
import Frame_1 from "./Frame_1.png";
import Frame_2 from "./Frame_2.png";
import Frame_3 from "./Frame_3.png";
import Arrow_0 from "./Arrow_0.png";
import {Link} from "react-router-dom"
import back from "../DASHBOARD_COMPONENT/dashboardcomp.jsx";
const Frame_4 = () => {

    return ( 
        <div className="opt_w">
            <img className="G_6_bpc" src={Group_6} />
            <div className="opt_f">Your Avatars are Ready</div>
            <div className="AV_im_bpc">
                {/*<div className='opt_b'><img  onClick={handleClick} src={Arrow_0} /></div>*/}
                <div className="opt_mm">
                    <img className="img_bpc" src={Frame_0} />
                </div>
                <div className="opt_mm">
                    <img className="img_bpc" src={Frame_0} />
                </div>
                <div className="opt_mm">
                    <img className="img_bpc" src={Frame_0} />
                </div>
                <div className="opt_mm">
                    <img className="img_bpc" src={Frame_0} />
                </div>
                <div className="opt_mm">
                    <img className="img_bpc" src={Frame_0} />
                </div>
                <div className="opt_mm">
                    <img className="img_bpc" src={Frame_0} />
                </div>
                <div className="opt_mm">
                    <img className="img_bpc" src={Frame_0} />
                </div>
                <div className="opt_mm">
                    <img className="img_bpc" src={Frame_0} />
                </div>
            </div>
                <div className='opt_q'>
                    <Link to="#">
                    <button className="btn1_bpc">
                        Share
                    </button>
                    </Link>
                    <Link href="#">
                    <button className="btn2_bpc">
                        Download
                    </button>
                    </Link>
                </div>

        </div>
     );
}
 
export default Frame_4;