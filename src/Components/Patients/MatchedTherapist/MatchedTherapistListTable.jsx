import React, { useState, useRef } from "react";
import { Table, Pagination, ConfigProvider, Modal, Rate } from "antd";
import { useReactToPrint } from "react-to-print";
import { useNavigate } from "react-router-dom";

function MatchedTherapistListTable() {
  const navigate = useNavigate();
  const componentRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: "",
  });

  const data = [
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
    },
    {
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      timeRange: "7pm-8:30pm",
      status: "Completed",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (_, record) => (
        <>
          <div>
            <p className="text-primary text-[16px]">{record?.name}</p>
          </div>
        </>
      ),
    },
    {
      title: "accountType",
      dataIndex: "accountType",
      render: (_, record) => (
        <>
          <p>{record?.accountType}</p>
        </>
      ),
    },
    {
      title: "dataTime",
      dataIndex: "dataTime",
      render: (_, record) => (
        <>
          <div>
            <p>{record?.name}</p>
            <p className="text-primary">#{record?.userId}</p>
          </div>
        </>
      ),
    },

    {
      title: "viewDetails",
      dataIndex: "dataTime",
      render: (_, record) => (
        <>
          <div>
            <p
              onClick={() => navigate("/matchedTherapist/sdfsd")}
              className="px-6 py-1 text-[14px] text-primary hover:bg-primary hover:text-white  font-medium cursor-pointer border-[1px] border-primary rounded inline-block"
            >
              Details
            </p>
          </div>
        </>
      ),
    },
  ];

  return (
    <div>
      <div className="overflow-hidden px-5 h-[52vh] overflow-y-scroll">
        <Table
          showHeader={false}
          pagination={false}
          columns={columns}
          dataSource={data}
        />
      </div>
      <div className="flex justify-between p-5">
        <div className="text-[18px] text-black">SHOWING 1-8 OF 250</div>
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
            <Pagination defaultCurrent={1} total={50} />
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
}

export default MatchedTherapistListTable;
