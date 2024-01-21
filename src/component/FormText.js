import React, { useState } from "react";

export default function FormText(props) {
  const [text, setText] = useState[""];
  const uppercase = () => {
    let textupdated = text.toUppercase();
    setText(textupdated);
  };
  const handleText = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div>
        <form>
          <div className="mb-3">
            <h1> {props.heading}</h1>
            <textarea
              class="form-control"
              id="Textarea"
              value={text}
              onChange={handleText}
              rows="8"
            />
          </div>
          <button className="btn btn-primary" onClick={uppercase}>
            ConvertUppercase
          </button>
        </form>
      </div>
    </>
  );
}
