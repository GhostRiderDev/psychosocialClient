import { useState } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select } from "antd";
import { useNavigate } from "react-router-dom";
import baseURL from "../../config";
import { useGetAllQuestionQuery } from "../../redux/Features/getAllQuestionApi";
import Swal from "sweetalert2";
import { FaArrowLeft } from "react-icons/fa";

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

function ManageQuestionnaires() {
  const { data, isLoading, isSuccess } = useGetAllQuestionQuery();
  const navigate = useNavigate();
  const [questionnairesName, setQuestionnairesName] =
    useState("Couple Therapy");
  const [questionType, setQuestionType] = useState({
    value: "Paragraph",
    label: "Paragraph",
  });
  if (isLoading) {
    return <h1>Cargando...</h1>;
  }

  const handleQuestionSubmit = async (values) => {
    try {
      const result = {
        ...values,
        questionType: questionnairesName,
        answerType: questionType?.value,
      };
      console.log(result);
      const response = await baseURL.post("/servey/add", result, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response);
      if (response?.data.statusCode === 201) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: response?.data?.message,
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: error?.response?.data?.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleMultipleChoiceQuestionSubmit = async (values) => {
    try {
      const data = {
        ...values?.questions[0],
        questionType: questionnairesName,
        answerType: questionType?.value,
      };
      console.log(data);
      const response = await baseURL.post("/servey/add", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response);
      if (response?.data.statusCode === 201) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: response?.data?.message,
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: error?.response?.data?.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleChange = (value) => {
    console.log(value);
    setQuestionType(value);
  };

  return (
    <div className="">
      <div className="p-[24px]">
        <h1
          onClick={() => navigate("/questionnaires")}
          className="text-black cursor-pointer text-[24px] font-semibold pt-5  flex items-center gap-2"
        >
          <FaArrowLeft size={18} /> Ir a
        </h1>
        <h1 className="text-black text-[24px] rounded-lg font-semibold">
          Gestionar Cuestionarios
        </h1>
        <div className=" p-[24px] bg-white h-[79vh] rounded-xl overflow-hidden overflow-y-scroll mt-[24px]">
          <div>
            <h1 className="text-[16px] font-medium mb-3">
              * Nombre del cuestionario
            </h1>
            <Select
              defaultValue="Couple Therapy"
              style={{
                width: "100%",
                height: 60,
                fontSize: 26,
                borderRadius: 10,
                border: "2px solid #48dccc",
              }}
              onChange={(value) => setQuestionnairesName(value)}
              options={[
                {
                  value: "Couple Therapy",
                  label: "Terapia de Pareja",
                },
                {
                  value: "Teen Therapy",
                  label: "Terapia para Adolescentes",
                },
                {
                  value: "Individual",
                  label: "Terapia Individual",
                },
              ]}
            />
          </div>

          <div>
            <div className="flex bg-white  rounded-xl  mt-[24px]">
              {questionType?.value == "Paragraph" ? (
                <>
                  <Form
                    name="basic"
                    labelCol={{ span: 22 }}
                    wrapperCol={{ span: 40 }}
                    layout="vertical"
                    className="mx-5"
                    onFinish={handleQuestionSubmit}
                    autoComplete="off"
                  >
                    <div className="flex-1">
                      <Form.Item
                        name="question"
                        label={<span className=" text-[18px] ">Pregunta</span>}
                        className="flex-1"
                        rules={[
                          {
                            required: true,
                            message: "Por favor ingresa tu pregunta!",
                          },
                        ]}
                      >
                        <Input
                          placeholder="Ingrese la pregunta"
                          className="p-4
                rounded w-[500px] 
                justify-start 
                mt-[12px]
                items-center 
                gap-4 inline-flex"
                        />
                      </Form.Item>
                    </div>

                    <Button
                      htmlType="submit"
                      block
                      className="block w-[500px] h-[56px] mt-[30px] px-2 py-4  text-white bg-gradient-to-r from-[#54A630] to-[#54A630] rounded-lg"
                      style={{
                        marginTop: "30px",
                        backgroundColor: "#54A630",
                        color: "#fff",
                        size: "18px",
                        height: "56px",
                      }}
                    >
                      Agregar Pregunta
                    </Button>
                  </Form>
                </>
              ) : (
                <div className="w-[790px]">
                  <Form
                    className="py-[24px]"
                    name="dynamic_form_item"
                    {...formItemLayoutWithOutLabel}
                    onFinish={handleMultipleChoiceQuestionSubmit}
                    style={{
                      maxWidth: 600,
                    }}
                  >
                    <Form.List
                      name="questions"
                      initialValue={[
                        {
                          question: "",
                          options: [""],
                          isChecked: false,
                        },
                      ]}
                    >
                      {(fields, { add, remove }) => (
                        <>
                          {fields.map((field, index) => (
                            <Form.Item
                              {...(index === 0
                                ? formItemLayout
                                : formItemLayoutWithOutLabel)}
                              label={index === 0 ? "Questions" : ""}
                              required={false}
                              key={field.key}
                              className="font-semibold"
                            >
                              <Form.Item
                                {...field}
                                name={[field.name, "question"]}
                                validateTrigger={["onChange", "onBlur"]}
                                rules={[
                                  {
                                    required: false,
                                    whitespace: true,
                                    message: "Por favor ingrese la pregunta.",
                                  },
                                ]}
                                noStyle
                              >
                                <Input
                                  className="p-4
                                 rounded w-[500px] 
                                 justify-start 
                                 mt-[12px]
                                 items-center 
                                 gap-4 inline-flex mb-5"
                                  placeholder="Ingrese la pregunta"
                                />
                              </Form.Item>
                              <Form.Item
                                {...field}
                                name={[field.name, "options"]}
                                validateTrigger={["onChange", "onBlur"]}
                                rules={[
                                  {
                                    required: false,
                                    message:
                                      "Please input at least one option.",
                                  },
                                ]}
                              >
                                <Form.List name={[field.name, "options"]}>
                                  {(
                                    optionFields,
                                    { add: addOption, remove: removeOption }
                                  ) => (
                                    <div className="flex flex-col gap-5">
                                      {optionFields.map(
                                        (optionField, optionIndex) => (
                                          <div
                                            className="flex gap-5"
                                            key={optionField.key}
                                          >
                                            <Form.Item
                                              {...optionField}
                                              validateTrigger={[
                                                "onChange",
                                                "onBlur",
                                              ]}
                                              rules={[
                                                {
                                                  required: false,
                                                  whitespace: true,
                                                  message: `Please input the option ${
                                                    optionIndex + 1
                                                  }.`,
                                                },
                                              ]}
                                              noStyle
                                            >
                                              <Input
                                                className="p-4
                                             rounded w-[500px] 
                                             justify-start 
                                             mt-[12px]
                                             items-center 
                                             gap-4 inline-flex"
                                                placeholder={`Option ${
                                                  optionIndex + 1
                                                }`}
                                              />
                                            </Form.Item>
                                            {optionFields.length > 0 && (
                                              <MinusCircleOutlined
                                                size={50}
                                                className="text-[25px]"
                                                onClick={() =>
                                                  removeOption(optionField.name)
                                                }
                                              />
                                            )}
                                          </div>
                                        )
                                      )}
                                      <Button
                                        type="dashed"
                                        onClick={() => addOption()}
                                        style={{
                                          marginTop: "30px",
                                          backgroundColor: "#54A630",
                                          color: "white",
                                          size: "18px",
                                          height: "56px",
                                        }}
                                        icon={<PlusOutlined />}
                                      >
                                        Agregar Opción
                                      </Button>
                                    </div>
                                  )}
                                </Form.List>
                              </Form.Item>

                              {fields.length > 1 && (
                                <MinusCircleOutlined
                                  className="dynamic-delete-button"
                                  onClick={() => remove(field.name)}
                                />
                              )}
                            </Form.Item>
                          ))}
                        </>
                      )}
                    </Form.List>
                    <Form.Item>
                      <Button
                        htmlType="submit"
                        block
                        className="block w-[500px] h-[56px] mt-[30px] px-2 py-4 text-white bg-gradient-to-r from-[#54A630] to-[#54A630] rounded-lg"
                        style={{
                          marginTop: "30px",
                          backgroundColor: "#54A630",
                          color: "#fff",
                          size: "18px",
                          height: "56px",
                        }}
                      >
                        Agregar Pregunta
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              )}

              <div className="p-[24px] border-l-2 border-secondary">
                <Select
                  className=""
                  labelInValue
                  defaultValue={{
                    value: "Paragraph",
                    label: "Parrafo",
                  }}
                  style={{
                    width: 250,
                    height: 40,
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: "Paragraph",
                      label: "Parrafo",
                    },
                    {
                      value: "Multiple",
                      label: "Respuesta Multiple",
                    },
                    {
                      value: "Checkbox",
                      label: "Casillas",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageQuestionnaires;
