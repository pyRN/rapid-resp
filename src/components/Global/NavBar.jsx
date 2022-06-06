import { Link } from "react-router-dom";
import "./NavBar.css";
//Components
// import Clock from "./Clock";
// import CodeTime from "./CodeTime";

const NavBar = ({ oElements }) => {
  return (
    <nav className="navbar">
      <h2 className="brand" id={oElements.oHeader.sId}>
        {oElements.oHeader.sText}
      </h2>
      {/* <div className="clocks">
        <Clock />
        <CodeTime />
      </div> */}

      <div className="navbar-links">
        {oElements.aNavBtns.map((oElement) => (
          <a href={oElement.sId} className="nav-link" key={oElement.sId}>
            {oElement.sText}
          </a>
        ))}

        <Link to="/log" className="nav-link">
          Log
        </Link>
      </div>
      <div className="hamburger-menu">
        <div className="top-hamburger-line"></div>
        <div className="middle-hamburger-line"></div>
        <div className="bottom-hamburger-line"></div>
        <div className="hamburger-links">
          {oElements.aNavBtns.map((oElement) => (
            <a href={oElement.sId} className="nav-link" key={oElement.sId}>
              {oElement.sText}
            </a>
          ))}
          <Link to="/log" className="nav-link">
            Log
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
