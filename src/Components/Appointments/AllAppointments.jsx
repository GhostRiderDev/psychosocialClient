import AppointmentsTable from "./AppointmentsTable";

function AllAppointments() {
  return (
    <div className="mt-5">
      <div className="bg-white h-[80vh] rounded-xl overflow-hidden">
        <div className="flex justify-between py-[20px] p-[20px] bg-primary">
          <h1 className="text-[32px] text-white">Todas las citas</h1>
        </div>
        <div>
          <AppointmentsTable />
        </div>
      </div>
    </div>
  );
}

export default AllAppointments;
