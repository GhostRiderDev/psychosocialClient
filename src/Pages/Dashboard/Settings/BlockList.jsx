import React from "react";
import { Table } from "antd";

function BlockList() {
  const BlockListDAta = [
    {
      accountType: "user",
      name: "Esther Howard",
      userId: "00014563",
      dataOfBarth: "10/12/2023",
      surveyCategory: "Teen Therapy(13-18)",
      email: "JlqFP@example.com",
      phoneNumber: "+1 2746478994",
      img: "",
    },
    {
      accountType: "user",
      name: "Esther Howard",
      userId: "00014563",
      dataOfBarth: "10/12/2023",
      surveyCategory: "Teen Therapy(13-18)",
      email: "JlqFP@example.com",
      phoneNumber: "+1 2746478994",
      img: "",
    },
    {
      accountType: "user",
      name: "Esther Howard",
      userId: "00014563",
      dataOfBarth: "10/12/2023",
      surveyCategory: "Teen Therapy(13-18)",
      email: "JlqFP@example.com",
      phoneNumber: "+1 2746478994",
      img: "",
    },
    {
      accountType: "therapist",
      name: "Esther Howard",
      userId: "00014563",
      dataOfBarth: "10/12/2023",
      survey: "Teen Therapy(13-18)",
      email: "JlqFP@example.com",
      phoneNumber: "+1 2746478994",
      rating: 4.5,
      sessionCompleted: 56,
      img: "",
      surveyCategory: "Teen Therapy(13-18)",
    },
    {
      accountType: "therapist",
      name: "Esther Howard",
      userId: "00014563",
      dataOfBarth: "10/12/2023",
      survey: "Teen Therapy(13-18)",
      email: "JlqFP@example.com",
      phoneNumber: "+1 2746478994",
      rating: 4.5,
      sessionCompleted: 56,
      img: "",
      surveyCategory: "Teen Therapy(13-18)",
    },
    {
      accountType: "therapist",
      name: "Esther Howard",
      userId: "00014563",
      dataOfBarth: "10/12/2023",
      survey: "Teen Therapy(13-18)",
      email: "JlqFP@example.com",
      phoneNumber: "+1 2746478994",
      rating: 4.5,
      sessionCompleted: 56,
      img: "",
      surveyCategory: "Teen Therapy(13-18)",
    },
    {
      accountType: "therapist",
      name: "Esther Howard",
      userId: "00014563",
      dataOfBarth: "10/12/2023",
      survey: "Teen Therapy(13-18)",
      email: "JlqFP@example.com",
      phoneNumber: "+1 2746478994",
      rating: 4.5,
      sessionCompleted: 56,
      img: "",
      surveyCategory: "Teen Therapy(13-18)",
    },
    {
      accountType: "therapist",
      name: "Esther Howard",
      userId: "00014563",
      dataOfBarth: "10/12/2023",
      survey: "Teen Therapy(13-18)",
      email: "JlqFP@example.com",
      phoneNumber: "+1 2746478994",
      rating: 4.5,
      sessionCompleted: 56,
      img: "",
      surveyCategory: "Teen Therapy(13-18)",
    },
    {
      accountType: "therapist",
      name: "Esther Howard",
      userId: "00014563",
      dataOfBarth: "10/12/2023",
      survey: "Teen Therapy(13-18)",
      email: "JlqFP@example.com",
      phoneNumber: "+1 2746478994",
      rating: 4.5,
      sessionCompleted: 56,
      img: "",
      surveyCategory: "Teen Therapy(13-18)",
    },
    {
      accountType: "therapist",
      name: "Esther Howard",
      userId: "00014563",
      dataOfBarth: "10/12/2023",
      survey: "Teen Therapy(13-18)",
      email: "JlqFP@example.com",
      phoneNumber: "+1 2746478994",
      rating: 4.5,
      sessionCompleted: 56,
      img: "",
      surveyCategory: "Teen Therapy(13-18)",
    },
    {
      accountType: "therapist",
      name: "Esther Howard",
      userId: "00014563",
      dataOfBarth: "10/12/2023",
      survey: "Teen Therapy(13-18)",
      email: "JlqFP@example.com",
      phoneNumber: "+1 2746478994",
      rating: 4.5,
      sessionCompleted: 56,
      img: "",
      surveyCategory: "Teen Therapy(13-18)",
    },
  ];

  const columns = [
    {
      title: "Nick Name",
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
      title: "Email",
      dataIndex: "email",
      width: "32%",
      render: (_, record) => (
        <>
          <p>{record?.email}</p>
        </>
      ),
    },

    {
      title: "Phone Number",
      dataIndex: "PhoneNumber",
      width: "32%",
      render: (_, record) => (
        <>
          <p>{record?.phoneNumber}</p>
        </>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",

      render: (_, record) => (
        <>
          <div>
            <p className="px-6 py-1 text-[14px] text-primary hover:bg-primary hover:text-white  font-medium cursor-pointer border-[1px] border-primary rounded inline-block">
              Details
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
    <div className="rounded-xl border-1 h-[77vh] overflow-hidden bg-white border-secondary">
      <h1 className="bg-primary text-white text-[32px] p-[20px] font-semibold">
        Block List
      </h1>
      <div>
        <Table
          className="overflow-y-scroll"
          components={{
            header: {
              cell: (props) => <th style={headerStyle}>{props.children}</th>,
            },
          }}
          scroll={{
            y: 560,
          }}
          pagination={false}
          columns={columns}
          dataSource={BlockListDAta}
        />
      </div>
    </div>
  );
}

export default BlockList;
