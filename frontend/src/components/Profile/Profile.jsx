import React, { useState } from "react";
import Sidebar from "../DASHBOARD_COMPONENT/Sidebar";
import Dashboardtranslate from "../DASHBOARD_COMPONENT/dashboardtranslate";
import ProfileImg from "./Profile.jpeg";
import "./Profile.css";

const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");

  const clearValue = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearValue();
  };

  return (
    <>
      <main className="aso-profile">
        <Sidebar />
        <section className="aso-profile-section">
          <div className="aso-profile-header">
            <div>
              <h1>Profile</h1>
              <p>See your personal information</p>
            </div>
            <Dashboardtranslate />
          </div>
          <div className="aso-profile-board">
            <div className="aso-bio">
              <img src={ProfileImg} alt="Bio Img" className="" />
              <div className="aso-bio-details">
                <h1>Baki Hanma</h1>
                <p>bakii@gmail.com</p>
              </div>
            </div>
            <form className="aso-form-container">
              <div className="aso-form-name-input">
                <div className="aso-form-first-name">
                  <label htmlFor="first_name">First name</label>
                  <input
                    type="text"
                    id="first_name"
                    value={firstName}
                    placeholder="Sandra"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </div>
                {/*  */}
                <div className="aso-form-last-name">
                  <label htmlFor="last_name">Last name</label>
                  <input
                    type="text"
                    id="last_name"
                    value={lastName}
                    placeholder="Triss"
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </div>
              </div>
              {/*  */}
              {/*  */}
              <div className="aso-form-mobile-location">
                <div className="aso-form-mobile">
                  <label htmlFor="mobile">Mobile Number</label>
                  <input
                    type="text"
                    id="mobile"
                    value={mobile}
                    placeholder="+2349078985443"
                    onChange={(e) => {
                      setMobile(e.target.value);
                    }}
                  />
                </div>
                {/*  */}
                <div className="aso-form-location">
                  <label htmlFor="location">Last name</label>
                  <input
                    type="text"
                    id="location"
                    value={location}
                    placeholder="Abuja, Nigeria"
                    onChange={(e) => {
                      setLocation(e.target.value);
                    }}
                  />
                </div>
              </div>
              {/*  */}
              {/*  */}
              <div className="aso-form-email-input">
                <label htmlFor="aso-email">Email</label>
                <input
                  type="email"
                  id="aso-email"
                  value={email}
                  placeholder="bakii@gmail.com"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <button type="submit" id="aso-btn__submit" onClick={handleSubmit}>
                Save Changes
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Profile;
