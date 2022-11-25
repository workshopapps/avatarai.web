import React from "react";
import "./main.css";

const Main = () => {
  return (
    <div className="main-ony">
      <h2 className="main__title-ony">Create your perfect <span className="aiii-ony">avatar</span> </h2>
      <div className="main__section-ony">
        {/* <div className="main__content-ony">
          <img className="a2-ony" src="./images/a2.png" alt="first ai" />
          <div>
           <h3 className="image__title-ony">Become the artist</h3>
           <p className="image__description-ony"> Have access to many templates and scenes to create mindblowing
           AI-generated arts. The ball is in your court, be Michael Jordan with
           Noxus amazing tools on our platform</p>
          
          </div>
        </div>{" "} */}
        <div>         
          <img className="a1-ony" src="./images/a1.png" alt="second ai" />
            <h3 className="image__title-ony image__description3-ony">Absolute freedom to create</h3>
            <p className="image__description2-ony">
                Become the artist and run the show. create mind <br/>blowing avatars from your favourite images
            </p>
        </div>
          <div>
              <img className="a1-ony" src="./images/a1.png" alt="second ai" />
              <h3 className="image__title-ony image__description3-ony">Choose your scenery</h3>
              <p className="image__description2-ony">
                  Choose amazing backgrounds for your avatars.<br/> Transport your avatars anywhere you want with a click
              </p>
          </div>
          <div>
              <img className="a1-ony" src="./images/a1.png" alt="second ai" />
              <h3 className="image__title-ony image__description3-ony">Fast and Easy</h3>
              <p className="image__description2-ony">
                  Upload up to 10 images and let Avart create your avatars.<br/> Download avatars from your e-mail
              </p>
          </div>

      </div>
    </div>
  );
};

export default Main;
