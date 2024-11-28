import React from "react";


function Status() {
 
  return (
    <div className=" flex justify-between">
      <div className="rounded-lg border-1 shadow-lg items-center py-[16px] px-[84px] bg-white border-primary border-[1px] p-[24px] flex gap-5">
        <img
          className="w-[64px] h-[64px]"
          src="https://i.ibb.co/8gy4pt9/check-circle.png"
          alt=""
        />
        <div>
          <h4 className="text-[18px]">Completed</h4>
          <h1 className="text-[#54A630] text-[32px] font-semibold">7,850</h1>
        </div>
      </div>
      <div className="rounded-lg border-1 shadow-lg items-center py-[16px] px-[84px] bg-white border-primary border-[1px] p-[24px] flex gap-5">
        <img
          className="w-[64px] h-[64px]"
          src="https://i.ibb.co/C2XfP7V/clock.png"
          alt=""
        />
        <div>
          <h4 className="text-[18px]">Pending</h4>
          <h1 className="text-[#FFEB3B] text-[32px] font-semibold">650</h1>
        </div>
      </div>
      <div className="rounded-lg border-1 shadow-lg items-center py-[16px] px-[84px] bg-white border-primary border-[1px] p-[24px] flex gap-5">
        <img
          className="w-[64px] h-[64px]"
          src="https://i.ibb.co/HzqbWDz/x-circle.png"
          alt=""
        />
        <div>
          <h4 className="text-[18px]">Canceled</h4>
          <h1 className="text-[#F44336] text-[32px] font-semibold">120</h1>
        </div>
      </div>
    </div>
  );
}

export default Status;
