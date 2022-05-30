import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  let fnNavigate = useNavigate();
  return (
    <main className="landing-container">
      <div className="landing-card">
        <h1>Rapid Response</h1>
        <div className="landing-btns-container">
          <button className="landing-btn">Code FAST</button>
          <button className="landing-btn">Code BLUE</button>
        </div>
      </div>
    </main>
    // /* <div className="hero">
    //   <h1 className="title-text">Rapid Response</h1>
    //   <hr className="horz-rule"></hr>
    //   <h2 className="subtitle-text">A quick charting tool for nurses.</h2>
    // </div>
    // <div className="card-link-row">
    //   <div
    //     className="card-link code-fast-link"
    //     onClick={() => fnNavigate("/codeFast")}
    //   >
    //     <h2 className="card-link-header">Code FAST</h2>
    //     <h3 className="plus-sign">+</h3>
    //   </div>
    //   <div
    //     className="card-link code-blue-link"
    //     onClick={() => fnNavigate("/codeBlue")}
    //   >
    //     <h2 className="card-link-header">Code Blue</h2>
    //     <h3 className="plus-sign">+</h3>
    //   </div>
    // </div> */}

    // {/* <div className="landing-card">
    //   <h1 className="title-text">Rapid Response</h1> */}
    // {/* <div className="ekg">
    //     <svg
    //       height="100"
    //       width="700"
    //       viewBox="300 0 700 150"
    //       className="ekg-svg"
    //     >
    //       <polyline points="0,50 500,50 505,40 510,30 515,28 520,25 525,25 530,28 535,30 540,40 545,50 560,50 565,65 570,-60 575,75 580,50 600,50 605,45 610,40  615,35 620,30 630,25 632,25 635,26 645,35 655,45 660,50 1000,50" />
    //     </svg>
    //   </div> */}
    // {/* <div className="row">
    //     <button>Start Code Fast</button>
    //     <button>Start Code Blue</button>
    //   </div>
    // </div> */}
  );
};

export default LandingPage;
