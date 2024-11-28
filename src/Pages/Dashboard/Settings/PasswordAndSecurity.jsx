import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import ForgotPassword from "../../../Components/Settings/ForgotPassword";
import { IconLock } from "@tabler/icons-react";
import baseURL from "../../../config";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function PasswordAndSecurity() {
  const [currentPassword, setCurrentPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleForgotPassword = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChangePassword = async (values) => {
    console.log("Reset Password", values);
    try {
      const response = await baseURL.post(
        `/user/change-password`,
        {
          oldPassword:values?.oldPassword,
          newPassword:values?.newPassword
        },
        {
          headers: {
            "Content-Type": "application/json",
            authentication: `Bearer ${localStorage.getItem("token")}`,
          }
        }
      )

      console.log(response);
      if(response?.status == 200){
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: response?.data?.message,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/")
      }
    } catch (error) {
      console.log(error);
       Swal.fire({
          icon: "error",
          title: "Try Again...",
          text: error?.response?.data?.message,
          footer: '<a href="#">Why do I have this issue?</a>',
        })
    }
  };

  return (
    <div>
      <div className="mb-[24px]">
        <h1 className="text-[24px] font-semibold ">Change Password</h1>
        <p>
          La contraseña debe tener al menos 8 caracteres, una letra mayúscula,
          una letra minúscula y un número.
        </p>
      </div>
      <div className="rounded-xl border-1 w-full p-[24px] flex flex-col bg-white border-secondary">
        <Form
          form={form}
          name="dependencies"
          autoComplete="off"
          style={{
            maxWidth: 600,
          }}
          layout="vertical"
          className="space-y-4 fit-content object-contain"
          onFinish={handleChangePassword}
        >
          <Form.Item
            name="oldPassword"
            rules={[
              {
                required: true,
                message: "Por favor ingresa la contraseña actual!",
              },
            ]}
          >
            <Input.Password
              size="large"
              placeholder="Enter tu contraseña actual"
              name="oldPassword"
              prefix={
                <IconLock
                  className="mr-2 bg-white  rounded-full p-[6px]"
                  size={28}
                  color="#FA1131"
                />
              }
              className="p-4 bg-white rounded border border-primary justify-start items-center w-[1040px] mt-2 focus:border-primary "
            />
          </Form.Item>

          <Form.Item
            name="newPassword"
            rules={[
              {
                required: true,
                message: "Por favor ingresa tu nueva contraseña!",
              },
            ]}
          >
            <Input.Password
              size="large"
              // onChange={handleChange}
              placeholder="Ingrese su nueva contraseña"
              name="newPassword"
              prefix={
                <IconLock
                  className="mr-2 bg-white rounded-full p-[6px]"
                  size={28}
                  color="#FA1131"
                />
              }
              className="p-4 bg-white rounded border border-primary justify-start items-center w-[1040px] mt-2 focus:border-primary "
            />
          </Form.Item>

          {/* Field */}
          <Form.Item
            name="reenterPassword"
            dependencies={["newPassword"]}
            rules={[
              {
                required: true,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("newPassword") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("La nueva contraseña no coincide!")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              size="large"
              placeholder="Repita su nueva contraseña"
              name="re_enter_password"
              prefix={
                <IconLock
                  className="mr-2 bg-white rounded-full p-[6px]"
                  size={28}
                  color="#FA1131"
                />
              }
              className="p-4 bg-white rounded border border-primary justify-start items-center w-[1040px] mt-2 focus:border-primary "
            />
          </Form.Item>
          <p className=" text-primary font-medium">
            <button onClick={() => handleForgotPassword()}>
              Olvide mi contraseña
            </button>
          </p>
          <Form.Item>
            <div className="">
              <Button
                htmlType="submit"
                className="flex justify-center ml-[33%] mx-auto h-[56px] px-2 py-4 mt-2 text-white bg-primary rounded-lg hover:text-white"
                style={{
                  width: "100%",
                  background: "#48dccc",
                  color: "#fff",
                  border: "1px solid #48dccc",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Actualizar Contraseña
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>

      <ForgotPassword
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
}

export default PasswordAndSecurity;
