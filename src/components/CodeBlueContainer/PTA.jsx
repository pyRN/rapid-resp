import { useRef } from "react";
import { useDispatch } from "react-redux";
import { fnSetPtaLog } from "../../features/LogSlices/logSlice";

// seSelector((state) => state.ptaReducer.sPtaMeds);
const PTA = () => {
  console.log("Render PTA Container");
  const fnDispatch = useDispatch();
  const oNarrativeInput = useRef(null);
  const oHistoryInput = useRef(null);
  const oPtaMedsInput = useRef(null);

  const fnOnChange = (event) => {
    event.preventDefault();
    fnDispatch(
      fnSetPtaLog([
        oNarrativeInput.current.value,
        oPtaMedsInput.current.value,
        oHistoryInput.current.value,
      ])
    );
  };

  return (
    <div className="column center card">
      <div className="card-header">
        <h2>Prior To Arrival</h2>
      </div>
      <div className="card-content">
        <div className="column">
          <div className="column text-area">
            <label>Narrative:</label>
            <textarea
              placeholder="Type Narrative"
              onChange={fnOnChange}
              ref={oNarrativeInput}
            ></textarea>
          </div>
          <div className="column text-area">
            <label>Meds PTA:</label>
            <textarea
              placeholder="Type Meds PTA"
              onChange={fnOnChange}
              ref={oPtaMedsInput}
            ></textarea>
          </div>
          <div className="column text-area">
            <label>History:</label>
            <textarea
              placeholder="Type History"
              onChange={fnOnChange}
              ref={oHistoryInput}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PTA;
