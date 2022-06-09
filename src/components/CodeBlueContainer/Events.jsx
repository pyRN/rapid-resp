import React from "react";
import { useDispatch } from "react-redux";

const Events = () => {
  const fnDispatch = useDispatch();
  const fnOnClick = (event) => {
    event.preventDefault();
  };

  return (
    <div className="events-card column center card">
      <div className="card-header">
        <h2>Event</h2>
      </div>
      <div className="card-content center column">
        <button className="code-blue-btn" onClick={fnOnClick}>
          Code Start
        </button>
        <button className="code-blue-btn" onClick={fnOnClick}>
          Pulse Check
        </button>
        <button className="code-blue-btn" onClick={fnOnClick}>
          R.O.S.C
        </button>
        <button className="code-blue-btn" onClick={fnOnClick}>
          Transferred
        </button>
        <button className="code-blue-btn" onClick={fnOnClick}>
          Expired
        </button>
      </div>
    </div>
  );
};

export default Events;
