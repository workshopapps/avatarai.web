import "./desktop3.css";
import { useState } from "react";
import ProgressIndicator from "./ProgressIndicator";

const Content = () => {
    const [progress, setProgress] = useState(10);
    const [totalImages, setTotalImages] = useState(5)
    return (
      <div className='dja-main'>
            <div className="dja-title">
                <h1>Getting your images</h1>
                <p>Wait while we load your images</p>
            </div>
            <ProgressIndicator progress={progress} />
      </div>
    );
};

export default Content;
