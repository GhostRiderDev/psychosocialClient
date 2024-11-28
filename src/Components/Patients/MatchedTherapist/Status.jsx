import React from "react";

function Status() {
  return (
    <div className=" flex justify-between gap-5">
      <div className="rounded-lg border-1 shadow-lg items-center py-[16px] px-[44px] bg-white border-primary border-[1px] p-[24px] flex gap-5">
        <img
          className="w-[64px] h-[64px]"
          src="https://i.ibb.co/vvv9HZj/Individual-Therapist.png"
          alt=""
        />
        <div>
          <h4 className="text-[18px]">Individual Therapist</h4>
          <h1 className="text-[#54A630] text-[32px] font-semibold">120</h1>
        </div>
      </div>
      <div className="rounded-lg border-1 shadow-lg items-center py-[16px] px-[44px] bg-white border-primary border-[1px] p-[24px] flex gap-5">
        <img
          className="w-[64px] h-[64px]"
          src="https://i.ibb.co/7XMGWr6/Teen-Therapist.png"
          alt=""
        />
        <div>
          <h4 className="text-[18px]">Teen(13-18) Therapist</h4>
          <h1 className="text-[#54A630] text-[32px] font-semibold">10</h1>
        </div>
      </div>
      <div className="rounded-lg border-1 shadow-lg items-center py-[16px] px-[44px] bg-white border-primary border-[1px] p-[24px] flex gap-5">
        <img
          className="w-[64px] h-[64px]"
          src="https://i.ibb.co/gZgTGcq/Couples-Therapist.png"
          alt=""
        />
        <div>
          <h4 className="text-[18px]">Couple Therapist</h4>
          <h1 className="text-[#54A630] text-[32px] font-semibold">50</h1>
        </div>
      </div>
    </div>
  );
}

export default Status;
