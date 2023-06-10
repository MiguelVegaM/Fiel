import React from "react";
import "./Button.css";

function Button({ children, specificClass }) {
  return (
    <button
      type="button"
      className={`button-component ${
        specificClass === undefined ? "" : specificClass
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
