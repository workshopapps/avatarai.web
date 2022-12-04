
import avatar from "../../assets/Avatar.svg";
import State_options from "./state_options.component";
import style from "./profile.module.css"

import { useState } from "react";
import Button from "../landingPage/Button/Button";
const defaultFields = {
  firstName: "",
  lastName: "",
  email: "",
  mobileNumber: "",
  password: "",
  location: "",
};

const Profile = () => {
  // state for editing or not editing
  const [editing, setEditing] = useState(false);
  const change_editing_status = (e) => {
    e.preventDefault();
    setEditing(!editing);
  };
  const user = JSON.parse(localStorage.getItem("userData"));
  const [formFields, setFormFields] = useState(defaultFields);
  const { firstName, lastName, email, mobileNumber, password, location } =
    formFields;
  const change_formField = (e) => {
    console.log("working");
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const save_details = (e) => {
    e.preventDefault()
    if (!firstName.trim() || !/[a-zA-Z]/.test(firstName)) {
      alert("firstName must contain only letters");
      return;
    }
    if (!lastName.trim() || !/[a-zA-Z]/.test(lastName)) {
      alert("lastName must contain only letters");
      return;
    }
    if (
      !new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ).test(email)
    ) {
      alert("Enter a valid email address");
      return;
    }
    if (
      !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(password)
    ) {
      alert(
        "Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers"
      );
      return;
    }
    if (!mobileNumber.trim()) {
      alert("please input mobile number");
      return;
    }
    change_editing_status();
  };

  const half_display_inputs = [
    {
      label: "First Name",
      placeholder: "Eddie",
      type: "text",
      name: "firstName",
      value: firstName,
    },
    {
      label: "Last Name",
      type: "text",
      name: "lastName",
      value: lastName,
    },
    {
      label: "Mobile Number",
      placeholder: "+2349078985443",
      type: "tel",
      name: "mobileNuber",
      value: mobileNumber,
    },
  ];
  return (
    <div className="m-auto bg-[#f7f7f7] max-w-[875px] p-[4px] md:p-[32px] lg:p-[49px]">
      <h3 className="font-semibold">Your Profile</h3>
      <p className="text-[#949494]">See your personal information</p>
      <div className="bg-[#f7f7f7]">
        <div className="flex flex-col
        pl-[36px] pr-[36px] md:pl-[82px] 
        md:pl-[82px]  ld:pl-[166px] ld:pr-[166px]
        align-center w-[95%] md:w-[90%] lg:w-[80%] m-auto p-[o.6rem] pb-[2rem] pt-[1rem] md:p-[3rem] lg:p-[3rem] bg-[#fff]">
          <div className="flex items-center gap-[1.5rem] md:gap-[2.5rem] lg:gap-[3.5em] mb-[2rem]"
         >
            <img
              src={avatar}
              alt="profile image"
              className={`w-[15%] md:w-[15%] ${style.profilePix}`}
            />
            <div>
              <h3 className="font-semibold">{user?.username}</h3>
              <p>{user?.email}</p>
            </div>
          </div>
          <form action="" className={style.form}>
            {/* states for editing and not editing */}
            {editing ? (
              <>
                <fieldset>
                  <div className="flex flex-wrap">
                    <div className="flex-[100%] md:flex-[50%] md:pr-[-1rem]">
                      <label>First Name</label>
                      <br />
                      <input
                        type="text"
                        placeholder="Eddie"
                        name="firstName"
                        value={firstName}
                        onChange={change_formField}
                        className=" w-[100%] md:w-[96%]   border  outline-[none] p-[1.5rem] mb-[1.5rem]"
                      />
                    </div>
                    <div className="flex-[100%] md:flex-[50%] ">
                      <label>Last Name</label>
                      <br />
                      <input
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={change_formField}
                        className=" w-[100%] md:w-[100%]   border  outline-[none] p-[1.5rem] mb-[1.5rem]"
                      />
                    </div>
                    <div className="flex-[100%] md:flex-[50%]  ">
                      <label>Mobile number</label>
                      <br />
                      <input
                        placeholder="+2349078985443"
                        type="tel"
                        name="mobileNumber"
                        value={mobileNumber}
                        onChange={change_formField}
                        className=" w-[100%] md:w-[96%]   border  outline-[none] p-[1.5rem] mb-[1.5rem]"
                      />
                    </div>
                    <div className="flex-[100%] md:flex-[50%] ">
                      <label>Location</label>
                      <br />
                      <select
                        id="state"
                        name="state"
                        className=" w-[100%] md:w-[100%]   border  outline-[none] p-[1.5rem] mb-[1.5rem]"
                      >
                        <option value="Abia">Abia</option>
                        <option value="Adamawa">Adamawa</option>
                        <option value="Akwa Ibom">Akwa Ibom</option>
                        <option value="Anambra">Anambra</option>
                        <option value="Bauchi">Bauchi</option>
                        <option value="Bayelsa">Bayelsa</option>
                        <option value="Benue">Benue</option>
                        <option value="Borno">Borno</option>
                        <option value="Cross River">Cross River</option>
                        <option value="Delta">Delta</option>
                        <option value="Ebonyi">Ebonyi</option>
                        <option value="Edo">Edo</option>
                        <option value="Ekiti">Ekiti</option>
                        <option value="Enugu">Enugu</option>
                        <option value="FCT - Abuja">FCT - Abuja</option>
                        <option value="Gombe">Gombe</option>
                        <option value="Imo">Imo</option>
                        <option value="Jigawa">Jigawa</option>
                        <option value="Kaduna">Kaduna</option>
                        <option value="Kano">Kano</option>
                        <option value="Katsina">Katsina</option>
                        <option value="Kebbi">Kebbi</option>
                        <option value="Kogi">Kogi</option>
                        <option value="Kwara">Kwara</option>
                        <option value="Lagos">Lagos</option>
                        <option value="Nasarawa">Nasarawa</option>
                        <option value="Niger">Niger</option>
                        <option value="Ogun">Ogun</option>
                        <option value="Ondo">Ondo</option>
                        <option value="Osun">Osun</option>
                        <option value="Oyo">Oyo</option>
                        <option value="Plateau">Plateau</option>
                        <option value="Rivers">Rivers</option>
                        <option value="Sokoto">Sokoto</option>
                        <option value="Taraba">Taraba</option>
                        <option value="Yobe">Yobe</option>
                        <option value="Zamfara">Zamfara</option>
                      </select>
                    </div>
                  </div>
                  <label>Email Address</label>
                  <br />
                  <input
                    type="email"
                    placeholder="eddie@gmail.com"
                    name="email"
                    value={email}
                    onChange={change_formField}
                    className="w-[100%]  border outline-[none] p-[1.5rem] mb-[1.5rem]"
                  />

                  <label>Password</label>
                  <br />
                  <input
                    type="password"
                    placeholder="1234567"
                    name="password"
                    value={password}
                    onChange={change_formField}
                    className="w-[100%] border outline-[none] p-[1.5rem] mb-[1.5rem]"
                  />
                </fieldset>
                <div className="flex justify-between md:justify-around">
                  <Button
                    onClick={change_editing_status}
                    className="border border-[#22125A] p-[1.5rem] px-[2rem] md:px-[3.5rem]
                  mt-[1.5rem] text-[#22125A] rounded-[8px]
              "
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={save_details}
                    className="bg-[#22125A] p-[1.5rem]  px-[2rem] md:px-[3.5rem] text-[white]
                  mt-[1.5rem] rounded-[8px]
              "
                  >
                    save
                  </Button>
                </div>
              </>
            ) : (
              <>
                <fieldset disabled="disabled">
                  <div className="flex flex-wrap">
                    <div className="flex-[100%] md:flex-[50%] md:pr-[-1rem]">
                      <label>First Name</label>
                      <br />
                      <input
                        type="text"
                        placeholder="Eddie"
                        name="firstName"
                        value={firstName}
                        onChange={change_formField}
                        className=" w-[100%] md:w-[96%]   border  outline-[none] p-[1.5rem] mb-[1.5rem]"
                      />
                    </div>
                    <div className="flex-[100%] md:flex-[50%] ">
                      <label>Last Name</label>
                      <br />
                      <input
                        type="text"
                        name="LastName"
                        value={lastName}
                        onChange={change_formField}
                        className=" w-[100%] md:w-[100%]   border  outline-[none] p-[1.5rem] mb-[1.5rem]"
                      />
                    </div>
                    <div className="flex-[100%] md:flex-[50%]  ">
                      <label>Mobile number</label>
                      <br />
                      <input
                        placeholder="+2349078985443"
                        type="tel"
                        name="mobileNuber"
                        value={mobileNumber}
                        onChange={change_formField}
                        className=" w-[100%] md:w-[96%]   border  outline-[none] p-[1.5rem] mb-[1.5rem]"
                      />
                    </div>
                    <div className="flex-[100%] md:flex-[50%] ">
                      <label>Location</label>
                      <br />
                      <select
                        id="state"
                        name="state"
                        className=" w-[100%] md:w-[100%]   border  outline-[none] p-[1.5rem] mb-[1.5rem]"
                      >
                        <option value="Abia">Abia</option>
                        <option value="Adamawa">Adamawa</option>
                        <option value="Akwa Ibom">Akwa Ibom</option>
                        <option value="Anambra">Anambra</option>
                        <option value="Bauchi">Bauchi</option>
                        <option value="Bayelsa">Bayelsa</option>
                        <option value="Benue">Benue</option>
                        <option value="Borno">Borno</option>
                        <option value="Cross River">Cross River</option>
                        <option value="Delta">Delta</option>
                        <option value="Ebonyi">Ebonyi</option>
                        <option value="Edo">Edo</option>
                        <option value="Ekiti">Ekiti</option>
                        <option value="Enugu">Enugu</option>
                        <option value="FCT - Abuja">FCT - Abuja</option>
                        <option value="Gombe">Gombe</option>
                        <option value="Imo">Imo</option>
                        <option value="Jigawa">Jigawa</option>
                        <option value="Kaduna">Kaduna</option>
                        <option value="Kano">Kano</option>
                        <option value="Katsina">Katsina</option>
                        <option value="Kebbi">Kebbi</option>
                        <option value="Kogi">Kogi</option>
                        <option value="Kwara">Kwara</option>
                        <option value="Lagos">Lagos</option>
                        <option value="Nasarawa">Nasarawa</option>
                        <option value="Niger">Niger</option>
                        <option value="Ogun">Ogun</option>
                        <option value="Ondo">Ondo</option>
                        <option value="Osun">Osun</option>
                        <option value="Oyo">Oyo</option>
                        <option value="Plateau">Plateau</option>
                        <option value="Rivers">Rivers</option>
                        <option value="Sokoto">Sokoto</option>
                        <option value="Taraba">Taraba</option>
                        <option value="Yobe">Yobe</option>
                        <option value="Zamfara">Zamfara</option>
                      </select>
                    </div>
                  </div>
                  <label>Email Address</label>
                  <br />
                  <input
                    type="email"
                    placeholder="eddie@gmail.com"
                    name="email"
                    value={email}
                    onChange={change_formField}
                    className="w-[100%]  border outline-[none] p-[1.5rem] mb-[1.5rem]"
                  />

                  <label>Password</label>
                  <br />
                  <input
                    type="password"
                    placeholder="1234567"
                    name="password"
                    value={password}
                    onChange={change_formField}
                    className="w-[100%] border outline-[none] p-[1.5rem] mb-[1.5rem]"
                  />
                </fieldset>
                <div className="flex justify-center md:justify-end">
                  <Button
                    onClick={change_editing_status}
                    className={`bg-[#22125A] 
                p-[1.5rem]  px-[3.5rem] text-[white] rounded-[8px] mt-[1.5rem]
               ${style.edit}`}
                  >
                    Edit Profile
                  </Button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
               
