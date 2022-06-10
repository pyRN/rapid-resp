import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Procedures = () => {
  return (
    <div className="procedures-card column center card">
      <div className="card-header">
        <h2>Procedures</h2>
      </div>
      <div className="card-content center column">
        <button
          className="btn code-blue-btn"
          name="I.V."
          key="I.V."
          data-toggle="modal"
          data-target="#ivModal"
        >
          I.V.
        </button>
        <button
          className="btn code-blue-btn"
          name="I.O."
          key="I.O."
          data-toggle="modal"
          data-target="#ioModal"
        >
          I.O.
        </button>
        <button
          className="btn code-blue-btn"
          name="Intubation"
          key="Intubation"
          data-toggle="modal"
          data-target="#intubateModal"
        >
          Intubation
        </button>
        <button
          className="btn code-blue-btn"
          name="Chest Tube"
          key="Chest Tube"
          data-toggle="modal"
          data-target="#chestTubeModal"
        >
          Chest Tube
        </button>
        <button
          className="btn code-blue-btn"
          name="Central Line"
          key="Central Line"
          data-toggle="modal"
          data-target="#centralLineModal"
        >
          Central Line
        </button>
      </div>
    </div>
  );
};

export default Procedures;
