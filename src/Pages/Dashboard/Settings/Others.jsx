import { SettingOutlined } from "@ant-design/icons";
import React, { useState, useRef, useMemo, useEffect } from "react";
import { Collapse, Select, Button } from "antd";
import JoditEditor from "jodit-react";
const { Option } = Select;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function Others() {
  const [About, setAbout] = useState("About Us");
  const editor = useRef(null);
  const [Contact, setContact] = useState("Contact Us");
  const [expandIconPosition, setExpandIconPosition] = useState("end");
  const onPositionChange = (newExpandIconPosition) => {
    setExpandIconPosition(newExpandIconPosition);
  };

  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: "About Us",
      children: (
        <div className="">
          <JoditEditor
            ref={editor}
            value={About}
            onChange={(newContent) => {
              setAbout(newContent);
            }}
          />

          <button className="text-[18px] cursor-pointer  border-[1px] bg-primary text-white rounded-[4px] border-primary py-[5px] mt-5 px-[50px] w-full">
            Save
          </button>
        </div>
      ),
    },
  ];
  const item2 = [
    {
      key: "1",
      label: "Contact Us",
      children: (
        <div className="">
          <JoditEditor
            ref={editor}
            value={Contact}
            onChange={(newContent) => {
              setContact(newContent);
            }}
          />

          <button className="text-[18px] cursor-pointer  border-[1px] bg-primary text-white rounded-[4px] border-primary py-[5px] mt-5 px-[50px] w-full">
            Save
          </button>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="mb-[24px]">
        <h1 className="text-[24px] font-semibold ">Others Information</h1>
      </div>
      <div className="rounded-xl border-1 gap-[16px]  w-full   flex flex-col">
        <Collapse
          className="bg-white"
          // defaultActiveKey={["1"]}
          onChange={onChange}
          expandIconPosition={expandIconPosition}
          items={items}
        />
        <Collapse
          className="bg-white"
          // defaultActiveKey={["1"]}
          onChange={onChange}
          expandIconPosition={expandIconPosition}
          items={item2}
        />
      </div>
    </div>
  );
}

export default Others;
