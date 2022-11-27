import React from "react";
import "./main.css";

const Main = () => {
  return (
    <div className="main-ony">
      <h2 className="main__title-ony">Upload images and <span className="aiii-ony">create</span> avatars </h2>
      <div className="main__section-ony">
        <div className="main-bat">         
          <img className="a1-ony" src="./images/a2.png" alt="second ai" />
          <div>
          <h3 className="image__title-ony image__description3-ony">Become the artist</h3>
            <p className="image__description2-ony">
            Have access to many templates and scenes to create mindblowing AI-generated arts. The ball is in your court, be Michael Jordan with Tapert amazing tools on our platform
            </p>
          </div>
        </div>
        <div className="main-bat" id="img2">
          <div >
            <h3 className="image__title-ony image__description3-ony">Run the show</h3>
            <p className="image__description2-ony">
              Have access to many templates and scenes to create mindblowing AI-generated arts. The ball is in your court, be Michael Jordan with Tapert amazing tools on our platform
            </p>
          </div>
          <img className="a1-ony" src="./images/a1.png" alt="second ai" />
        </div>
      </div>
    </div>
  );
};

export default Main;
