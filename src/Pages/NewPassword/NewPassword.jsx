import React, { useEffect, useState } from "react";
import { Input, Checkbox, Form, Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { IconLock } from "@tabler/icons-react";
import Swal from "sweetalert2";
import baseURL from "../../config";

function NewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
    const [form] = Form.useForm();
    const {email} = useParams();

    const onFinish = async (values) => {
      console.log("Received values of form: ", values?.re_enter_password);
      try {
        const response = await baseURL.post(
          "/user/set-password",{
            email : email,
            password : values?.re_enter_password
          }
        )
        console.log(response?.data);
        if(response?.data?.statusCode == 200){
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: response?.data?.message,
            showConfirmButton: false,

            timer: 1500,
          });
          navigate("/login");
        }  
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Try Again...",
          text: error?.response?.data?.message,
          footer: '<a href="#">Why do I have this issue?</a>',
        })
      }
    };
  return (
    <div
      className="flex mx-auto overflow-hidden  w-[1440px] rounded-xl shadow-xl bg-[url('https://i.ibb.co/t2TdKRm/signin.png')] "
      style={{ height: "100vh" }}
    >
      <div className=" w-[500px] h-[550px] p-[32px] bg-white shadow rounded-3xl my-auto mx-auto">
        <div className="mb-5">
          <svg
            onClick={() => navigate("/login")}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          <h1 className="text-[32px] mt-[24px] text-primary font-medium">
            Set Password
          </h1>
          <h2 className="text-[18px] mt-[8px] font-medium">
            A password should be more than 8 characters, including digits,
            letters, and symbols
          </h2>
        </div>


        {/* <div className="flex flex-col mt-[24px] gap-[27px]">
          <Input.Password
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New password"
            className="p-4 bg-white rounded border border-primary justify-start items-center gap-4 inline-flex focus:border-primary "
          />
          <Input.Password
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
            className="p-4 bg-white rounded border border-primary justify-start items-center gap-4 inline-flex focus:border-primary "
          />
        </div> */}


        {/* <div className="flex flex-col gap-[20px] mt-[18px]">
          <div>
            <button
              onClick={handleChnagePassowrd}
              className="w-full p-3 mt-[90px] bg-primary rounded text-white text-[24px]"
            >
              Confirm
            </button>
          </div>
        </div> */}


        <Form
          form={form}

          name="dependencies"
          autoComplete="off"
          style={{
            maxWidth: 600,
          }}
          layout="vertical"
          className="space-y-4 fit-content object-contain"
          onFinish={onFinish}
        >
        

          <Form.Item
            name="enter_password"
            label={
                <span className=" text-[16px] font-medium">
                  New Password
                </span>
              }
            rules={[
              {
                required: true,
                message: "Please Input Your Password!",
              },
            ]}
          >
            <Input.Password
              size="large"
              // onChange={handleChange}
              placeholder="Set your password"
              name="set_password"
              prefix={
                <IconLock
                  className="mr-2 bg-white rounded-full p-[6px]"
                  size={28}
                  color="#54A630"
                />
              }
              style={{
                border: "1px solid #54A630",
                height: "62px",
                background: "#F6F6F6",
                outline: "none",
                // marginBottom: "20px",
              }}
              // bordered={false}
            />
          </Form.Item>

          {/* Field */}
          <Form.Item
            name="re_enter_password"
            label={
                <span className="text-[16px] font-medium">
                 Confirm Password
                </span>
              }
           
            dependencies={["password"]}
            rules={[
              {
                required: true,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("enter_password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              size="large"
              placeholder="Re-enter password"
              name="re_enter_password"
              prefix={
                <IconLock
                  className="mr-2 bg-white rounded-full p-[6px]"
                  size={28}
                  color="#54A630"
                />
              }
              style={{
                border: "1px solid #54A630",
                height: "62px",
                background: "#F6F6F6",
                outline: "none",
                // marginBottom: "20px",
              }}
              
            />
          </Form.Item>
          <Form.Item>
            <Button
              
              htmlType="submit"
              className="w-full p-3 h-[62px] rounded-md bg-primary text-white text-[24px]"
            >
              Confirm
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default NewPassword;
