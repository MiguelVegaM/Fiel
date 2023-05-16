import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <button type="button" className="button-component">
      {props.children}
    </button>
  );
}

export default Button;
