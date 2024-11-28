import React, { useState } from "react";
import { Input, Select, DatePicker } from "antd";
import AppointmentsTable from "./AppointmentsTable";
import { useGetAllAppointmentQuery } from "../../redux/Features/getAllAppointmemtApi";
import Loading from "../Loading/Loading";

const provinceData = ["All", "Completed", "Pending", "Cancelled"];

function AllAppointments() {
 
  const handleChange = (value) => {
    console.log(value);
  };

  const onChanges = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className="mt-5">
      <div className="bg-white h-[80vh] rounded-xl overflow-hidden">
        <div className="flex justify-between py-[20px] p-[20px] bg-primary">
          <h1 className="text-[32px] text-white">Todas las citas</h1>
        </div>
        <div>
          <AppointmentsTable  />
        </div>
      </div>
    </div>
  );
}

export default AllAppointments;
