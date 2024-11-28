import { Table } from 'antd';
import React from 'react';

const AssignListTable = ({ data }) => {
    console.log("aiman",data);
    const columns = [
        {
          title: "Name",
          dataIndex: "name",
          render: (_, record) => (
            <>
              <div>
                <p className="text-primary text-[16px]">{record?.therapistId?.name}</p>
              </div>
            </>
          ),
        },
        {
          title: "Email",
          dataIndex: "email",
          render: (_, record) => (
            <>
              <div>
                <p className="text-primary text-[16px]">{record?.therapistId?.email}</p>
                {/* <p className="text-[#979797] text-[12px]">#{record?.userId}</p> */}
              </div>
            </>
          ),
        },
        {
          title: "Phone",
          dataIndex: "phone",
          render: (_, record) => (
            <>
              <div>
                <p className="text-primary text-[16px]">{record?.therapistId?.phone}</p>
                {/* <p className="text-[#979797] text-[12px]">#{record?.userId}</p> */}
              </div>
            </>
          ),
        },
        {
          title: "accountType",
          dataIndex: "accountType",
          render: (_, record) => (
            <>
              <p className="text-primary text-[16px]">{record?.therapistId?.therapistType}</p>
            </>
          ),
        },
        {
          title: "dataTime",
          dataIndex: "dataTime",
          render: (_, record) => (
            <>
              <div>
                <p className="text-primary text-[16px]">{record?.date}</p>
                <p className="text-primary text-[16px]">{record?.time[0] && `${record?.time[0]?.from} to ${record?.time[0]?.to}`}</p>
              </div>
            </>
          ),
        },
        {
          title: "Payment",
          dataIndex: "payment",
          render: (_, record) => (
            <>
            <p className="text-[#6B6319] text-[12px] rounded inline-block px-1 bg-[#FFF9C2]">
                    {record?.therapistPayment || "N/A"}
                  </p>
              {/* <div>
                {record?.status === "Completed" ? (
                  <p className="text-primary text-[12px] rounded inline-block px-1 bg-secondary">
                    Completed
                  </p>
                ) : (
                  <p className="text-[#6B6319] text-[12px] rounded inline-block px-1 bg-[#FFF9C2]">
                    Pending
                  </p>
                )}
              </div> */}
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
                    // onClick={handleOpenModalDetails}
                    className="px-[40px] py-1 text-[14px] text-primary hover:bg-primary hover:text-white  font-medium cursor-pointer border-[1px] border-primary rounded inline-block"
                  >
                    Details
                  </p>
                
                
                {/* : (
                  <p
                    onClick={handleOpenModalSendMoney}
                    className="px-6 py-1 text-[14px] bg-primary text-white  font-medium cursor-pointer border-[1px] border-primary rounded inline-block"
                  >
                    Send Money
                  </p>
                )} */}
              </div>
            </>
          ),
        },
      ];
    return (
        <div>
            <div className="overflow-hidden px-5 overflow-y-scroll">
        <Table
          // showHeader={false}
          pagination={
            {
              position: ["bottomCenter"],
            }
          }
          columns={columns}
          dataSource={item}
        />
      </div>
        </div>
    );
}

export default AssignListTable;
