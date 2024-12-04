import { useEffect, useState } from "react";
import { Input } from "antd";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import baseURL from "../../config";
import PhoneInput from "react-phone-number-input";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("545454545");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [hasConfirmationBeenTouched, setHasConfirmationBeenTouched] =
    useState(false);

  useEffect(() => {
    if (hasConfirmationBeenTouched && passwordConfirmation) {
      if (password !== passwordConfirmation) {
        setPasswordError("Las contraseñas no coinciden");
      } else {
        setPasswordError("");
      }
    }
  }, [password, passwordConfirmation, hasConfirmationBeenTouched]);

  const handleSingup = async () => {
    try {
      const [, countryCode, phone] = phoneNumber.match(/(\+\d{2})(\d+)/);

      const result = {
        name,
        email,
        password,
        countryCode,
        phone,
      };
      const response = await baseURL.post("/user/sign-up", result);
      console.log(response);
      if (response?.status === 200) {
        console.log("Entra aqui*********+");
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Se acabo de enviar un correo de confirmación",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/otp/" + email);
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
    <div className="flex mx-auto overflow-hidden container rounded-xl shadow-xl bg-[url('https://i.ibb.co/t2TdKRm/signin.png')] p-2">
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
            Por favor regístrate para continuar
          </h2>
        </div>
        <div className="flex flex-col mt-[24px] gap-[27px]">
          <Input
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingresa tu nombre"
            className="p-4 bg-white rounded border border-primary justify-start items-center gap-4 inline-flex focus:border-primary "
          />

          <Input
            onChange={(e) => {
              setEmail(e.target.value);
              if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
                setEmailError("Correo inválido");
              } else {
                setEmailError("");
              }
            }}
            placeholder="Ingresa tu correo"
            className="p-4 bg-white rounded border border-primary justify-start items-center gap-4 inline-flex focus:border-primary "
            type="email"
          />
          {emailError && (
            <span className="text-red-500 text-sm">{emailError}</span>
          )}
          <PhoneInput
            placeholder="Ingrese su número de teléfono"
            international
            style={{
              marginTop: "4px",
            }}
            defaultCountry="CO"
            value={phoneNumber?.toString()}
            onChange={(value) => setPhoneNumber(value)}
          />
        </div>
        <div className="flex flex-col gap-[20px] mt-[18px]">
          <div>
            <button
              onClick={handleSingup}
              className="w-full p-3 bg-primary rounded text-white text-xl"
            >
              Registrarse
            </button>
            <div className="flex items-center space-x-2">
              <hr className="flex-grow border-zinc-200 dark:border-zinc-200" />
              <span className="text-zinc-400 dark:text-zinc-300 text-sm">
                O
              </span>
              <hr className="flex-grow border-zinc-200 dark:border-zinc-200" />
            </div>
            <button
              onClick={() => navigate("/auth/login")}
              className="w-full p-3 bg-secondary rounded text-primary text-base"
            >
              Iniciar sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
