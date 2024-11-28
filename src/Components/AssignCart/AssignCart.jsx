import React from "react";

const AssignCart = ({ data }) => {
  console.log(data);
  return (
    <div className="p-5 bg-white rounded my-5 border-2 ml-10">
      <h1 className="text-2xl font-bold flex justify-center">
        Assign List Details
      </h1>
      <p className="font-medium flex justify-center">
        Date: {data?.date || "N/A"}
      </p>
      <p className="font-medium flex justify-center">
        {data?.time?.map((item) => `From ${item.from} To ${item.to}`) || "N/A"}
      </p>

      <div className="flex justify-between mt-5">
        {/* <div>
          <h1 className="font-bold text-[22px]">Therapist Details</h1>

          <div className="my-3">
            <div className="flex items-center my-2">
              <div className="mr-2">
                <img
                  className="w-[70px] h-[70px] rounded-full border-2 border-primary"
                  src={`${import.meta.env.VITE_BASE_URL}${
                    data?.therapistId?.image?.publicFileURL
                  }`}
                  alt=""
                />
              </div>
              <div>
                <p className="font-medium text-[18px]">
                  {data?.therapistId?.name || "N/A"}
                </p>
                <p className="font-medium text-sm">
                   {data?.therapistId?.email || "N/A"}
                </p>
              </div>
            </div>

            <p className="font-medium">Phone: {data?.therapistId?.phone || "N/A"}</p>
            <p className="font-medium">
              Therapist Type: {data?.therapistId?.therapistType || "N/A"}
            </p>
          </div>
        </div> */}

        <div>
          {/* <h1 className="font-bold  text-[22px]">Patient Details</h1> */}
          <div>
            <div className="flex justify-center items-center my--1 ">
                 <div className="mr-2">
                <img
                  className="w-[70px] h-[70px]  border-2 border-primary"
                  src={`${import.meta.env.VITE_BASE_URL}${
                    data?.userId?.image?.publicFileURL
                  }`}
                  alt=""
                />
                 </div>
                 <div>
                <p className="font-medium text-[18px]">
                  {data?.userId?.name || "N/A"}
                </p>
                <p className="font-medium text-[14px]">
                  {data?.userId?.email || "N/A"}
                </p>
                 </div>
            </div>
            {/* <p className="font-medium text-end">Name: {data?.userId?.name || "N/A"}</p>
            <p className="font-medium text-end">Email: {data?.userId?.email || "N/A"}</p> */}
            <p className="font-medium flex ">Phone: {data?.userId?.phone || "N/A"}</p>
            {/* <p className=''>Therapist Type: {data?.userId?.therapistType}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignCart;
