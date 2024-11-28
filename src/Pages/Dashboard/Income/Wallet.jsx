import React from "react";
import TotalIncome from "../../../Components/Income/TotalIncome";
import TotalIncomeStatus from "../../../Components/Income/TotalIncomeStatus";
import IncomeRatio from "../../../Components/Income/IncomeRatio";
import TotalSurveyRatio from "../../../Components/Income/TotalSurveyRatio";

function Wallet() {
  return (
    <div className="p-[32px]">
      <TotalIncome />
      <TotalIncomeStatus />
      <div className="grid gap-6 grid-cols-12">
        <IncomeRatio />
        <TotalSurveyRatio />
      </div>
    </div>
  );
}

export default Wallet;
