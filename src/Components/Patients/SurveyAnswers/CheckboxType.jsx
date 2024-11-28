import React from "react";
import { Checkbox } from "antd";

function CheckboxType({ defaultValues, allData, serialNo,ans = []}) {
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  console.log(ans);
  const plainOptions = ["Apple", "Pear", "Orange"];
  const options = [
    {
      label: "Apple",
      value: "Apple",
    },
    {
      label: "Pear",
      value: "Pear",
    },
    {
      label: "Orange",
      value: "Orange",
    },
  ];

//   console.log(allData.option);
//   console.log(options);
console.log("aiman",allData);

  return (
    <div className="mt-4">
      <h1>
        <span className="text-primary font-semibold">{serialNo}.</span>{" "}
        {allData?.question}
      </h1>
      {
        ans.length ? <div className="mt-2 border-[1px] border-primary rounded p-[16px]">
        {
        ans?.map((item,index) => (
          <p key={index}>{item}</p>
        ))
        
        }
        
        </div> : <div className="mt-2">
        <Checkbox.Group
          className="flex flex-col gap-3"
          options={allData?.options}
          // defaultValue={defaultValues}
          onChange={onChange}
        />
      </div>
      }
      
    </div>
  );
}

export default CheckboxType;
