import { useNavigate } from "react-router-dom";
import baseURL from "../../config";
import Swal from "sweetalert2";
import PropTypes from "prop-types";

function TherapistRequestCard({ item }) {
  console.log(item);
  const navigate = useNavigate();

  const handleAcceptRequest = async (id) => {
    try {
      const response = await baseURL.post(
        `/therapist/action/${id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            authentication: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response);
      if (response?.data?.statusCode === "200") {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Request Accepted Successfully",
          footer: '<a href="">Why do I have this issue?</a>',
        });
        navigate("/allTherapist");
        window.location.reload();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  };

  return (
    <div className="flex bg-white rounded-md gap-5 col-span-1 h-[140px] mt-5 p-[16px] w-[28vw]">
      <div>
        <img
          className="w-[100px] h-[100px] rounded-full"
          src={`${import.meta.env.VITE_BASE_URL}${item?.image?.publicFileURL}`}
          alt=""
        />
      </div>
      <div className="flex gap-3 flex-col ">
        <div className="flex gap-14">
          <div>
            <h1 className="text-[28px] font-semibold">{item?.name}</h1>
            <p className="text-[12px] font-medium ">{item?.therapistType}</p>
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <button
              className="text-white bg-primary text-xs font-bold rounded px-[15px] p-[2px]"
              onClick={() => {
                window.open(
                  `${import.meta.env.VITE_BASE_URL}${
                    item?.resume?.publicFileURL
                  }`
                );
              }}
            >
              Resume
            </button>

            <button
              className="text-white bg-primary text-xs font-bold rounded px-[15px] p-[2px]"
              onClick={() => {
                window.open(
                  `${import.meta.env.VITE_BASE_URL}${
                    item?.certificate?.publicFileURL
                  }`
                );
              }}
            >
              Certificate
            </button>
          </div>
        </div>
        <div className="flex gap-5">
          <button
            onClick={() => handleAcceptRequest(item?._id)}
            className="text-white bg-primary text-[18px] rounded  px-[20px]  p-[4px] px-[20px] "
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
TherapistRequestCard.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    therapistType: PropTypes.string,
    image: PropTypes.shape({
      publicFileURL: PropTypes.string,
    }),
    resume: PropTypes.shape({
      publicFileURL: PropTypes.string,
    }),
    certificate: PropTypes.shape({
      publicFileURL: PropTypes.string,
    }),
  }).isRequired,
};

export default TherapistRequestCard;
