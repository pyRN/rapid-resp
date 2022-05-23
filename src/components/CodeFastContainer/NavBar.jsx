//Components
// import Clock from "./Clock";
// import CodeTime from "./CodeTime";

const NavBar = () => {
  return (
    <nav className="navbar">
      <button className="back-btn">Back</button>
      <h2 className="brand">Code FAST</h2>
      {/* <div className="clocks">
        <Clock />
        <CodeTime />
      </div> */}
      <div className="navbar-links">
        <a href="#nih-container" className="nav-link">
          NIH
        </a>
        <a href="#checklist-container" className="nav-link">
          Checklist
        </a>
        <a href="#procedures-container" className="nav-link">
          Procedures
        </a>
        <a href="#medications-container" className="nav-link">
          Medications
        </a>
        <a href="#xteam-members-container" className="nav-link">
          Team
        </a>
        <a href="#notes-container" className="nav-link">
          Notes
        </a>
        <a href="#log-container" className="nav-link">
          Log
        </a>
      </div>
      <div className="hamburger-menu">
        <div className="top-hamburger-line"></div>
        <div className="middle-hamburger-line"></div>
        <div className="bottom-hamburger-line"></div>
        <div className="hamburger-links">
          <a href="#nih-container" className="nav-link">
            NIH
          </a>
          <a href="#checklist-container" className="nav-link">
            Checklist
          </a>
          <a href="#procedures-container" className="nav-link">
            Procedures
          </a>
          <a href="#medications-container" className="nav-link">
            Medications
          </a>
          <a href="#xteam-members-container" className="nav-link">
            Team
          </a>
          <a href="#notes-container" className="nav-link">
            Notes
          </a>
          <a href="#log-container" className="nav-link">
            Log
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
