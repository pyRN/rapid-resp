import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  let fnNavigate = useNavigate();
  return (
    <main className="landing-container">
      <div className="landing-card">
        <h1>Rapid Response</h1>
        <hr></hr>
        <div className="landing-btns-container">
          <button
            className="landing-btn"
            onClick={() => fnNavigate("/codeFast")}
          >
            Code FAST
          </button>
          <button
            className="landing-btn"
            onClick={() => fnNavigate("/codeBlue")}
          >
            Code BLUE
          </button>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
