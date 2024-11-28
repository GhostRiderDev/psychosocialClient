import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Individual Therapy", value: 50 },
  { name: "Teen Therapy(13-16)", value: 25 },
  { name: "Couple Therapy", value: 25 },
];
const COLORS = ["#54A630", "#8CC374", "#CAE3BF"];

function TotalSurveyRatio() {
  return (
    <div className="bg-white mt-5 rounded-xl border-1 shadow-xl col-span-4 border-secondary">
      <div className=" border-b-2 border-secondary">
        <h1 className="text-[20px] font-medium p-[16px]">Total Survey Ratio</h1>
      </div>
      <div className="flex items-center mt-5">
        <div className="ml-[10px]">
          <PieChart width={150} height={200}>
            <Pie
              data={data}
              cx={70}
              //   cy={200}
              innerRadius={30}
              outerRadius={70}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            <span className="bg-[#54A630] w-4 h-4 rounded-full"></span>
            <span className="text-[14px] font-semibold">
              Individual Therapy
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="bg-[#8CC374] w-4 h-4 rounded-full"></span>
            <span className="text-[14px] font-semibold">
              Teen Therapy(13-16)
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="bg-[#CAE3BF] w-4 h-4 rounded-full"></span>
            <span className="text-[14px] font-semibold">Couple Therapy</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalSurveyRatio;
