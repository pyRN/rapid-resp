import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Medications = () => {
  const fnDispatch = useDispatch();
  const fnOnClick = (event) => {
    event.preventDefault();
  };
  return (
    <div className="column center card">
      <div className="card-header">
        <h2>Medications</h2>
      </div>
      <div className="card-content center row">
        <input placeholder="Medication" />
        <button className="" name="addMedication" onClick={fnOnClick}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Medications;
