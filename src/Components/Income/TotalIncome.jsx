import React from "react";

function TotalIncome() {
  return (
    <div className="flex justify-between items-center bg-white rounded-xl border-1  shadow-lg border-primary">
      <div className="pl-[32px]">
        <h1 className="text-[24px] font-medium">Total Income</h1>
        <h2 className="text-[44px] font-semibold text-primary">$146.36k</h2>
      </div>
      <div className="pr-[32px]">
        <img src="https://i.ibb.co/80js9J8/Coins-rafiki-1.png" alt="" />
      </div>
    </div>
  );
}

export default TotalIncome;
