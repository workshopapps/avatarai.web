import React from "react";
import "./benefits.css";
import vector from "./Vector.png";
import Vector2 from "./Vector2.png";
import { Link } from 'react-router-dom'


const Benefits = () => {
  const [one,setOne] = React.useState(false)
  const [two,setTwo] = React.useState(false)
  const [three,setThree] = React.useState(false)
  const [four,setFour] = React.useState(false)
  return (
    <section class="section4">
      <div class="part4">
        <h2>Frequently asked qustions</h2>
        <div class="faqs">
          <div class="faq">
            <div class="head">
              <p>How will I get the avatars generated?</p>
              {one ? (<img src={Vector2} alt="" class="anchor" onClick={()=>{setOne(current => !current)}} />): (<img src={vector} alt="" class="anchor" onClick={()=>{setOne(current => !current)}} />)}
            </div>
            {one && <p id="anchor">
              Once your avatars are ready, you will receive and email with the generated avatars for you.
            </p> }            
          </div>
          <div class="faq">
            <div class="head">
              <p>Can I choose the background for my avatars?</p>
              {two ? (<img src={Vector2} alt="" class="anchor" onClick={()=>{setOne(current => !current)}} />): (<img src={vector} alt="" class="anchor" onClick={()=>{setTwo(current => !current)}} />)}
            </div>
            {two && <p id="anchor">
              Yes. AvatarAI offers a list of backgrounds you can choose from to generate your avatars. You can also upload images of the backgrounds you want to appear in your avatar.
            </p> }
          </div>
          <div class="faq">
            <div class="head">
              <p>What are digital avatars used for?</p>
              {three ? (<img src={Vector2} alt="" class="anchor" onClick={()=>{setThree(current => !current)}} />): (<img src={vector} alt="" class="anchor" onClick={()=>{setThree(current => !current)}} />)}
            </div>
            {three && <p id="anchor" >
              Digital avatars can serve a number of purposes, including representing a person, an online friend, a brand, or an influencer.
            </p>}
          </div>
          {/* <div class="faq">
            <div class="head">
              <p>Are there age restriction for AvatarAI?</p>
              {four ? (<img src={Vector2} alt="" class="anchor" onClick={()=>{setFour(current => !current)}} />): (<img src={vector} alt="" class="anchor" onClick={()=>{setFour(current => !current)}} />)}
            </div>
            {four && <p id="anchor">
            Yes. AvatarAI should not be used by children under 13 years of age without supervision.
            </p>}
          </div> */}
        </div>
        <Link to='/FAQ'>
            <button className="bat3-btn">view All</button>
        </Link>

      </div>
    </section>

    // <div>

    //   <div className="benefits__description-ony">


    //   </div>
    //   <h3 className="features__title-ony"><span className="aiii-ony">Exciting </span>features for you</h3>
    //   <div className="features__ony">
    //   <div>
    //     <h4 className="aiiii-ony">Image to avatar</h4>
    //     <p>Convert your images to amazing and cool avatars that you can share to friends anywhere on the internet</p>
    //   </div>
    //   <div>
    //     <h4 className="aiiii-ony">Text to avatar</h4>
    //     <p>Convert text to amazing and cool avatars that you can share to friends anywhere on the internet</p>
    //   </div>
    //   <div>
    //     <h4 className="aiiii-ony">Community</h4>
    //     <p>Connect with other tapert users and see the amazing avatars they are creating. </p>
    //   </div>
    //   </div>
    // </div>
  );
};

export default Benefits;
