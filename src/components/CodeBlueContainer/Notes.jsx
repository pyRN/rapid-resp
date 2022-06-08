import React from "react";
import { useDispatch } from "react-redux";

const Notes = () => {
  const fnDispatch = useDispatch();
  const fnOnClick = (event) => {
    event.preventDefault();
  };
  return (
    <div className="column center card">
      <div className="card-header">
        <h2>Notes</h2>
      </div>
      <div className="card-content center row">
        <textarea className="" id="noteTextArea" placeholder="Ad Hoc Notes" />
        <button className="" name="Note" onClick={fnOnClick}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Notes;
