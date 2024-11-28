import React from "react";

function TotalIncomeStatus() {
  return (
    <div className=" flex justify-between gap-5 mt-5">
      <div className="rounded-lg border-1 w-[250px] shadow-lg items-center py-[16px] px-[20px] bg-white border-primary border-[1px] p-[24px] flex gap-5">
        <div>
          <h4 className="text-[16px]">Total Income</h4>
          <h1 className="text-black text-[32px] mt-[20px] font-semibold">
            $ 146.36k
          </h1>
        </div>
      </div>
      <div className="rounded-lg border-1  w-[250px] shadow-lg items-center py-[16px] px-[20px] bg-white border-primary border-[1px] p-[24px] flex gap-5">
        <div>
          <h4 className="text-[16px]">Total Sent Amount</h4>
          <h1 className="text-[#F44336] text-[32px] mt-[20px] font-semibold">
            $ 146.36k
          </h1>
        </div>
      </div>
      <div className="rounded-lg border-1  w-[250px] shadow-lg items-center py-[16px] px-[20px] bg-white border-primary border-[1px] p-[24px] flex gap-5">
        <div>
          <h4 className="text-[16px]">Total Pending Transaction</h4>
          <h1 className="text-[#FFEB3B] text-[32px] mt-[20px] font-semibold">
            $ 146.36k
          </h1>
        </div>
      </div>
      <div className="rounded-lg border-1  w-[250px] shadow-lg items-center py-[16px] px-[20px] bg-white border-primary border-[1px] p-[24px] flex gap-5">
        <div>
          <h4 className="text-[16px]">My Income</h4>
          <h1 className="text-[#54A630] text-[32px] mt-[20px] font-semibold">
            $ 146.36k
          </h1>
        </div>
      </div>
    </div>
  );
}

export default TotalIncomeStatus;
