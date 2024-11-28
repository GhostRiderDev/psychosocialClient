import { useEffect, useState } from "react";
import SettingsHeader from "../../../Components/Settings/SettingsHeader";
import PasswordAndSecurity from "./PasswordAndSecurity";
import Others from "./Others";
import {  useLocation,useNavigate,useParams  } from 'react-router-dom';

function Settings() {
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
   
    {
      id: 4,
      name: "Others",
      link: "others",
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
        {currentLink === "personal-details" && navigate(`/personal-details`)}
        {currentLink === "password-and-security" && <PasswordAndSecurity />}
        {currentLink === "others" && <Others />}
      </div>
    </div>
  );
}

export default Settings;
