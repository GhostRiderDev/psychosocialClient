import { useGetAllQuestionQuery } from "../../redux/Features/getAllQuestionApi";
import MultipleChoice from "../../Components/Patients/SurveyAnswers/MultipleChoice";
import CheckboxType from "../../Components/Patients/SurveyAnswers/CheckboxType";
import InputType from "../../Components/Patients/SurveyAnswers/InputType";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const NumberOfQuestion = () => {
  const { data } = useGetAllQuestionQuery();
  const navigate = useNavigate();
  const { id } = useParams();
  const filter = data?.data?.attributes?.filter(
    (data) => data?.questionType.split(" ")[0] == id
  );
  return (
    <div className="">
      <h1
        onClick={() => navigate("/questionnaires")}
        className="text-black cursor-pointer text-[24px] font-semibold pt-5 pl-10 flex items-center gap-2"
      >
        <FaArrowLeft size={18} /> Ir atras
      </h1>
      <h1 className="text-black text-[24px] rounded-lg font-semibold pt-5 pl-10">
        Gestionar Cuestionarios
      </h1>

      <div className=" p-[24px] m-10 bg-white h-[79vh] rounded-xl overflow-hidden overflow-y-scroll">
        <div className=" border-secondary pb-5">
          {filter?.map((data, index) => (
            <div key={index}>
              {data?.answerType === "Multiple" && (
                <MultipleChoice
                  // defaultValue={data}
                  allData={data}
                  serialNo={index + 1}
                />
              )}
              {data?.answerType === "Checkbox" && (
                <CheckboxType
                  // defaultValues={data}
                  allData={data}
                  serialNo={index + 1}
                />
              )}

              {data?.answerType === "Paragraph" && (
                <InputType
                  // defaultValue={data}
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
};

export default NumberOfQuestion;
