import avatar from "../assets/Avatar.svg";
import State_options from "./state_options.component";

import { useState } from "react";
const defaultFields = {
  firstName: "",
  lastName: "",
  email: "",
  mobileNumber: "",
  password: "",
  location: "",
};
const all_state_object = [
  { name: "Abia" },
  { name: "Adamawa" },
  { name: "Akwa Ibom" },
  { name: "Anambra" },
  { name: "Bauchi" },
  { name: "Bayelsa" },
  { name: "Benue" },
  { name: "Borno" },
  { name: "Cross River" },
  { name: "Delta" },
  { name: "Ebonyi" },
  { name: "Edo" },
  { name: "Ekiti" },
  { name: "Enugu" },
  { name: "FCT - Abuja" },
  { name: "Gombe" },
  { name: "Imo" },
  { name: "Jigawa" },
  { name: "Kaduna" },
  { name: "Kano" },
  { name: "Katsina" },
  { name: "Kebbi" },
  { name: "Kogi" },
  { name: "Kwara" },
  { name: "Lagos" },
  { name: "Nasarawa" },
  { name: "Niger" },
  { name: "Ogun" },
  { name: "Ondo" },
  { name: "Osun" },
  { name: "Oyo" },
  { name: "Plateau" },
  { name: "Rivers" },
  { name: "Sokoto" },
  { name: "Taraba" },
  { name: "Yobe" },
  { name: "Zamfara" },
];


const Profile_page = () => {
  
  // state for editing or not editing
  const [editing, setEditing] = useState(false);
  const change_editing_status = (e) => {
    e.preventDefault();
    setEditing(!editing);
  };
  const [formFields, setFormFields] = useState(defaultFields);
  const { firstName, lastName, email, mobileNumber, password, location } =
    formFields;
  const change_formField = (e) => {
    console.log("working");
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const save_details = () => {
    if (!firstName.trim() || !/[^a-zA-Z]/.test(firstName)) {
      alert("firstName must contain only letters");
       return
    }
    if (!lastName.trim() || !/[^a-zA-Z]/.test(lastName)) {
      alert("lastName must contain only letters");
     return
    }
    if (
      !new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ).test(email)
    ) {
      alert("Enter a valid email address");
        return
    }
    if (
      !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(password)
    ) {
      alert(
        "Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers"
      );
      return
    }
    if (!mobileNumber.trim()) {
      alert("please input mobile number");
     return
    }
    change_editing_status();
  };

  const half_display_inputs = [
    {
      label: "First Name",
      placeholder: "Sandra",
      type: "text",
      name: "firstName",
      value: firstName,
    },
    {
      label: "Last Name",
      placeholder: "Triss",
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
    <div className="w-[95%] md:w-[90%] lg:w-[80%] m-auto ">
      <h3 className="font-semibold">Your Profile</h3>
      <p className="text-[#949494]">See your personal information</p>
      <div className="bg-white">
        <div className="w-[95%] md:w-[90%] lg:w-[80%] m-auto p-[3rem]">
          <div className="flex items-center gap-[3.5rem] mb-[2rem]">
            <img
              src={avatar}
              alt="profile image"
              className=" w-[15%] md:w-[15%]"
            />
            <div>
              <h3 className="font-semibold">Baki Hanma</h3>
              <p>bakii@gmail.com</p>
            </div>
          </div>
          <form action="">
            {/* states for editing and not editing */}
            {editing ? (
              <>
                <fieldset>
                  <div className="flex flex-wrap">
                    {half_display_inputs.map((input) => {
                      return (
                        <div className="flex-[100%] md:flex-[47%] mr-0">
                          <label>{input.label}</label>
                          <br />
                          <input
                            type={input.type}
                            placeholder={input.placeholder}
                            onChange={change_formField}
                            className=" w-[100%] md:w-[97%]   border  outline-[none] p-[1.5rem] mb-[1.5rem]"
                          />
                        </div>
                      );
                    })}
                    <State_options></State_options>
                  </div>
                  <label>Email Address</label>
                  <br />
                  <input
                    type="email"
                    placeholder="bakii@gmail.com"
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
                  <button
                    onClick={change_editing_status}
                    className="border border-[#22125A] p-[1.5rem] px-[3.5rem]
                  mt-[1.5rem] text-[#22125A] rounded-[8px]
              "
                  >
                    Cancel
                  </button>
                  <button
                    onClick={save_details}
                    className="bg-[#22125A] p-[1.5rem]  px-[3.5rem] text-[white]
                  mt-[1.5rem] rounded-[8px]
              "
                  >
                    save
                  </button>
                </div>
              </>
            ) : (
              <>
                <fieldset disabled="disabled">
                  <div className="flex flex-wrap">
                    {half_display_inputs.map((input) => {
                      return (
                        <div className="flex-[100%] md:flex-[47%] justify-between">
                          <label>{input.label}</label>
                          <br />
                          <input
                            type={input.type}
                            placeholder={input.placeholder}
                            onChange={change_formField}
                            className=" w-[100%] md:w-[97%]   border  outline-[none] p-[1.5rem] mb-[1.5rem]"
                          />
                        </div>
                      );
                    })}
                    <State_options></State_options>
                  </div>
                  <label>Email Address</label>
                  <br />
                  <input
                    type="email"
                    placeholder="bakii@gmail.com"
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
                  <button
                    onClick={change_editing_status}
                    className="bg-[#22125A] 
                p-[1.5rem]  px-[3.5rem] text-[white] rounded-[8px] mt-[1.5rem]
              "
                  >
                    Edit Profile
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile_page;
