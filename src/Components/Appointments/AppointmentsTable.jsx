import { useState, useRef, useEffect } from "react";
import { Table, Modal, Rate } from "antd";
import { useReactToPrint } from "react-to-print";
import {
  getMyAppointments,
  useGetAllAppointmentQuery,
} from "../../redux/Features/getAllAppointmemtApi";
import Loading from "../Loading/Loading";

function AppointmentsTable() {
  const { data: allAppointment, isLoading } = useGetAllAppointmentQuery();

  const [appointments, setAppointments] = useState([]);

  const componentRef = useRef();
  const [details, setDetails] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    }

    if (localStorage.getItem("yourInfo")) {
      const data = JSON.parse(localStorage.getItem("yourInfo"));
      getMyAppointments(data?._id, token).then((res) => {
        setAppointments(res?.data?.attributes);
        console.log(res?.data?.attributes);
      });
    }
  }, []);

  const handleOpenModal = (data) => {
    setIsModalOpen(true);
    setDetails(data);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: "",
  });

  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
      render: (_, record) => (
        <div>
          <p className="text-primary text-[16px]">
            {record?.userId?.name || "N/A"}
          </p>
          <p className="text-[#979797] text-[12px]">{record?.userId?.email}</p>
        </div>
      ),
    },
    {
      title: "Teléfono",
      dataIndex: "accountType",
      render: (_, record) => (
        <p className="text-primary text-[16px] rounded inline-block px-1">
          {record?.userId?.countryCode
            ? `${record?.userId?.countryCode}${record?.userId?.phone}`
            : "N/A"}
        </p>
      ),
    },
    {
      title: "Subscripción",
      dataIndex: "dataTime",
      render: (_, record) => (
        <div>
          <p className="bg-primary text-white text-center text-[16px] rounded-3xl w-20">
            {record?.userId?.subscription || "free"}
          </p>
        </div>
      ),
    },
    {
      title: "Fecha y Hora",
      dataIndex: "dataTime",
      render: (_, record) => (
        <div>
          <p>{record?.date}</p>
          <p>
            {Array.isArray(record?.time) && record?.time[0]
              ? `${record?.time[0]?.from}-${record?.time[0]?.to}`
              : "N/A"}
          </p>
        </div>
      ),
    },
    {
      title: "Estado",
      dataIndex: "dataTime",
      render: (_, record) => (
        <div>
          <p className="bg-primary text-white text-center text-[16px] rounded-3xl ">
            {record?.completed ? "Completada" : "Pendiente"}
          </p>
        </div>
      ),
    },
    {
      title: "Ver Detalles",
      dataIndex: "dataTime",
      render: (_, record) => (
        <div>
          <p
            onClick={() => handleOpenModal(record)}
            className="px-6 py-1 text-[14px] text-primary hover:bg-primary hover:text-white font-medium cursor-pointer border-[1px] border-primary rounded inline-block"
          >
            Detalles
          </p>
        </div>
      ),
    },
  ];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="overflow-hidden px-5 h-[70vh] overflow-y-scroll">
        <Table
          pagination={{
            position: ["bottomCenter"],
          }}
          columns={columns}
          dataSource={appointments}
        />
      </div>

      <Modal
        visible={isModalOpen}
        title={
          <div className="py-2 border-b-[1px] border-primary font-['Montserrat']">
            <div className="flex items-center gap-5">
              <span className="text-[24px] text-primary">Cita</span>
              <span className="text-primary text-[12px] rounded inline-block px-1 bg-secondary">
                {details?.completed ? "Completed" : "Pending"}
              </span>
            </div>
            <p className="text-[14px] text-[#B9B9B9]">
              Ver todo sobre {details?.userId?.name}
            </p>
          </div>
        }
        onCancel={handleCancel}
        centered
        footer={[]}
        width={900}
      >
        <div ref={componentRef} className="flex flex-col">
          <div className="flex items-center gap-5 border-b-[1px] pb-2 border-primary">
            <div className="flex flex-col gap-5">
              <div>
                <h1 className="text-[24px] font-semibold">
                  Detalles del paciente
                </h1>
                <div className="p-[8px]">
                  <p className="text-[16px]">Nombre: {details?.userId?.name}</p>
                  <p className="text-[16px]">Email: {details?.userId?.email}</p>
                </div>
              </div>
              <div>
                <h1 className="text-[24px] font-semibold">
                  Detalles del terapeuta
                </h1>
                <div className="p-[8px]">
                  <p className="text-[16px]">
                    Nombre: {details?.therapistId?.name}
                  </p>
                  <p className="text-[16px]">
                    Email: {details?.therapistId?.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-5">
            <div className="w-[720px] border-r-[1px] border-primary pl-5">
              <h1 className="text-[24px] text-primary mt-[16px] font-semibold">
                Detalles de la cita
              </h1>
              <div>
                <p className="text-[16px]">
                  <span className="font-semibold">Fecha de cita: </span>
                  {details?.date}
                </p>
                <p className="text-[16px]">
                  <span className="font-semibold">Hora de cita: </span>
                  {Array.isArray(details?.time) && details?.time[0]
                    ? `${details?.time[0]?.from}-${details?.time[0]?.to}`
                    : "N/A"}
                </p>
                <p className="text-[16px]">
                  <span className="font-semibold">Tratamiento: </span>
                  {details?.userId?.therapyType}
                </p>
                <p className="text-[16px]">
                  <span className="font-semibold">Pago: </span>
                  {details?.therapistPayment}
                </p>
              </div>
            </div>
            <div>
              <h1 className="text-[24px] mt-[16px] text-primary font-semibold">
                Calificación
              </h1>
              <div className="py-4">
                <Rate allowHalf defaultValue={5} disabled />
              </div>
              <p className="text-[16px]">
                comentario: {details?.review || "N/A"}
              </p>
            </div>
          </div>
          <div className="flex gap-4 mt-[24px] mx-auto">
            <p
              onClick={handlePrint}
              className="bg-primary cursor-pointer px-5 py-2 text-white rounded"
            >
              Descargar como PDF
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default AppointmentsTable;
