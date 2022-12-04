import React from "react";

const Input = (props) => {
  return (
    <div>
      {props.label && <label htmlFor={props.htmlFor}>{props.label}</label>}
      <input
        className={`${props.className}`}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
       
        placeholder={props.placeholder}
        minLength={props.minLength}
        role={props.role}
        required
      />
    </div>
  );
};

export default Input;
