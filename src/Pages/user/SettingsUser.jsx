import { useEffect, useState } from "react";
import {  useLocation,useNavigate,useParams  } from 'react-router-dom';
import SettingsHeader from "../../Components/Settings/SettingsHeader";
import PasswordAndSecurity from "../Dashboard/Settings/PasswordAndSecurity";

function SettingsUser() {
  const location = useLocation();
  const [currentLink, setCurrentLink] = useState("password-and-security");

  console.log('Current URL:', location.search);
  let { link } = useParams();
  console.log(link)

  const SettingsHeaderData = [
    
    {
      id: 2,
      name: "Contraseña y Seguridad",
      link: "password-and-security",
    },
    {
      id: 1,
      name: "Detalles Personales",
      link: "personal-details",
    },
  ];

  useEffect(() => {
  if(location.search==="?link=PersonalDetails"){
    setCurrentLink("personal-details");
  }
  },[])
const navigate = useNavigate();
  return (
    <div className="p-[24px]">
      <SettingsHeader
        setCurrentLink={setCurrentLink}
        currentLink={currentLink}
        SettingsHeaderData={SettingsHeaderData}
      />
      <div className="mt-[24px]">
        {currentLink === "personal-details" && navigate(`/panel/user/personal-details`)}
        {currentLink === "password-and-security" && <PasswordAndSecurity />}
      </div>
    </div>
  );
}

export default SettingsUser;
