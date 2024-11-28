import React, { useState, useRef } from "react";
import { Table, Pagination, ConfigProvider, Modal } from "antd";
import { useReactToPrint } from "react-to-print";

function TransactionsTable() {
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
      transactionsId: "3CW489645W55697589",
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      amount: 30,
      timeRange: "7pm",
      status: "Completed",
    },
    {
      transactionsId: "3CW489645W55697589",
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      amount: 30,
      timeRange: "7pm",
      status: "Completed",
    },
    {
      transactionsId: "3CW489645W55697589",
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      amount: 30,
      timeRange: "7pm",
      status: "Completed",
    },
    {
      transactionsId: "3CW489645W55697589",
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      amount: 30,
      timeRange: "7pm",
      status: "Completed",
    },
    {
      transactionsId: "3CW489645W55697589",
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      amount: 30,
      timeRange: "7pm",
      status: "Completed",
    },
    {
      transactionsId: "3CW489645W55697589",
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      amount: 30,
      timeRange: "7pm",
      status: "Completed",
    },
    {
      transactionsId: "3CW489645W55697589",
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      amount: 30,
      timeRange: "7pm",
      status: "Completed",
    },
    {
      transactionsId: "3CW489645W55697589",
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      amount: 30,
      timeRange: "7pm",
      status: "Completed",
    },
    {
      transactionsId: "3CW489645W55697589",
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      amount: 30,
      timeRange: "7pm",
      status: "Completed",
    },
    {
      transactionsId: "3CW489645W55697589",
      name: "Esther Howard",
      userId: "00014563",
      accountType: "Individual",
      data: "10/12/2023",
      amount: 30,
      timeRange: "7pm",
      status: "Completed",
    },
  ];

  const columns = [
    {
      title: "accountType",
      dataIndex: "accountType",
      render: (_, record) => (
        <>
          <p className="w-[75px]">{record?.transactionsId}</p>
        </>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (_, record) => (
        <>
          <div>
            <p className="text-primary text-[16px]">{record?.name}</p>
            <p className="text-[#979797] text-[12px]">#{record?.userId}</p>
          </div>
        </>
      ),
    },
    {
      title: "dataTime",
      dataIndex: "dataTime",
      render: (_, record) => (
        <>
          <div>
            <p>{record?.data}</p>
            <p>at {record?.timeRange}</p>
          </div>
        </>
      ),
    },
    {
      title: "price",
      dataIndex: "price",
      render: (_, record) => (
        <>
          <div>
            <p>$60</p>
          </div>
        </>
      ),
    },
    {
      title: "dataTime",
      dataIndex: "dataTime",
      render: (_, record) => (
        <>
          <div>
            <p className="text-primary text-[12px] rounded inline-block px-1 bg-secondary">
              {record?.status}
            </p>
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
              onClick={handleOpenModal}
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
      <div className="overflow-hidden  h-[52vh] overflow-y-scroll">
        <Table
          showHeader={true}
          pagination={true}
          columns={columns}
          dataSource={data}
        />
      </div>
      <div className="flex justify-between p-5">
        {/* <div className="text-[18px] text-black">SHOWING 1-8 OF 250</div> */}
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
      <Modal
        visible={isModalOpen}
        title={
          <div className="py-2 border-b-[1px] border-primary font-['Montserrat'] ">
            <span className="text-[24px] text-primary">
              Transaction ID:#3CW489645W55697589
            </span>
            <p className="text-[18px] ">
              You have earned <span className="text-primary">$60</span>
            </p>
          </div>
        }
        onCancel={handleCancel}
        centered
        footer={[]}
        width={800}
      >
        <div ref={componentRef} className="flex flex-col">
          <div>
            <h1 className=" text-[24px] font-semibold">
              Therapist Transaction Details
            </h1>
            <div className="text-[16px] flex flex-col gap-2">
              <p>Transaction ID: #3CW489645W55697589</p>
              <p>Therapist Name: Jeny Cooper</p>
              <p>Therapist Id: MGT000002</p>
              <p>Account Number: **** **** 4589</p>
              <p>Account Holder Name: Jeny Cooper</p>
              <p>Received Amount: 600 Bwp</p>
              <p>Mindgaze Fee: 60 Bwp</p>
              <p>Total Amount: 560 Bwp</p>
            </div>
          </div>
          <div className="flex mt-[24px]">
            <p
              onClick={handlePrint}
              className="bg-primary  cursor-pointer px-5 py-2 text-white rounded"
            >
              Download as pdf
            </p>
          </div>
        </div>
      </Modal>
      
    </div>
  );
}

export default TransactionsTable;
