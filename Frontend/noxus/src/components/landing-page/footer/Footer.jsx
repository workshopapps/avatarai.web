import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
    <div className="footer__content-ony">
      <div>
        <img src="./images/tapart 1.png" />
        <h3 className="footer__title-ony">
          Subscribe to our newsletter for info for new avatar scenes, blogs and
          updates
        </h3>
        <p className="footer__support-title-ony">We’d send a confirmation email to you</p>
      </div>
      <div>
        <input
          type="email"
          placeholder="Enter your Email Address"
          className="input__text-ony"
        />
        <p className="input__subscribe-ony">
          By subscribing you agree to accept newsletters and Emails from us.
        </p>
      </div>
    </div>
    <div className="footer__items-ony">
    <div>
  <h4 className="footer__mini__title-ony">Noxus</h4>
  <p className="noxus__description-ony">Noxus is your webapp for creating Artificial Intelligent Avatars, we also offer courses on avatar generation</p>
</div>

<div className="footer__item-ony">
  <h3 className="footer__mini__title-ony grid-ony">Resources</h3>
  <p className="footer__mini__description-ony">Careers</p>
  <p className="footer__mini__description-ony">Blog</p>
  <p className="footer__mini__description-ony">Reviews</p>
  <p className="footer__mini__description-ony">API integration</p>
</div>
<div className="footer__item-ony">
  <h3 className="footer__mini__title-ony">Company</h3>
  <p className="footer__mini__description-ony">Contact Us</p>
  <p className="footer__mini__description-ony">About Us</p>
  <p className="footer__mini__description-ony">Events</p>
  
</div>



<div className="footer__item-ony" >
  <h3 className="footer__mini__title-ony">Help</h3>
  <p className="footer__mini__description-ony">FAQs</p>
  <p className="footer__mini__description-ony">Terms & Policy</p>
  <p className="footer__mini__description-ony">Contact Us</p>
  
</div>
    </div>
    <div className="last__footer-ony">
      <div>
      <img src="./images/num2.png"/>
      </div>
      <div>
      <img src="./images/num.png"/>
      </div>
      <div>
        <img className="social__icons-ony" src="./images/sicons.png"/>
      </div>
    </div>
    <div className="last__footer__mini-ony">
      &copy;Noxus
    </div>
    </>
    
  );
};

export default Footer;
