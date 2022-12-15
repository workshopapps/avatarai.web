import React from "react";
import "./benefits.css";
import vector from "./Vector.png";
import Vector2 from "./Vector2.png";
import { Link } from "react-router-dom";
import Button from "../../landingPage/Button/Button";
const Benefits = () => {
  const [one, setOne] = React.useState(false);
  const [two, setTwo] = React.useState(false);
  const [three, setThree] = React.useState(false);
  const [four, setFour] = React.useState(false);
  return (
    <section id="benefits" class="section4">
      <div class="part4">
        <h2 className="be">Frequently asked questions</h2>
        <div class="faqs">
          <div className={`faq ${one && 'bad'}`}>
            <div class="head">
              <h3>How will I get the avatars generated?</h3>
              {one ? (
                <img
                  src={Vector2}
                  alt=""
                  class="anchor"
                  onClick={() => {
                    setOne((current) => !current);
                  }}
                />
              ) : (
                <img
                  src={vector}
                  alt=""
                  class="anchor"
                  onClick={() => {
                    setOne((current) => !current);
                  }}
                />
              )}
            </div>
            {one && (
              <p id="anchor" >
                Once your avatars are ready, you will receive and email with the
                generated avatars for you.
              </p>
            )}
          </div>
          <div className={`faq ${two && 'bad'}`}>
            <div class="head">
              <h3>Can I choose the background for my avatars?</h3>
              {two ? (
                <img
                  src={Vector2}
                  alt=""
                  class="anchor"
                  onClick={() => {
                    setTwo((current) => !current);
                  }}
                />
              ) : (
                <img
                  src={vector}
                  alt=""
                  class="anchor"
                  onClick={() => {
                    setTwo((current) => !current);
                  }}
                />
              )}
            </div>
            {two && (
              <p id="anchor">
                Yes. Zuvatar offers a list of backgrounds you can choose from
                to generate your avatars. You can also upload images of the
                backgrounds you want to appear in your avatar.
              </p>
            )}
          </div>
          <div className={`faq ${three && 'bad'}`}>
            <div class="head">
              <h3>What are digital avatars used for?</h3>
              {three ? (
                <img
                  src={Vector2}
                  alt=""
                  class="anchor"
                  onClick={() => {
                    setThree((current) => !current);
                  }}
                />
              ) : (
                <img
                  src={vector}
                  alt=""
                  class="anchor"
                  onClick={() => {
                    setThree((current) => !current);
                  }}
                />
              )}
            </div>
            {three && (
              <p id="anchor">
                Digital avatars can serve a number of purposes, including
                representing a person, an online friend, a brand, or an
                influencer.
              </p>
            )}
          </div>
        </div>

        <Button className="text-white border-[#8B70E9] bg-[#8B70E9] cbk-login-btn viewBtn mt-[1.5rem]">
          <Link to="/FAQ"> View All </Link>
        </Button>
      </div>
    </section>
  );
};

export default Benefits;
