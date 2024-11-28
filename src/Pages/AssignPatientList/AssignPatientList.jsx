import React from "react";
import { useParams } from "react-router-dom";
import { useGetAllAssignListQuery } from "../../redux/Features/getAllAssignListApi";
import AssignCart from "../../Components/AssignCart/AssignCart";
import AssignListTable from "./AssignListTable";
import { Table } from "antd";

const AssignPatientList = () => {
  const { id } = useParams();
  const { data, isLoading, isSuccess, isError } = useGetAllAssignListQuery({
    id,
  });
  console.log(id);
  console.log("---------------",data?.data?.attributes);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (_, record) => (
        <>
          <div>
            <p className="text-primary text-[16px]">{record?.userId?.name}</p>
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
            <p className="text-primary text-[16px]">{record?.userId?.email}</p>
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
            <p className="text-primary text-[16px]">{`${record?.userId?.countryCode
}${record?.userId?.phone}`}</p>
            {/* <p className="text-[#979797] text-[12px]">#{record?.userId}</p> */}
          </div>
        </>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      render: (_, record) => (
        <>
          <p className="text-primary text-[16px]">{record?.date}</p>
        </>
      ),
    },
    {
      title: "Time",
      dataIndex: "dataTime",
      render: (_, record) => (
        <>
          <div>
            {/* <p className="text-primary text-[16px]">{record?.date}</p> */}
            <p className="text-primary text-[16px]">{record?.time[0] && `${record?.time[0]?.from} to ${record?.time[0]?.to}`}</p>
          </div>
        </>
      ),
    },
    // {
    //   title: "Payment",
    //   dataIndex: "payment",
    //   render: (_, record) => (
    //     <>
    //     <p className="text-[#6B6319] text-[12px] rounded inline-block px-1 bg-[#FFF9C2]">
    //             {record?.therapistPayment || "N/A"}
    //           </p>
    //       {/* <div>
    //         {record?.status === "Completed" ? (
    //           <p className="text-primary text-[12px] rounded inline-block px-1 bg-secondary">
    //             Completed
    //           </p>
    //         ) : (
    //           <p className="text-[#6B6319] text-[12px] rounded inline-block px-1 bg-[#FFF9C2]">
    //             Pending
    //           </p>
    //         )}
    //       </div> */}
    //     </>
    //   ),
    // },
    // {
    //   title: "viewDetails",
    //   dataIndex: "dataTime",
    //   render: (_, record) => (
    //     <>
    //       <div>
             
    //           <p
    //             // onClick={handleOpenModalDetails}
    //             className="px-[40px] py-1 text-[14px] text-primary hover:bg-primary hover:text-white  font-medium cursor-pointer border-[1px] border-primary rounded inline-block"
    //           >
    //             Details
    //           </p>
            
            
    //         {/* : (
    //           <p
    //             onClick={handleOpenModalSendMoney}
    //             className="px-6 py-1 text-[14px] bg-primary text-white  font-medium cursor-pointer border-[1px] border-primary rounded inline-block"
    //           >
    //             Send Money
    //           </p>
    //         )} */}
    //       </div>
    //     </>
    //   ),
    // },
  ];
const result = data?.data?.attributes;

  return (
    <div>
     
      <div className="p-10">
        <h1 className="text-[24px] font-semibold text-white rounded bg-primary p-[16px]">
        Assign Patient List
        </h1>
      </div>


      {/* <div className="grid grid-cols-3 gap-2">
        {data?.data?.attributes?.map((item) => (
          <AssignCart data={item} key={item?._id} />
        ))}
    

      </div> */}

      
      {/* <AssignListTable/> */}
      <div className="px-10 overflow-hidden overflow-y-scroll">

    
      <Table
          // showHeader={false}
          pagination={
            {
              position: ["bottomCenter"],
            }
          }
          columns={columns}
          dataSource={data?.data?.attributes}
        />
          </div>
    </div>
  );
};

export default AssignPatientList;
