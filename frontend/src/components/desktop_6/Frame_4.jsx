import "./Frame_4.css";
import Group_6 from "./Group_6.png";
import Frame_0 from "../../../public/images/Frame_0.png";
import Img from "./image.jsx"

import {Link} from "react-router-dom";
import data from "./data.jsx"
import back from "../DASHBOARD_COMPONENT/dashboardcomp.jsx";
const Frame_4 = () => {
    const avatar = data.map(item =>{
        return (
            <Img
                // setup={item.setup} id={item.id} href={item.href}
                // item={item}
                {...item}
            />
        )

    })

    return ( 
        <div className="opt_w">
            <img className="G_6_bpc" src={Group_6} />
            <div className="opt_f">Your Avatars are Ready</div>
            <div className="AV_im_bpc">
                {/*<div className='opt_b'><img  onClick={handleClick} src={Arrow_0} /></div>*/}
                {avatar}
            </div>
                <div className='opt_q'>
                    <Link className='link_opt' to="#">
                    <button className="btn1_bpc">
                        Share
                    </button>
                    </Link>
                    <Link className='link_opt' href="#">
                    <button className="btn2_bpc">
                        Download
                    </button>
                    </Link>
                </div>

        </div>
     );
}
 
export default Frame_4;