import React from "react";

function Status() {
  return (
    <div className=" flex justify-between gap-5">
      <div className="rounded-lg border-1 shadow-lg items-center py-[16px] px-[50px] bg-white border-primary border-[1px] p-[24px] flex gap-5">
        <img
          className="w-[64px] h-[64px]"
          src="https://i.ibb.co/rmSwrbp/Money-bag.png"
          alt=""
        />
        <div>
          <h4 className="text-[18px]">Total Income</h4>
          <h1 className="text-[#54A630] text-[32px] font-semibold">$78.5k</h1>
        </div>
      </div>
      <div className="rounded-lg border-1 shadow-lg items-center py-[16px] px-[50px] bg-white border-primary border-[1px] p-[24px] flex gap-5">
        <img
          className="w-[64px] h-[64px]"
          src="https://i.ibb.co/z4Bwpt9/Transaction.png"
          alt=""
        />
        <div>
          <h4 className="text-[18px]">Therapist Transaction</h4>
          <h1 className="text-[#54A630] text-[32px] font-semibold">$78.5k</h1>
        </div>
      </div>
      <div className="rounded-lg border-1 shadow-lg items-center py-[16px] px-[50px] bg-white border-primary border-[1px] p-[24px] flex gap-5">
        <img
          className="w-[64px] h-[64px]"
          src="https://i.ibb.co/Vv5DSXJ/Schedule.png"
          alt=""
        />
        <div>
          <h4 className="text-[18px]">Total Appointments</h4>
          <h1 className="text-[#54A630] text-[32px] font-semibold">7,850</h1>
        </div>
      </div>
    </div>
  );
}

export default Status;
