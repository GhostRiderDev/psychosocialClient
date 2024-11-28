import React from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumb } from "antd";

function MatchedRequestDetails() {
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
              <p className="text-[18px] text-primary font-semibold">Details</p>
            ),
          },
        ]}
      />
      <div className="bg-white h-[306px] rounded-xl overflow-hidden mt-[24px]">
        <div>
          <div className="flex items-center gap-5 bg-white rounded-md ">
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
      <div className="bg-white h-[336px] rounded-xl overflow-hidden mt-[24px]">
        <div className="flex flex-col  p-[16px]">
          <div className="flex  gap-5  pb-2 ">
            <img
              className="w-[70px] h-[70px]"
              src="https://i.ibb.co/Pw9b56k/b3b76175bc84084ec18597109498f96d.png"
              alt=""
            />
            <div>
              <h1 className="text-primary text-[24px] ">John Doe</h1>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-yellow-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>

                <h1 className="text-[18px] font-medium">4.9</h1>
              </div>
            </div>
          </div>
          <div>
            <h1 className=" text-[24px] mt-[24px] font-semibold">
              Information
            </h1>
            <div className="text-[16px] flex flex-col gap-2">
              <p>Name: John Doe</p>
              <p>Date of Birth: 12/08/1996</p>
              <p>Survey Category: Teen Therapy(13-18)</p>
              <p>Email: johndoe@gmail.com</p>
              <p>Session Completed: 56</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-[24px]">
        <p
          onClick={() => navigate("/matchedTherapist/sdfsd/sdfasd")}
          className="px-6 py-1 text-[18px] bg-white text-primary  font-medium cursor-pointer border-[1px] border-primary rounded inline-block"
        >
          Discharge Therapist
        </p>
      </div>
    </div>
  );
}

export default MatchedRequestDetails;
