import TherapistsListAssignTable from "./TherapistsListAssignTable";

function TherapistsListAssign({ data, id }) {
  return (
    <div className="mt-5">
      <div className="bg-white  rounded-xl overflow-hidden">
        <div className="flex justify-between  p-4 bg-primary">
          <h1 className="text-2xl text-white">Lista de profesionales</h1>
        </div>
        <div>
          <TherapistsListAssignTable data={data} id={id} />
        </div>
      </div>
    </div>
  );
}

export default TherapistsListAssign;
