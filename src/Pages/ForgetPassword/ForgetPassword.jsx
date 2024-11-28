import { useState } from "react";
import { Input } from "antd";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import baseURL from "../../config";

function ForgetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleForgotPassword = async() => {
    try {
      const response = await baseURL.post("/user/forgot-password", { email });
      console.log(response);
      if (response?.status === 200) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: response?.data?.message,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(`/otp/${email}`);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Try Again...",
        text: error?.response?.data?.message,
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };
  return (
    <div
      className="flex mx-auto overflow-hidden  w-[1440px] rounded-xl shadow-xl bg-[url('https://i.ibb.co/t2TdKRm/signin.png')] "
      style={{ height: "100vh" }}
    >
      <div className=" w-[500px] h-[550px] p-[32px] bg-white shadow rounded-3xl my-auto mx-auto">
        <div>
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
            Email
          </h1>
          <h2 className="text-[18px] mt-[8px] font-medium">
            Enter your email address to ger a verification code for resetting
            your password.
          </h2>
        </div>
        <div className="flex flex-col mt-[24px] gap-[27px]">
          <Input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="p-4 bg-white rounded border border-primary justify-start items-center gap-4 inline-flex  "
            type="email"
          />
        </div>
        <div className="flex flex-col gap-[20px] mt-[18px]">
          <div>
            <button
              onClick={handleForgotPassword}
              className="w-full mt-[180px] p-3 bg-primary rounded text-white text-[24px]"
            >
              Get OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
