import React from "react";
// import { imageUrl } from "../../lib/constant";

const SignleUser = ({ status, item, handleChat, setParticipantDetails }) => {

//   console.log(item?.message?.message)
setParticipantDetails(item);
console.log(item?.lastMessage?.message);
  return (
    <div
      onClick={() => handleChat(item)}
      className={`{ ${
        status
          ? "bg-secondary flex gap-3 mt-3 border-[1px] mr-5 border-secondary cursor-pointer hover:bg-secondary rounded-[10px] p-[16px]"
          : " flex gap-3 mt-3 border-[1px] mr-5 border-secondary cursor-pointer hover:bg-secondary rounded-[10px] p-[16px]"
      } `}
    >
      <div>
        {
          item?.participantDetails?.image?.publicFileURL ? (
            <img
              className="w-[50px] h-[50px] rounded-full"
              src="https://i.ibb.co/GtxhMsK/aiman.jpg"
              alt=""
            />
          ) : (
            <img
              className="w-[50px] h-[50px] rounded-full"
              src={`${import.meta.env.VITE_BASE_URL}${item?.participantDetails?.image?.publicFileURL}`}
              alt=""
            />
          )
        }
      </div>
      <div>
        <h1 className="text-primary font-semibold font-['Montserrat'] text-lg">
          {/* {item?.chat?.userId?.fullName} */}
          {item?.participantDetails?.name}
        </h1>
        <p className="text-sm font-normal font-['Montserrat']">
          {/* {item?.message?.message.slice(0, 11)} {item?.message?.message.length > 11 && "..."} */}
        { item?.lastMessage?.message ? item?.lastMessage?.message.slice(0, 18)+"..."  : "File Attached"}
        </p>
      </div>
    </div>
  );
};

export default SignleUser;