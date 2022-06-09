import React from "react";
import { useDispatch } from "react-redux";

function Defibrillate() {
  const fnDispatch = useDispatch();
  const fnOnClick = (event) => {
    event.preventDefault();
  };

  return (
    <div className="defibrillate-card column center card">
      <div className="card-header">
        <h2>Defibrillate</h2>
      </div>
      <div className="card-content center row">
        <select className="" id="joulesSelect">
          <option value="50 Joules">50 Joules</option>
          <option value="100 Joules">100 Joules</option>
          <option value="200 Joules">200 Joules</option>
          <option value="300 Joules">300 Joules</option>
          <option value="360 Joules">360 Joules</option>
        </select>
        <button className="" name="shock" onClick={fnOnClick}>
          Shock
        </button>
      </div>
    </div>
  );
}

export default Defibrillate;
