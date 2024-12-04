import { useNavigate } from "react-router-dom";
import AppointmentsTable from "../../Components/Appointments/AppointmentsTable";
import { MdBookmarkAdd } from "react-icons/md";
function AllAppointmentsUser() {
  const navigation = useNavigate();

  return (
    <div className="mt-5">
      <div className="bg-white h-[80vh] rounded-xl overflow-hidden">
        <div className="flex justify-between gap-4 py-[20px] p-[20px] bg-primary">
          <p className="text-[32px] text-white">Todas las citas</p>
          <div className="flex text-primary drop-shadow-xl cursor-pointer bg-secondary tex-red-500 z-20 rounded-md p-1">
            <MdBookmarkAdd size={40} />
            <button
              className="font-bold"
              onClick={() => navigation("/appointment")}
            >
              Agendar cita
            </button>
          </div>
        </div>

        <div>
          <AppointmentsTable />
        </div>
      </div>
    </div>
  );
}

export default AllAppointmentsUser;
