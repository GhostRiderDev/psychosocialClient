import React, { useState } from "react";
import { Radio } from "antd";
import PatientRequestCard from "../../../Components/Patients/PatientRequestCard";
import { useGetAllPatientsQuery } from "../../../redux/Features/getAllPatientsApi";
import Loading from "../../../Components/Loading/Loading";

function PatientsRequest() {
  // Fetching data with the query hook
  const { data, isLoading, isSuccess, isError } = useGetAllPatientsQuery();

  // State hooks for radio button selections
  const [value, setValue] = useState("all");
  const [value2, setValue2] = useState("all");

  // Event handlers for radio button changes
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const onChange2 = (e) => {
    console.log("radio checked", e.target.value);
    setValue2(e.target.value);
  };

  // If loading, display loading component
  if (isLoading) {
    return <Loading />;
  }

  // Log data for debugging purposes
  console.log(data?.data?.attributes);

  // Render the main component
  return (
    <div className="p-[24px] gap-[25px]">
      <div className="">
        <div className="">
          <h1 className="text-[24px] font-semibold text-white rounded bg-primary p-[16px]">
            Solicitudes de pacientes
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-5 overflow-hidden overflow-y-scroll">
          {data?.data?.attributes?.map((item, index) => (
            <PatientRequestCard key={index} item={item} />
          ))}
        </div>
      </div>

      {/* Commented out filters section */}
      {/* <div className="w-[265px] bg-white rounded h-[420px]">
        <h1 className="text-[24px] font-semibold text-white rounded bg-primary rounded-b-none p-[16px]">
          Filters
        </h1>
        <div className="my-[20px] pb-3 mx-[16px] border-secondary border-b-[1px]">
          <h1 className="text-[18px] font-semibold">Sort by</h1>
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={"all"} className="text-[16px] font-semibold">
              All
            </Radio>
            <Radio value={"recent"} className="text-[16px] font-semibold">
              Most Recent
            </Radio>
          </Radio.Group>
        </div>
        <div className="my-[20px] pb-3 mx-[16px] border-secondary border-b-[1px]">
          <h1 className="text-[18px] font-semibold">Survey Category</h1>
          <Radio.Group
            className="flex flex-col gap-2 mt-2"
            onChange={onChange2}
            value={value2}
          >
            <Radio value={"all"} className="text-[16px] font-semibold">
              All
            </Radio>
            <Radio value={"individual"} className="text-[16px] font-semibold">
              Individual
            </Radio>
            <Radio
              value={"teen-therapy13-18"}
              className="text-[16px] font-semibold"
            >
              Teen Therapy(13-18)
            </Radio>
            <Radio
              value={"couple-therapy"}
              className="text-[16px] font-semibold"
            >
              Couple Therapy
            </Radio>
          </Radio.Group>
        </div>
        <button className="text-[18px] cursor-pointer mx-[16px] border-[1px] bg-primary text-white rounded-[4px] border-primary py-[4px] px-[10px]">
          Apply
        </button>
      </div> */}
    </div>
  );
}

export default PatientsRequest;
