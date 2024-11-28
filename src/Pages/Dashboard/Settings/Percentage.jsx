import React from "react";
import { Input } from "antd";

function Percentage() {
  return (
    <div>
      <div className="mb-[24px]">
        <h1 className="text-[24px] font-semibold ">
          Set Transaction Percentage
        </h1>
      </div>
      <div className="rounded-xl border-1 h-[200px]  w-full  p-[24px] flex flex-col bg-white border-secondary">
        <div>
          <Input
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter transaction percentage"
            className=" bg-white rounded border border-primary w-full justify-start items-center gap-4 inline-flex focus:border-primary "
            type="number"
            suffix={
              <p className=" text-primary text-[24px] font-semibold">%</p>
            }
          />
        </div>
        <div>
          <button className="text-[18px] cursor-pointer  border-[1px] bg-primary text-white rounded-[4px] border-primary py-[10px] mt-5 px-[50px] ">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Percentage;
