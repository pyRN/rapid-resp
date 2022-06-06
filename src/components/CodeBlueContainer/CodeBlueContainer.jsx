//Components
import Footer from "../Global/Footer";
import NavBar from "../Global/NavBar";

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
      <Footer />
    </main>
  );
};

export default CodeBlueContainer;
