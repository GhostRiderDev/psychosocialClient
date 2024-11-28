import { useState } from "react";
import { Modal, Input, Form, Button } from "antd";
import OtpInput from "react-otp-input";
import baseURL from "../../config";
import Swal from "sweetalert2";
import { IconLock } from "@tabler/icons-react";

function ForgotPassword({ isModalOpen, setIsModalOpen, handleCancel }) {
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [isNewPasswordSet, setIsNewPasswordSet] = useState(false);
  const [form] = Form.useForm();
  const handleGetOTP = async () => {
    // Logic to send OTP to the provided email
    // Update state to move to the next step
    try {
      const response = await baseURL.post(
        `/user/forgot-password`,
        { email },
        {
          headers: {
            "Content-Type": "application/json",
            authentication: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response);
      if (response?.statusCode == 200) {
        setStep(2);
      }
    } catch (error) {
      console.log(error);
      setStep(1);
      Swal.fire({
        icon: "error",
        title: "Try Again...",
        text: error?.response?.data?.message,
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
    setStep(2);
    console.log("send otp");
  };

  const handleVerifyOTP = async () => {
    // Logic to verify the entered OTP
    // Update state to move to the next step
    try {
      const response = await baseURL.post(
        `/user/verify-code`,
        {
          email: email,
          code: otp,
        },
        {
          headers: {
            "Content-Type": "application/json",
            authentication: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log(response.data);
      if (response?.statusCode == 200) {
        setStep(3);
      }

      // navigate(`/set_new_password/${email}`);
    } catch (error) {
      setStep(2);
      console.log("Registration Fail", error?.response?.data?.message);
      Swal.fire({
        icon: "error",
        title: "Error...",
        text: error?.response?.data?.message,
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }

    setStep(3);
    console.log("verify otp");
  };

  const handleSetNewPassword = async (value) => {
    // Logic to set a new password
    // Update state or perform any necessary actions
    const data = { email: email, password: value?.password };
    try {
      const response = await baseURL.post(`/user/set-password`, data, {
        headers: {
          "Content-Type": "application/json",
          authentication: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      console.log(response.data);
      if (response.data.statusCode == 200) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        setIsModalOpen(false);
      }
    } catch (error) {
      console.log("Registration Fail", error?.response?.data?.message);
      Swal.fire({
        icon: "error",
        title: "Error...",
        text: error?.response?.data?.message,
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
    // console.log(value);
    setIsNewPasswordSet(true);
    // Optionally close the modal

    // setIsModalOpen(false);
    setStep(1);
    console.log("set new password");
  };

  const renderContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <p className="text-zinc-80 text-[18px] pb-2 font-semibold font-['Montserrat']">
              Ingresa tu correo electrónico para recibir un código de
              verificación
            </p>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="p-4 mt-[24px] mb-[170px] bg-white rounded border border-primary justify-start items-center gap-4 inline-flex focus:border-primary "
              type="email"
            />

            <div onClick={handleGetOTP} className="cursor-pointer">
              <div className="w-full h-[60px] p-2.5 bg-primary rounded-md justify-center items-center  gap-2.5 inline-flex">
                <div className="text-white text-lg py-5 font-semibold font-['Montserrat']">
                  Obtener código
                </div>
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <p className="text-zinc-80 text-[18px] pb-2 font-semibold font-['Montserrat']">
              Nosotros hemos enviado un código de verificación a tu correo
              electrónico
            </p>

            <div className="flex flex-col mt-[24px] my-[16px] gap-[27px]">
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                inputStyle={{
                  width: "70px",
                  height: "80px",
                  fontSize: "50px",
                  borderRadius: "5px",
                  border: "1px solid #54A630",
                }}
                renderSeparator={<span style={{ width: "20px" }}></span>}
                renderInput={(props) => <input {...props} />}
              />
            </div>

            <div className="flex justify-between mb-[60px]">
              <p className="text-[18px]">No me he recibido el codigo?</p>
              <p className="text-primary cursor-pointer text-[24px]">
                Reenviar
              </p>
            </div>

            <div onClick={handleVerifyOTP} className="cursor-pointer">
              <div className="w-full h-[60px] p-2.5 bg-primary rounded-md justify-center items-center  gap-2.5 inline-flex">
                <div className="text-white text-lg py-5 font-semibold font-['Montserrat']">
                  Verificar
                </div>
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <p className="text-zinc-80 text-[18px] pb-2 font-semibold font-['Montserrat']">
              Ingresa tu nueva contraseña
            </p>

            <div className="flex flex-col mt-[24px] gap-[27px] mb-[80px]">
              <Form
                form={form}
                name="dependencies"
                autoComplete="off"
                style={{
                  maxWidth: 600,
                }}
                layout="vertical"
                className="space-y-4 fit-content object-contain"
                onFinish={handleSetNewPassword}
              >
                <Form.Item
                  name="enter_password"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input.Password
                    size="large"
                    placeholder="Nueva contraseña"
                    name="set_password"
                    prefix={
                      <IconLock
                        className="mr-2 bg-white rounded-full p-[6px]"
                        size={28}
                        color="#FA1131"
                      />
                    }
                    className="p-4 bg-white rounded border border-primary justify-start items-center gap-4 inline-flex focus:border-primary "
                  />
                </Form.Item>

                {/* Field */}
                <Form.Item
                  name="password"
                  dependencies={["password"]}
                  rules={[
                    {
                      required: true,
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (
                          !value ||
                          getFieldValue("enter_password") === value
                        ) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            "La nueva contraseña no cumple con el formato!"
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    size="large"
                    placeholder="Confirmar contraseña"
                    name="re_enter_password"
                    prefix={
                      <IconLock
                        className="mr-2 bg-white rounded-full p-[6px]"
                        size={28}
                        color="#FA1131"
                      />
                    }
                    className="p-4 bg-white rounded border border-primary justify-start items-center gap-4 inline-flex focus:border-primary "
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    htmlType="submit"
                    className="w-full h-[60px] p-2.5 bg-primary rounded-md justify-center items-center  gap-2.5 inline-flex text-white text-lg py-5 font-semibold font-['Montserrat']"
                  >
                    Actualizar contraseña
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Modal
        visible={isModalOpen}
        title={
          <div className="text-[32px] py-2 border-b-2 border-primary border-none font-semibold font-['Montserrat'] text-primary">
            <span>
              {step === 1
                ? "Email"
                : step === 2
                ? "Verificar codigo"
                : step === 3
                ? "Nueva contraseña"
                : null}
            </span>
          </div>
        }
        onCancel={handleCancel}
        centered
        footer={[]}
        width={500}
      >
        <div className="flex flex-col">{renderContent()}</div>
      </Modal>
    </div>
  );
}

export default ForgotPassword;
