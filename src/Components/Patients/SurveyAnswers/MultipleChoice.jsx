/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Radio, Space } from "antd";

function MultipleChoice({ defaultValue, allData, serialNo,ans=[] }) {
  //   const [value, setValue] = useState(defaultValue);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    // setValue(e.target.value);
  };

  //   console.log(allData);
  //   console.log(allData?.option);
console.log("aiman",allData);
  return (
    <div className="mt-4">
      <h1>
        <span className="text-primary font-semibold">{serialNo}.</span> {" "}
        {allData?.question}
      </h1>
      {
        ans.length ? <div className="mt-2 border-[1px] border-primary rounded p-[16px]">
          {
          ans?.map((item,index) => (
            <p key={index}>{item}</p>
          ))
          
          }
          
          </div> : <Radio.Group onChange={onChange} >
        <Space direction="vertical">
          {allData?.options?.map((item) => (
            
            
            <Radio key={item} value={item}>
              {item}
            </Radio>
          ))}
        </Space>
      </Radio.Group>
      }
      
    </div>
  );
}

export default MultipleChoice;
