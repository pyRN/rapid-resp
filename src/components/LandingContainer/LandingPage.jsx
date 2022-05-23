import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <main>
      <div className="hero">
        <h1>Rapid Response</h1>
        <hr></hr>
        <h2 className="hero-text">A quick charting tool for nurses.</h2>
      </div>
      <div className="row">
        <div className="card-link">
          <h2 className="card-link-header">Code FAST</h2>
          <div className="card-link-content">
            <p>Charting option for a stroke alert</p>
          </div>
        </div>
        <div className="card-link">
          <h2 className="card-link-header">Code Blue</h2>
          <div className="card-link-content">
            <p>Charting option for cardiac arrests</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
