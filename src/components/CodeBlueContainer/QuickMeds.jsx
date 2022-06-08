import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const QuickMeds = () => {
  const fnDispatch = useDispatch();
  const fnOnClick = (event) => {
    event.preventDefault();
  };
  const [oMedCounter, fnSetMedCounter] = useState({
    "Epinepherine 1mg": 0,
    "Amiodarone 300mg": 0,
    "Amiodarone 150mg": 0,
    "Magnesium Sulfate 1g": 0,
    "Atropine 0.5mg": 0,
    "Sodium Bicarb 50mEq": 0,
    "Calcium Chloride 1g": 0,
    "Dextrose 50% 25g": 0,
  });

  const aQuickMedicationNames = [
    "Epinepherine 1mg",
    "Amiodarone 300mg",
    "Amiodarone 150mg",
    "Magnesium Sulfate 1g",
    "Atropine 0.5mg",
    "Sodium Bicarb 50mEq",
    "Calcium Chloride 1g",
    "Dextrose 50% 25g",
  ];

  return (
    <div className="column center card">
      <div className="card-header">
        <h2>Quick Meds</h2>
      </div>
      <div className="card-content center column">
        {aQuickMedicationNames.map((sMedicationName) => {
          return (
            <button
              className=""
              name={sMedicationName}
              onClick={fnOnClick}
              key={sMedicationName}
            >
              {sMedicationName}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickMeds;
