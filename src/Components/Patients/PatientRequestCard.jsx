import React from "react";
import { useNavigate } from "react-router-dom";

function PatientRequestCard({item}) {
  const navigate = useNavigate();
  console.log(item);
  return (
    <div className="flex bg-white rounded-md  mt-5 p-[16px] border-2 ">
      <div className="mr-5">
        {
          item?.image?.publicFileURL ? (
            <img
              className="w-[100px] h-[100px] rounded-full"
              src="https://i.ibb.co/GtxhMsK/aiman.jpg"
              alt=""
            />
          ) : (
            <img
              className="w-[100px] h-[100px] rounded-full"
              src={`${import.meta.env.VITE_BASE_URL}${item?.image?.publicFileURL}`}
              alt=""
            />
          )
        }
      </div>
      <div className="flex gap-3 flex-col ">
        <div>
          <h1 className="text-[22px] font-semibold">{item?.name}</h1>
          <p className="text-[14px] font-medium ">{item?.email}</p>
        </div>
        <div className="flex gap-5">
          {/* <button className="text-white bg-primary text-[18px] rounded  px-[20px]">
            Accept
          </button> */}
          <button
            onClick={() => navigate(`/patientsRequest/${item?._id}`)}
            className=" border-[1px] border-primary text-primary text-[18px]  rounded  p-[4px] px-[20px] "
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default PatientRequestCard;
