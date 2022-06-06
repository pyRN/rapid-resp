//Components
import CPR from "./CPR";
import Footer from "../Global/Footer";
import Medications from "./Medications";
import NavBar from "../Global/NavBar";
import Notes from "./Notes";
import PTA from "./PTA";
import Procedures from "./Procedures";
import QuickMeds from "./QuickMeds";
import Rhythm from "./Rhythm";
import Team from "./Team";

const CodeBlueContainer = () => {
  const oCodeBlueNavElements = {
    oHeader: {
      sText: "Code Blue",
      sId: "#code-blue-header",
    },
    oClocks: {
      bClock: true,
      bCodeTime: true,
    },
    aNavBtns: [
      {
        sText: "PTA",
        sId: "#pta-nav",
      },
      {
        sText: "CPR",
        sId: "#cpr-nav",
      },
      {
        sText: "Rhythm",
        sId: "#rhythm-nav",
      },
      {
        sText: "Quick Meds",
        sId: "#quick-meds-nav",
      },
      {
        sText: "Procedures",
        sId: "#procedures-nav",
      },
      {
        sText: "Medications",
        sId: "#medications-nav",
      },
      {
        sText: "Team",
        sId: "#team-nav",
      },
      {
        sText: "Notes",
        sId: "#notes-nav",
      },
    ],
  };
  return (
    <main className="main-code-blue-container">
      <NavBar oElements={oCodeBlueNavElements} />
      <PTA />
      <CPR />
      <Rhythm />
      <QuickMeds />
      <Procedures />
      <Medications />
      <Team />
      <Notes />
      <Footer />
    </main>
  );
};

export default CodeBlueContainer;
