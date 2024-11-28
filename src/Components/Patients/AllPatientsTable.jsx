import { useState } from "react";
import { Table, Modal } from "antd";
import { useGetAllPatientsQuery } from "../../redux/Features/getAllPatientsApi";

function AllPatientsTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(null);
  const { data } = useGetAllPatientsQuery();
  console.log(data?.data?.attributes);
  const [currentPage, setCurrentPage] = useState(1);
  const handleChangePage = (page) => {
    setCurrentPage(page);
    console.log(page);
  };

  const handleOpenModal = (record) => {
    console.log(record);
    setCurrentValue(record);
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
      render: (_, record) => (
        <>
          <div>
            <p className="text-[16px]">{record?.name}</p>
          </div>
        </>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "32%",
      render: (_, record) => (
        <>
          <p className="text-[16px]">{record?.email}</p>
        </>
      ),
    },

    {
      title: "Teléfono",
      dataIndex: "Phone",
      // width: "32%",
      render: (_, record) => (
        <>
          <p className="text-[16px]">{record?.phone}</p>
        </>
      ),
    },
    {
      title: "Subscricion",
      dataIndex: "subscription",
      // width: "32%",
      render: (_, record) => (
        <>
          <p className="text-[16px]">{record?.subscription}</p>
        </>
      ),
    },
    {
      title: "Acciones",
      dataIndex: "action",

      render: (_, record) => (
        <>
          <div>
            <p
              onClick={() => handleOpenModal(record)}
              className="px-6 py-1 text-[14px] text-primary hover:bg-primary hover:text-white  font-medium cursor-pointer border-[1px] border-primary rounded inline-block"
            >
              Ver
            </p>
          </div>
        </>
      ),
    },
  ];

  const headerStyle = {
    background: "whsite", // Set your desired background color
    color: "#54A630", // Set your desired text color
    // Add any other styles you want to apply to the entire header
  };
  return (
    <div>
      <Table
        className="overflow-y-scroll"
        components={{
          header: {
            cell: (props) => <th style={headerStyle}>{props.children}</th>,
          },
        }}
        scroll={{
          y: 550,
        }}
        pagination={{
          position: ["bottomCenter"],
          current: currentPage,
          pageSize: 10,
          total: data?.pagination?.totalItems,
          showSizeChanger: false,
          onChange: handleChangePage,
        }}
        columns={columns}
        dataSource={data?.data?.attributes}
      />

      <div>
        <Modal
          visible={isModalOpen}
          title={
            <div className=" py-2 border-b-[1px] border-primary font-['Montserrat'] ">
              <span className="text-[24px] text-primary ">
                Detalles del paciente
              </span>
              <p className=" text-[14px] text-[#B9B9B9]">
                Ver todo sobre {currentValue?.name}
              </p>
            </div>
          }
          onCancel={handleCancel}
          centered
          footer={[]}
          width={500}
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-5 border-b-[1px] pb-2 border-primary">
              {!currentValue?.image?.publicFileURL ? (
                <img
                  className="w-[70px] h-[70px]"
                  src={`${import.meta.env.VITE_BASE_URL}${
                    currentValue?.image?.publicFileURL
                  }`}
                  alt=""
                />
              ) : (
                <img
                  className="w-[70px] h-[70px]"
                  src="https://i.ibb.co/GtxhMsK/aiman.jpg"
                  alt=""
                />
              )}
              <h1 className="text-primary text-[24px] ">
                {currentValue?.name}
              </h1>
            </div>
            <div>
              <h1 className=" text-[24px] font-semibold">Informacion</h1>
              <div className="text-[16px] flex flex-col gap-2">
                <p>Nombre: {currentValue?.name ? currentValue?.name : "N/A"}</p>
                <p>
                  Email: {currentValue?.email ? currentValue?.email : "N/A"}
                </p>
                <p>
                  Telefono: {currentValue?.phone ? currentValue?.phone : "N/A"}
                </p>
                <p>
                  Fecha de nacimiento:{" "}
                  {currentValue?.address ? currentValue?.address : "N/A"}
                </p>
                <p>
                  Subscripcion:{" "}
                  {currentValue?.subscription
                    ? currentValue?.subscription
                    : "N/A"}
                </p>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default AllPatientsTable;
