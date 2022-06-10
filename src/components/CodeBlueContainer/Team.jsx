import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Team = () => {
  const fnDispatch = useDispatch();
  const fnOnClick = (event) => {
    event.preventDefault();
  };
  return (
    <div className="team-card column center card">
      <div className="card-header">
        <h2>Team Members</h2>
      </div>
      <div className="card-content center row">
        <input placeholder="Team Member Name" />
        <button
          className="btn code-blue-btn"
          name="addTeamMember"
          onClick={fnOnClick}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Team;
