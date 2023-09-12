import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextInput(props) {
  const handleUpperCase = () => {
    // let newText = text.toUpperCase();
    // setText(newText);

    setText(text.toUpperCase());
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="10"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpperCase}>
        Upper Case
      </button>
    </div>
  );
}

TextInput.protoTypes = {
  heading: PropTypes.string,
};

TextInput.defaultProps = {
  heading: "Heading",
};
