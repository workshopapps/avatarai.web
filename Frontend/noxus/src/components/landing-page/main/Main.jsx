import React from "react";
import "./main.css";

const Main = () => {
  return (
    <div>
      <h2 className="main__title-ony">Absolute freedom to <span className="aiii-ony">create</span> </h2>
      <div className="main__section-ony">
        <div className="main__content-ony">
          <img className="a2-ony" src="./images/a2.png" alt="first ai" />
          <div>
            <h3 className="image__title-ony">Become the artist</h3>
            <p className="image__description-ony"> Have access to many templates and scenes to create mindblowing
            AI-generated arts. The ball is in your court, be Michael Jordan with
            Tapert amazing tools on our platform</p>
           
          </div>
        </div>{" "}
        
        <div className="main__second__ai-ony">
          <h3 className="image__title-ony">Run the show</h3>
          <p className="image__description2-ony">
            Have access to many templates and scenes to create mindblowing
            AI-generated arts. The ball is in your court, be Michael Jordan with
            Tapert amazing tools on our platform
          </p>
          <div>
            <img className="a1-ony" src="./images/a1.png" alt="second ai" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
