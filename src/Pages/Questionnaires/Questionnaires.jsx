import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Checkbox } from "antd";
import { useNavigate } from "react-router-dom";
import { useGetAllQuestionQuery } from "../../redux/Features/getAllQuestionApi";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 4,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 20,
    },
  },
};

const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 20,
      offset: 4,
    },
  },
};

function Questionnaires() {
  const navigate = useNavigate();
  const { data, isLoading, isSuccess } = useGetAllQuestionQuery();
  const makeQuestion = [
    {
      id: 1,
      name: "What issues are you having with your child that therapy can help with? (Please type in less then 200 words.)",
      type: "paragraph",
    },
    {
      id: 2,
      name: "How old is your child?",
      type: "multiple-choice",
      option: ["13", "14", "15", "16", "17", "18", "19", "20", "21"],
    },
    {
      id: 2,
      name: "Please share with us why you’re looking for help today. ( You can select up to 3)",
      type: "checkbox",
      option: [
        {
          label: "I’m seeking one on one therapy for my child only",
          value: "I’m seeking one on one therapy for my child only",
        },
        {
          label: "I want therapy for both me and my child",
          value: "I want therapy for both me and my child",
        },
        {
          label: "I just want parental advice",
          value: "I just want parental advice",
        },
      ],
    },
  ];

  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  return (
    <div className="p-[24px]">
      <div className="flex justify-between">
        <h1 className="text-black text-[24px] rounded-lg font-semibold">
          Gestionar Cuestionarios
        </h1>

        <button
          onClick={() => navigate("/add-questionnaires")}
          className="bg-primary rounded-lg text-white px-3 text-[16px] "
        >
          Añadir Cuestionario
        </button>
      </div>
      <div className="flex gap-[80px]  mt-5">
        <div
          onClick={() => navigate("/Individual")}
          className="rounded-lg border-1 cursor-pointer shadow-lg w-[300px] flex-col items-center py-[16px] px-[14px] bg-white border-primary border-[1px] p-[24px] flex gap-5"
        >
          <h1 className="text-primary font-bold text-[24px]">
            Terapia Individual
          </h1>
          <p>
            Preguntas totales:{" "}
            <span className="text-primary">
              {
                data?.data?.attributes?.filter(
                  (data) => data?.questionType.split(" ")[0] == "Individual"
                ).length
              }
            </span>
          </p>
        </div>
        <div
          onClick={() => navigate("/Teen")}
          className="rounded-lg border-1 cursor-pointer shadow-lg w-[300px] flex-col items-center py-[16px] px-[14px] bg-white border-primary border-[1px] p-[24px] flex gap-5"
        >
          <h1 className="text-primary font-bold text-[24px]">
            Terapia para adolecentes(13-18)
          </h1>
          <p>
            Preguntas totales:{" "}
            <span className="text-primary">
              {
                data?.data?.attributes?.filter(
                  (data) => data?.questionType.split(" ")[0] == "Teen"
                ).length
              }
            </span>
          </p>
        </div>
        <div
          onClick={() => navigate("/Couple")}
          className="rounded-lg border-1 cursor-pointer shadow-lg w-[300px] flex-col items-center py-[16px] px-[14px] bg-white border-primary border-[1px] p-[24px] flex gap-5"
        >
          <h1 className="text-primary font-bold text-[24px]">
            Terapia de pareja
          </h1>
          <p>
            Preguntas totales:{" "}
            <span className="text-primary">
              {
                data?.data?.attributes?.filter(
                  (data) => data?.questionType.split(" ")[0] == "Couple"
                ).length
              }
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Questionnaires;
