import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const CPR = () => {
  const fnDispatch = useDispatch();
  const fnOnClick = (event) => {
    event.preventDefault();
  };
  return (
    <div className="column center card">
      <div className="card-header">
        <h2>CPR</h2>
      </div>
      <div className="card-content center row">
        <h3 className="">Current CPR Time: 00:00</h3>
        <button className="" name="stopCpr" onClick={fnOnClick}>
          Stop
        </button>
        <button className="" name="startCpr" onClick={fnOnClick}>
          Start
        </button>
      </div>
    </div>
  );
};

export default CPR;
