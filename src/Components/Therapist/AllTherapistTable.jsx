import { useState } from "react";
import { Table, ConfigProvider, Modal } from "antd";
import { useGetAllTherapistQuery } from "../../redux/Features/getAllTherapistApi";
import Loading from "../Loading/Loading";
function AllTherapistTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentValue, setCurrentValue] = useState(null);
  const { data, isLoading, isError } = useGetAllTherapistQuery();

  const handleOpenModal = (value) => {
    setIsModalOpen(true);
    setCurrentValue(value);
  };
  if (isLoading) {
    return <Loading />;
  }
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  console.log(isError);

  console.log(currentValue);
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
      title: "Correo Electrónico",
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
      dataIndex: "PhoneNumber",
      // width: "32%",
      render: (_, record) => (
        <>
          <p className="text-[16px]">{record?.phone}</p>
        </>
      ),
    },
    {
      title: "Tipo",
      dataIndex: "therapistType",
      // width: "32%",
      render: (_, record) => (
        <>
          <p className="text-[16px]">{record?.therapistType}</p>
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
    color: "#000000",
  };
  const handleChangePage = (page) => {
    setCurrentPage(page);
  };
  const result = data?.data?.attributes;

  const handlePdf = (value) => {
    window.open(`${import.meta.env.VITE_BASE_URL}${value}`);
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
        dataSource={result}
      />
      <div className="flex justify-between p-5">
        {/* <div className="text-[18px] text-primary">SHOWING 1-8 OF 250</div> */}
        <div>
          <ConfigProvider
            theme={{
              token: {
                // Seed Token
                colorPrimary: "#54A630",
                borderRadius: 2,

                // Alias Token
                colorBgContainer: "#f6ffed",
              },
            }}
          >
            {/* <Pagination defaultCurrent={1} total={50} /> */}
          </ConfigProvider>
        </div>
      </div>
      <div>
        <Modal
          visible={isModalOpen}
          title={
            <div className=" py-2 border-b-[1px] border-primary font-['Montserrat'] ">
              <span className="text-[24px] text-primary ">
                Detalles de terapeuta
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
            <div className="flex items-center  gap-5 border-b-[1px] pb-2 border-primary">
              {currentValue?.image?.publicFileURL ? (
                <img
                  className="w-[100px] h-[100px] object-cover rounded-full"
                  src={`${import.meta.env.VITE_BASE_URL}${
                    currentValue?.image?.publicFileURL
                  }`}
                  alt=""
                />
              ) : (
                <img
                  className="w-[100px] h-[100px] object-cover rounded-full"
                  src={`${import.meta.env.VITE_BASE_URL}${
                    currentValue?.image?.publicFileURL
                  }`}
                  alt=""
                />
              )}
              <div>
                <h1 className="text-primary text-[24px] ">
                  {currentValue?.name}
                </h1>
              </div>
            </div>
            <div className="">
              <h1 className=" text-[24px] font-semibold">Informacion</h1>
              <div className="text-[16px] flex flex-col gap-2">
                <p>Nombre: {currentValue?.name}</p>
                <p>Correo: {currentValue?.email}</p>
                <p>Telefono: {currentValue?.phone}</p>
                <p>Fecha de nacimiento: {currentValue?.dateOfBirth}</p>
              </div>
              <h1 className=" text-[24px] font-semibold">Documentos</h1>
              <div className="flex gap-5">
                <div
                  onClick={() =>
                    handlePdf(currentValue?.certificate?.publicFileURL)
                  }
                  className="bg-secondary flex  cursor-pointer items-center flex-col rounded gap-2 "
                >
                  <div className=" p-[10px] w-[76px] h-[76px] rounded-full mt-2 flex items-center mx-auto bg-[#8CC374]">
                    <img
                      className="ml-[9px]"
                      src="https://i.ibb.co/JtfwKNg/XMLID-2268.png"
                      alt=""
                    />
                  </div>
                  <h1 className="text-wrap p-2">{`${currentValue?.certificate?.publicFileURL.slice(
                    0,
                    20
                  )}...`}</h1>
                </div>
                <div
                  onClick={() => handlePdf(currentValue?.resume?.publicFileURL)}
                  className="bg-secondary flex  text-wrap cursor-pointer  items-center flex-col rounded gap-2 "
                >
                  <div className=" p-[10px] w-[76px] h-[76px] rounded-full mt-2 flex items-center mx-auto bg-[#8CC374]">
                    <img
                      className="ml-[9px]"
                      src="https://i.ibb.co/JtfwKNg/XMLID-2268.png"
                      alt=""
                    />
                  </div>
                  <h1 className="text-wrap p-2">{`${currentValue?.resume?.publicFileURL.slice(
                    0,
                    20
                  )}...`}</h1>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default AllTherapistTable;
