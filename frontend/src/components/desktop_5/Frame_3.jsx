import "./Frame_3.css"
import Frame44 from "./Frame44.png";

const Frame_3 = () => {
    return ( 
        <div className="frame_3_bpc">
            <div className="Gen_AV_bpc">
            <h1>Generating Avatar</h1>
            <p>We are currently generating your Avatar</p>
            </div>
            <div className="Gen_AVL_bpc">
                <img src={Frame44} />
            </div>
            <span>Rendering Avatars...</span>
        </div>
     );
}
 
export default Frame_3;