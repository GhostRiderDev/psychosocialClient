import React from "react";
import { useNavigate } from "react-router-dom";

function SettingsHeader({ SettingsHeaderData, setCurrentLink, currentLink }) {
  const navigate = useNavigate();
  return (
    <div className="flex gap-5 ">
      {SettingsHeaderData.map((item) => (
        <div key={item.id}>
          <div
            onClick={(e) => setCurrentLink(item?.link)}
            className={`text-[18px] cursor-pointer p-[15px] py-2 text-primary ${
              currentLink === item?.link ? "bg-primary text-white" : "bg-white"
            }  border-[1px] rounded-[4px] border-primary hover:bg-primary hover:text-white`}
          >
            {item.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SettingsHeader;
