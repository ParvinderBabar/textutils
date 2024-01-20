import React from "react";

export default function FormText(props) {
  return (
    <>
      <div>
        <form>
          <div className="mb-3">
            {props.h1}
            <textarea class="form-control" id="Textarea" rows="8" />
          </div>
        </form>
      </div>
    </>
  );
}
