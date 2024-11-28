import React from "react";
import { Breadcrumb } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import MultipleChoice from "../../../Components/Patients/SurveyAnswers/MultipleChoice";
import CheckboxType from "../../../Components/Patients/SurveyAnswers/CheckboxType";
import InputType from "../../../Components/Patients/SurveyAnswers/InputType";
import { useGetSinglePatientsQuery } from "../../../redux/Features/getSinglePatientsApi";
import { useGetAnswereUserQuery } from "../../../redux/Features/getAnswereUserApi";
import Loading from "../../../Components/Loading/Loading";

function PatientRequestDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
console.log(id);
  const { data, isLoading, isError } = useGetSinglePatientsQuery({id});
  const { data: data2, isLoading: loading } = useGetAnswereUserQuery({id});

  if (isLoading || loading) {
    return <Loading />;
  }

  // if (isError) {
  //   return <div>Error loading patient data.</div>;
  // }

  const result = data?.data?.attributes;
  const question = data2?.data?.attributes?.[0]?.answer || [];
  console.log(result);
  console.log(question);

  return (
    <div className="p-[24px]">
      <Breadcrumb
        separator={<p className="text-[18px] text-[#686868]">/</p>}
        items={[
          {
            title: (
              <p
                onClick={() => navigate("/patientsRequest")}
                className="text-[18px] font-semibold hover:text-primary cursor-pointer text-black"
              >
                Patients Request
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
      <div className="bg-white h-[79vh] rounded-xl overflow-hidden overflow-y-scroll mt-[24px]">
        <div>
          <div className="flex bg-white rounded-md p-[16px]">
            <div>
              <img
                className="w-[100px] h-[100px] rounded-full mr-5"
                src={`${import.meta.env.VITE_BASE_URL}${result?.image?.publicFileURL}`}
                alt=""
              />
            </div>
            <div className="flex gap-3 flex-col">
              <div>
                <h1 className="text-[22px] font-semibold">{result?.name}</h1>
                <p className="text-[14px] font-medium">{result?.email}</p>
              </div>
              <div className="flex gap-5">
                <button
                  onClick={() => navigate(`/patientsRequest/assign/${id}`)}
                  className="text-white bg-primary text-[18px] rounded py-2 px-[20px]"
                >
                  Assign Therapist
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Patients Details */}
        <div className="p-[24px]">
          <h1 className="text-[18px] font-semibold">Patient Details</h1>
          <p>User Name: {result?.name}</p>
          <p>Email: {result?.email}</p>
          <p>Date of Birth: {result?.dateOfBirth || "N/A"}</p>
          <p>Survey: {result?.survey || "N/A"}</p>
        </div>

        {/* Survey Answers */}
        <div className="px-[24px] mb-6">
          <h1 className="text-[18px] font-semibold">Survey Answers</h1>
          {question?.map((data, index) => (
            <div key={index}>
              {data?.answerType === "Multiple" && (
                <MultipleChoice
                  ans={data?.answer}
                  allData={data}
                  serialNo={index + 1}
                />
              )}
              {data?.answerType === "Checkbox" && (
                <CheckboxType
                  ans={data?.answer}
                  allData={data}
                  serialNo={index + 1}
                />
              )}
              {data?.answerType === "Paragraph" && (
                <InputType
                  ans={data?.answer}
                  allData={data}
                  serialNo={index + 1}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PatientRequestDetails;
