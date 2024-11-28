import { Input } from "antd";
import AllTherapistTable from "../../../Components/Therapist/AllTherapistTable";

function AllTherapist() {
  return (
    <div className="p-[24px] ">
      <div className="bg-white h-[85vh] rounded-xl overflow-hidden">
        <div className="flex justify-between py-[20px] p-[20px] bg-primary">
          <h1 className="text-[32px] text-white">Profesionales</h1>
          
        </div>
        <div>
          <AllTherapistTable />
        </div>
      </div>
    </div>
  );
}

export default AllTherapist;
