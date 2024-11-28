import React from "react";
import Status from "../../../Components/Patients/MatchedTherapist/Status";
import MatchedTherapistList from "../../../Components/Patients/MatchedTherapist/MatchedTherapistList";

function MatchedTherapist() {
  return (
    <div className="p-[32px]">
      <Status />
      <MatchedTherapistList />
    </div>
  );
}

export default MatchedTherapist;
