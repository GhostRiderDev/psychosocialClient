import { Menu } from "antd";
import { useState } from "react";
import { BsBookmarkCheck } from "react-icons/bs";
import {
  FaArrowRightArrowLeft,
  FaUserDoctor,
} from "react-icons/fa6";
import { GiQueenCrown } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { TbLogout2 } from "react-icons/tb";
import { TiMessages } from "react-icons/ti";
import {  Route, Routes, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SettingsUser from "../SettingsUser";
import Inbox from "../../Inbox/Inbox";
import PersonalDetailsUser from "../PersonalDetailsUser";
import AppointmentsUser from "../../Dashboard/Appointments/Appointments";
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const UserHome = () => {
  const navigate = useNavigate();
  const [theme] = useState("light");
  const [mode] = useState("inline");
  const [collapsed] = useState(false);

  const logout = () => {
    Swal.fire({
      title: "¿Esta seguro de salir?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        localStorage.removeItem("yourInfo");

        navigate("/login");
      } else if (result.isDenied) {
        Swal.fire("Ok", "", "info");
      }
    });
  };

  const items = [
    getItem(
      <p className="text-[20px] leading-normal">Terapeutas</p>,
      "sub1",
      <FaUserDoctor style={{ fontSize: "18px" }} />,
      [
        getItem(
          <li
            onClick={(e) => navigate("/therapistRequest")}
            className="text-[20px] leading-normal"
          >
            Solicitudes
          </li>,
          "3"
        ),
      ]
    ),
    getItem(
      <p
        onClick={(e) => navigate("/panel/user/inbox")}
        className="text-[22px] leading-normal"
      >
        Mensajes
      </p>,
      "15",

      <TiMessages style={{ fontSize: "18px" }} />
    ),
    getItem(
      <p
        onClick={(e) => navigate("/panel/user/appointments")}
        className="text-[20px] leading-normal"
      >
        Citas
      </p>,
      "7",
      <BsBookmarkCheck style={{ fontSize: "18px" }} />
    ),
    getItem(
      <p
        onClick={(e) => navigate("/transaction")}
        className="text-[20px] leading-normal"
      >
        Transacciones
      </p>,
      "9",
      <FaArrowRightArrowLeft style={{ fontSize: "18px" }} />
    ),
    getItem(
      <p
        onClick={(e) => navigate("/subscription")}
        className="text-[20px] leading-normal"
      >
        Subscripciones
      </p>,
      "12",
      <GiQueenCrown style={{ fontSize: "18px" }} />
    ),
    getItem(
      <p
        onClick={(e) => navigate("/panel/user/settings")}
        className="text-[20px] leading-normal"
      >
        Configuraciones
      </p>,
      "13",
      <IoMdSettings style={{ fontSize: "18px" }} />
    ),
    getItem(
      <p onClick={logout} className="text-[20px] leading-normal">
        Salir
      </p>,
      "14",
      <TbLogout2 style={{ fontSize: "18px" }} />
    ),
  ];

  console.log("USER HOME RENDERED");
  return (
    <div className="flex mx-auto overflow-hidden border-2 container rounded-xl shadow-xl h-screen">
      <div className="">
        <div className="">
          <h1 className=" text-center text-white">
            <img
              onClick={(e) => navigate("/")}
              className="w-[220px] cursor-pointer mx-auto p-5"
              src="https://images.squarespace-cdn.com/content/v1/585b889a20099ec51953ed45/293bfb2a-dae6-45a5-9214-b51e9a6a15bc/TI+Logo.png"
              alt="logo"
            />
          </h1>
          <Menu
            style={{ overflowY: "auto", height: "60vh" }}
            className={`w-[302px] p-[20px] pt-0  pb-[60px] bg-white text-black  rounded-b-xl `}
            defaultSelectedKeys={["1"]}
            mode={mode}
            theme={theme}
            items={items}
            inlineCollapsed={collapsed}
          />
        </div>
      </div>
      <Routes>
        <Route path="settings" element={<SettingsUser />} />
        <Route path="inbox" element={<Inbox />} />
        <Route path="personal-details" element={<PersonalDetailsUser />} />
        <Route path="appointments" element={<AppointmentsUser />} />
      </Routes>
    </div>
  );
};

export default UserHome;
