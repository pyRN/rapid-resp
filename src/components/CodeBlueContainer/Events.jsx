import React from "react";
import { useDispatch } from "react-redux";

const Events = () => {
  const fnDispatch = useDispatch();
  const fnOnClick = (event) => {
    event.preventDefault();
  };

  const aEventNames = [
    "Patient Arrived",
    "Code Start",
    "Pulse Check",
    "R.O.S.C",
    "Transferred",
    "Expired",
    ,
  ];

  return (
    <div className="events-card column center card">
      <div className="card-header">
        <h2>Event</h2>
      </div>
      <div className="card-content center column">
        {aEventNames.map((sEventName) => {
          return (
            <button
              className="btn code-blue-btn"
              name={sEventName}
              onClick={fnOnClick}
              key={sEventName}
            >
              {sEventName}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Events;
