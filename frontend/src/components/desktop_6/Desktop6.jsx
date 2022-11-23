import Frame_1 from "../desktop_4/Frame_1";
import Frame_4 from "./Frame_4"
import Back from "../DASHBOARD_COMPONENT/dashboardcomp.jsx";

const  Desktop6= () => {
    return (
        <div>
            {/*<Frame_1 />*/}
            <Back
            content={<Frame_4/>}
            />
        </div>
      );
}
 
export default Desktop6;