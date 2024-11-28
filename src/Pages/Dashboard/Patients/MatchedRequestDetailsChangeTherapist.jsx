import React from "react";
import { Breadcrumb } from "antd";
import { useNavigate } from "react-router-dom";
import TherapistsListAssignChangeTherapitList from "../../../Components/Patients/MatchedTherapist/TherapistsListAssignChangeTherapitList";

function MatchedRequestDetailsChangeTherapist() {
  const navigate = useNavigate();
  return (
    <div className="p-[24px]">
      <Breadcrumb
        separator={<p className="text-[18px] text-[#686868]">/</p>}
        items={[
          {
            title: (
              <p
                onClick={() => navigate("/matchedTherapist")}
                className="text-[18px] font-semibold hover:text-primary cursor-pointer text-black"
              >
                Matched Request
              </p>
            ),
          },
          {
            title: (
              <p
                onClick={() => navigate("/matchedTherapist/sdfsd")}
                className="text-[18px] font-semibold hover:text-primary cursor-pointer text-black"
              >
                Details
              </p>
            ),
          },
          {
            title: (
              <p className="text-[18px] text-primary font-semibold">
                Change Therapist
              </p>
            ),
          },
        ]}
      />
      <div className="bg-white h-[306px] rounded-xl overflow-hidden mt-[24px]">
        <div>
          <div className="flex items-center gap-5 bg-white rounded-md  p-[16px]">
            <div>
              <img
                className="w-[100px] h-[100px] rounded-full"
                src="https://i.ibb.co/f1YyLM4/Ellipse-2322.png"
                alt=""
              />
            </div>
            <div className="flex gap-3 flex-col ">
              <div>
                <h1 className="text-[22px] font-semibold">Dianne Russell</h1>
                <p className="text-[14px] font-medium ">Teen Therapy(13-18)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Patients Details */}
        <div className="p-[24px]">
          <h1 className="text-[18px] font-semibold">Patient Details</h1>
          <p>User Name: Dianne Russell</p>
          <p>Email: diannerussell@gmail.com</p>
          <p>Date of Birth: 17/12/2023</p>
          <p>Survey: Teen Therapy(13-18)</p>
        </div>
      </div>

      <div>
        <TherapistsListAssignChangeTherapitList />
      </div>
    </div>
  );
}

export default MatchedRequestDetailsChangeTherapist;
