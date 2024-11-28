import TherapistRequestCard from "../../../Components/Therapist/TherapistRequestCard";
import { useGetAllTherapistRequestQuery } from "../../../redux/Features/getAllTherapistRequest";

function TherapistRequest() {
  const { data } = useGetAllTherapistRequestQuery();
  console.log(data?.data?.attributes);
  console.log("Lo que traemos", data);

  return (
    <div className="p-[24px] gap-[25px]">
      <div>
        <div className="">
          <h1 className="text-[24px] font-semibold text-white rounded bg-primary p-[16px]">
            Therapist Request
          </h1>
        </div>

        {data?.data?.attributes?.length ? (
          <div className="grid grid-cols-2 gap-4 overflow-hidden overflow-y-scroll">
            {data?.data?.attributes?.map((item) => {
              return <TherapistRequestCard key={item?.id} item={item} />;
            })}
          </div>
        ) : (
          <p className="flex justify-center text-[50px]  h-[90vh] items-center">
            No hay solicitudes de terapeutas
          </p>
        )}
      </div>
    </div>
  );
}

export default TherapistRequest;
