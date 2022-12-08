import React, { useState } from "react";
// import Sidebar from '../DASHBOARD_COMPONENT/Sidebar';
// import Dashboardtranslate from '../DASHBOARD_COMPONENT/dashboardtranslate';
import Dashboardlayout from "../DASHBOARD_COMPONENT/DashboardLayout";
import ProfileImg from "./Profile.jpeg";
import "./Profile.css";

import Button from "../landingPage/Button/Button";

const Profile = () => {
  const [Firstname, setFirstName] = useState("");
  const [Lastname, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  //   const [email, setEmail] = useState("");

  let user = JSON.parse(localStorage.getItem("userData"));
  const updateUser = () => {
    fetch(`https://zuvatar.hng.tech/api/v1/user/${user?.email}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }).then((response) => console.log(response));
  };
  const clearValue = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser();
    clearValue();
  };

  //   return (
  //     <>
  //     <Sidebar />
  //       <main className="aso-profile">
  //         <section className="aso-profile-section">
  //           <div className="aso-profile-header">
  //             <div>
  //               <h1>Profile</h1>
  //               <p>See your personal information</p>
  //             </div>
  //             <Dashboardtranslate />
  //           </div>
  //           <div className="aso-profile-board">
  //             <div className="aso-bio">
  //               <img src={ProfileImg} alt="Bio Img" className="" />
  //               <div className="aso-bio-details">
  //                 <h1>Baki Hanma</h1>
  //                 <p>bakii@gmail.com</p>
  //               </div>
  //             </div>
  //             <form className="aso-form-container">
  //               <div className="aso-form-name-input">
  //                 <div className="aso-form-first-name">
  //                   <label htmlFor="first_name">First name</label>
  //                   <input
  //                     type="text"
  //                     id="first_name"
  //                     value={firstName}
  //                     placeholder="Sandra"
  //                     onChange={(e) => {
  //                       setFirstName(e.target.value);
  //                     }}
  //                   />
  //                 </div>
  //                 {/*  */}
  //                 <div className="aso-form-last-name">
  //                   <label htmlFor="last_name">Last name</label>
  //                   <input
  //                     type="text"
  //                     id="last_name"
  //                     value={lastName}
  //                     placeholder="Triss"
  //                     onChange={(e) => {
  //                       setLastName(e.target.value);
  //                     }}
  //                   />
  //                 </div>
  //               </div>
  //               {/*  */}
  //               {/*  */}
  //               <div className="aso-form-mobile-location">
  //                 <div className="aso-form-mobile">
  //                   <label htmlFor="mobile">Mobile Number</label>
  //                   <input
  //                     type="text"
  //                     id="mobile"
  //                     value={mobile}
  //                     placeholder="+2349078985443"
  //                     onChange={(e) => {
  //                       setMobile(e.target.value);
  //                     }}
  //                   />
  //                 </div>
  //                 {/*  */}
  //                 <div className="aso-form-location">
  //                   <label htmlFor="location">Location</label>
  //                   <input
  //                     type="text"
  //                     id="location"
  //                     value={location}
  //                     placeholder="Abuja, Nigeria"
  //                     onChange={(e) => {
  //                       setLocation(e.target.value);
  //                     }}
  //                   />
  //                 </div>
  //               </div>
  //               {/*  */}
  //               {/*  */}
  //               <div className="aso-form-email-input">
  //                 <label htmlFor="aso-email">Email</label>
  //                 <input
  //                   type="email"
  //                   id="aso-email"
  //                   value={email}
  //                   placeholder="bakii@gmail.com"
  //                   onChange={(e) => {
  //                     setEmail(e.target.value);
  //                   }}
  //                 />
  //               </div>
  // =======
  return (
    <Dashboardlayout title="Profile" text="See your personal information">
      <main className="aso-profile">
        <section className="aso-profile-section">
          <div className="aso-profile-board">
            <div className="aso-bio">
              <img src={ProfileImg} alt="Bio Img" className="" />
              <div className="aso-bio-details">
                <h1>
                  {user?.Firstname} {user?.Lastname}
                </h1>
                <p>{user?.email}</p>
              </div>
            </div>
            <form className="aso-form-container">
              <div className="aso-form-name-input">
                <div className="aso-form-first-name">
                  <label htmlFor="first_name">First name</label>
                  <input
                    type="text"
                    id="first_name"
                    value={Firstname}
                    placeholder={user?.Firstname}
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
                    value={Lastname}
                    placeholder={user?.Lastname}
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
                  <label htmlFor="location">Location</label>
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
              {/* <div className="aso-form-email-input">
								<label htmlFor="aso-email">Email</label>
								<input
									type="email"
									id="aso-email"
									value={email}
									placeholder="eddie@gmail.com"
									onChange={(e) => {
										setEmail(e.target.value);
									}}
								/>
							</div> */}

              <Button
                type="submit"
                className="bg-[#8b70e9] aso-btn__submit"
                onClick={handleSubmit}
              >
                Save Changes
              </Button>
            </form>
          </div>
        </section>
      </main>
    </Dashboardlayout>
  );
};

export default Profile;
