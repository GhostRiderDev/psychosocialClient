import { Input } from "antd";
import AllPatientsTable from "../../../Components/Patients/AllPatientsTable";
import { useGetAllPatientsQuery } from "../../../redux/Features/getAllPatientsApi";

function AllPatients() {
  const { data } = useGetAllPatientsQuery();
  console.log(data?.data?.attributes);
  return (
    <div className="p-[24px] ">
      <div className="bg-white h-[85vh] rounded-xl overflow-hidden">
        <div className="flex justify-between py-[20px] p-[20px] bg-primary">
          <h1 className="text-[32px] text-white">List de pacientes</h1>
        </div>
        <div>
          <AllPatientsTable />
        </div>
      </div>
    </div>
  );
}

export default AllPatients;
