import React from "react";
import { useDispatch } from "react-redux";

const Outcome = () => {
  const fnDispatch = useDispatch();
  const fnOnClick = (event) => {
    event.preventDefault();
  };

  return (
    <div className="outcome-card column center card">
      <div className="card-header">
        <h2>Event</h2>
      </div>
      <div className="card-content center column">
        <button onClick={fnOnClick}>Code Start</button>
        <button onClick={fnOnClick}>Pulse Check</button>
        <button onClick={fnOnClick}>R.O.S.C</button>
        <button onClick={fnOnClick}>Transferred</button>
        <button onClick={fnOnClick}>Expired</button>
      </div>
    </div>
  );
};

export default Outcome;
