import React from "react";

export default function FormText(props) {
  return (
    <>
      <div>
        <form>
          <div className="mb-3">
            <h1> {props.heading}</h1>
            <textarea class="form-control" id="Textarea" rows="8" />
          </div>
          <button className="btn btn-primary">ConvertUppercase</button>
        </form>
      </div>
    </>
  );
}
