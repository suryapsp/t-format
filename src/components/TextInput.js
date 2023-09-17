import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextInput(props) {
  const handleUpperCase = () => {
    // let newText = text.toUpperCase();
    // setText(newText);

    setText(text.toUpperCase());
  };

  const handleLowerCase = () => {
    setText(text.toLocaleLowerCase());
  };

  const handleClearCase = () => {
    setText('');
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode === 'dark' ? 'gray' : 'white'}}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpperCase}>
          Upper Case
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowerCase}>
          Lower Case
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearCase}>
          Clear
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>
          Copy to Clipboard
        </button>
      </div>

      <div className="container my-3">
        <h2>Text Statistics</h2>
        <p>
          {text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} characters.{" "}
          {0.005 * text.split(" ").filter((element)=>{return element.length !== 0}).length} minutes read
        </p>
      </div>
    </>
  );
}

TextInput.protoTypes = {
  heading: PropTypes.string,
};

TextInput.defaultProps = {
  heading: "Heading",
};
