import React from "react";
import { useDispatch } from "react-redux";

const Rhythm = () => {
  const fnDispatch = useDispatch();
  const fnOnClick = (event) => {
    event.preventDefault();
  };

  const aRhythms = [
    "Asystole",
    "PEA",
    "V-Fib",
    "V-Tach",
    "Torsades",
    "NSR",
    "ROSC",
  ];

  return (
    <div className="rhythm-card column center card">
      <div className="card-header">
        <h2>Rhythm</h2>
      </div>
      <div className="card-content center column">
        {aRhythms.map((sRhythm) => {
          return (
            <button
              className=""
              name={sRhythm}
              onClick={fnOnClick}
              key={sRhythm}
            >
              {sRhythm}
            </button>
          );
        })}
        <div>
          <input placeholder="Other" />
          <button className="" name="Other" onClick={fnOnClick}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rhythm;
