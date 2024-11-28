import { useState } from "react";
import { Table, Pagination, ConfigProvider, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import baseURL from "../../config";

// eslint-disable-next-line react/prop-types
function TherapistsListAssignTable({ data, id: patientId }) {
  const navigate = useNavigate();
  const [userDetails,setUserDetails] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (value) => {
    setIsModalOpen(true);
    setUserDetails(value)
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleAssign = async (therapistId) => {
    console.log(therapistId);
    try {
      // const response = await postAssign({ patientId, therapistId }).unwrap();
      const response = await baseURL.post(`/apointment/assign/${patientId}`, {therapistId},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
        
      );

      console.log(response);
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Terapeuta asignado correctamente",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(`/patientsRequest/${patientId}`);
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error,
      });
    }   
  };



  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
      width: "20%",
      render: (_, record) => (
        <>
          <div>
            <p className="text-[16px]">{record?.name}</p>
          </div>
        </>
      ),
    },
    {
      title: "Correo",
      dataIndex: "email",
      render: (_, record) => (
        <>
          <p className="text-[16px]">{record?.email}</p>
        </>
      ),
    },
    {
      title: "Telefono",
      width: "14%",
      dataIndex: "phoneNumber",
      render: (_, record) => (
        <>
          <div>
            <p className="text-[16px]">{record?.phone}</p>
          </div>
        </>
      ),
    },
    {
      title: "Tipo",
      width: "12%",
      dataIndex: "therapistType",
      render: (_, record) => (
        <>
          <div>
            <p className="text-[16px]">{record?.therapistType}</p>
          </div>
        </>
      ),
    },
    {
      title: "Acciones",
      align: "center",
      dataIndex: "dataTime",
      render: (_, record) => (
        <>
          <div className="flex gap-2 items-center justify-center">
            <p
              onClick={() => handleAssign(record?._id)}
              className="px-3 py-1 text-[14px] bg-primary text-white font-medium cursor-pointer border-[1px] border-primary rounded inline-block"
            >
              Asignar
            </p>
            <p
              onClick={() => handleOpenModal(record)}
              className="px-3 py-1 text-[14px] text-primary hover:bg-primary hover:text-white font-medium cursor-pointer border-[1px] border-primary rounded inline-block"
            >
              Ver
            </p>
          </div>
        </>
      ),
    },
  ];
// console.log(result,);
  return (
    <div>
      <div className="overflow-hidden px-5 h-[52vh]">
        <ConfigProvider
          theme={{
            components: {
              Table: {
                headerColor: "#48dccc",
                headerBorderRadius: 2,
              },
            },
          }}
        >
          <Table
            scroll={{
              y: 240,
            }}
            pagination={false}
            columns={columns}
            dataSource={data}
          />
        </ConfigProvider>
      </div>
      <div className="flex justify-between p-5">
        <div className="text-[18px] text-black">SHOWING 1-8 OF 250</div>
        <div>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#54A630",
                borderRadius: 2,
                colorBgContainer: "#f6ffed",
              },
            }}
          >
            <Pagination defaultCurrent={1} total={50} />
          </ConfigProvider>
        </div>
      </div>

      <Modal
        visible={isModalOpen}
        title={
          <div className="py-2 border-b-[1px] border-primary font-['Montserrat']">
            <span className="text-[24px] text-primary">Therapist Details</span>
            <p className="text-[14px] text-[#B9B9B9]">
              See all details about {userDetails?.name}
            </p>
          </div>
        }
        onCancel={handleCancel}
        centered
        footer={[]}
        width={500}
      >
        <div className="flex flex-col">
          <div className="flex gap-5 border-b-[1px] pb-2 border-primary">
            {userDetails?.image?.publicFileURL ? (
              <img
                className="w-[70px] h-[70px]"
                src="https://i.ibb.co/GtxhMsK/aiman.jpg"
                alt=""
              />
            ) : (
              <img
                className="w-[70px] h-[70px]"
                src={`${import.meta.env.VITE_BASE_URL}${
                  userDetails?.image?.publicFileURL
                }`}
                alt=""
              />
            )}

            <div>
              <h1 className="text-primary text-[24px]">{userDetails?.name}</h1>
              <div className="flex items-center gap-1">
                {userDetails?.email}
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-[24px] font-semibold">Informacion</h1>
            <div className="text-[16px] flex flex-col gap-2">
              <p>Nombre: {userDetails?.name}</p>
              <p>Fecha de nacimiento: {userDetails?.dateOfBirth || "N/A"}</p>
              <p>Correo: {userDetails?.email}</p>
            </div>
          </div>
          <div className="flex mt-[24px]">
            <p
              onClick={() => handleAssign(userDetails?._id)}
              className="px-6 py-1 text-[14px] bg-primary text-white font-medium cursor-pointer border-[1px] border-primary rounded inline-block"
            >
              Asignar
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default TherapistsListAssignTable;
