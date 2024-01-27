import React, { useState } from "react";

export default function FormText(props) {
  const handleText = (event) => {
    setText(event.target.value);
  };
  const uppercase = () => {
    let textupdated = text.toUpperCase();
    setText(textupdated);
  };
  const lowercase = () => {
    let textupdated = text.toLowerCase();
    setText(textupdated);
  };
  const handleWork = () => {
    let textupdated = " ";
    setText(textupdated);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1> {props.heading}</h1>
          <textarea
            className="form-control"
            id="Textarea"
            value={text}
            onChange={handleText}
            rows="8"
          />
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={uppercase}>
          ConvertUppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={lowercase}>
          ConvertUppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleWork}>
          Clear
        </button>
      </div>

      <div className="container my-3">
        <h1>Overall analyses of text</h1>
        <p>
          NUMBER OF WORDS:
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }
        </p>
        <p>NUMBER OF CHARACTERS:{text.length}</p>
        <p>
          TIME TAKEN:
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}
        </p>
        <h2>Preview </h2>
        {text}
      </div>
    </>
  );
}
