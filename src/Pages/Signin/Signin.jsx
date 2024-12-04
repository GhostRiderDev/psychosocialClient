import { useState } from "react";
import { Input } from "antd";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import baseURL from "../../config";

function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const result = {
        email,
        password,
      };
      const response = await baseURL.post("/user/sign-in", result, {
        headers: {
          "Content-Type": "application/json",
          authentication: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response?.data?.statusCode === 200) {
        localStorage.setItem("token", response?.data?.data?.token);
        localStorage.setItem(
          "yourInfo",
          JSON.stringify(response?.data?.data?.attributes)
        );

        Swal.fire({
          position: "top-center",
          icon: "success",
          title: response?.data?.message,
          showConfirmButton: false,
          timer: 1500,
        });

        if (response?.data?.data?.attributes?.role === "Patient") {
          navigate("/panel/user");
          return;
        }

        if (response?.data?.data?.attributes?.role === "Admin") {
          navigate("/allTherapist");
          return;
        }

        if (response?.data?.data?.attributes?.role === "Therapist") {
          navigate("/therapistRequest");
          return;
        }
      }
    } catch (error) {
      console.log(error?.response?.data);
      Swal.fire({
        icon: "error",
        title: error?.response?.data?.statusCode,
        text: error?.response?.data?.message,
        footer: '<a href="#">Error</a>',
      });
    }
  };

  return (
    <div
      className="flex mx-auto overflow-hidden container rounded-xl shadow-xl bg-[url('https://i.ibb.co/t2TdKRm/signin.png')] "
      style={{ height: "100vh" }}
    >
      <div className="w-4/12 p-[32px] bg-white shadow rounded-3xl my-auto mx-auto">
        <div>
          <img
            className="h-[80px] mx-auto"
            src="https://images.squarespace-cdn.com/content/v1/585b889a20099ec51953ed45/293bfb2a-dae6-45a5-9214-b51e9a6a15bc/TI+Logo.png"
            alt=""
          />
          <h1 className="text-3xl mt-[24px] text-primary font-bold">
            Bienvenido
          </h1>
          <h2 className="text-sm mt-[8px] font-medium">
            Por favor inicia sesión para tener mejor experiencia
          </h2>
        </div>
        <div className="flex flex-col mt-[24px] gap-[27px]">
          <Input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu correo"
            className="p-4 bg-white rounded border border-primary justify-start items-center gap-4 inline-flex focus:border-primary "
            type="email"
            autoComplete="on"
          />
          <Input.Password
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingresa tu contraseña"
            className="p-4 bg-white rounded border border-primary justify-start items-center gap-4 inline-flex focus:border-primary "
          />
        </div>
        <div className="flex flex-col gap-[20px] mt-[18px]">
          <div className="flex justify-between">
            <h1
              onClick={() => navigate("/auth/forget-password")}
              className="text-primary cursor-pointer text-[14px] font-medium"
            >
              ¿Olvidaste tu contraseña?
            </h1>
          </div>
          <div>
            <button
              onClick={handleLogin}
              className="w-full p-3 bg-primary rounded text-white text-xl"
            >
              Iniciar sesión
            </button>
            <div className="flex items-center space-x-2">
              <hr className="flex-grow border-zinc-200 dark:border-zinc-200" />
              <span className="text-zinc-400 dark:text-zinc-300 text-sm">
                O
              </span>
              <hr className="flex-grow border-zinc-200 dark:border-zinc-200" />
            </div>
            <button
              onClick={() => navigate("/auth/signup")}
              className="w-full p-3 bg-secondary rounded text-primary text-base"
            >
              Registrarse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
