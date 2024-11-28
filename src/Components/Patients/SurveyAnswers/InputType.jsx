import React from "react";

function InputType({ serialNo, allData, defaultValue,ans=[] }) {
  console.log(ans);
  console.log(allData);
  return (
    <div className="mt-4">
      <h1>
        <span className="text-primary font-semibold">{serialNo}.</span>{" "}
        {allData?.question}
      </h1>
      <div className="mt-2">
        {/* <div className="border-[1px] border-primary rounded p-[16px]">
          {defaultValue}
        </div> */}
        {ans.length > 0 && ans[0]}
      </div>
    </div>
  );
}

export default InputType;
