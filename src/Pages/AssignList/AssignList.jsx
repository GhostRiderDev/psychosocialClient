import React from "react";
import { useGetAllAssignListQuery } from "../../redux/Features/getAllAssignListApi";
import Loading from "../../Components/Loading/Loading";
import AssignCart from "../../Components/AssignCart/AssignCart";
import { useGetAllTherapistQuery } from "../../redux/Features/getAllTherapistApi";
import TherapistCart from "../../Components/TherapistCart/TherapistCart";

const fakeData = {
  _id: "6658656ae1d92971054932ce",
  date: "2024-05-30",
  time: [{ from: "20:00", to: "21:00" }],
  therapistId: {
    _id: "66585ed60043dad04a71d1f5",
    name: "Palash",
    email: "palashbarman2050@gmail.com",
    role: "Therapist",
    //   image: {
    //     publicFileURL:
    //       "public\images\users\1717133260276-image_picker_0C588F43-64D3-4D78-AB4B-C4CE7B696E9F-14656-000000477F469B81.jpg",
    //     path:
    //       'public\images\users\1717133260276-image_picker_0C588F43-64D3-4D78-AB4B-C4CE7B696E9F-14656-000000477F469B81.jpg'
    //   },
    //   resume: {
    //     publicFileURL: 'public\images\users\1717067454937-sample.pdf',
    //     path: 'public\images\users\1717067454937-sample.pdf'
    //   },
    //   certificate: {
    //     publicFileURL: 'public\images\users\1717067470598-sample.pdf',
    //     path: 'public\images\users\1717067470598-sample.pdf'
    //   },
    accepted: false,
    isBlocked: false,
    therapistType: "Couple Therapy",
    messaged: false,
    isVerified: true,
    oneTimeCode: null,
    __v: 0,
  },
  completed: false,
  isBooked: true,
  bookingType: "Audio",
  createdAt: "2024-05-30T11:39:22.603Z",
  updatedAt: "2024-05-30T12:41:48.974Z",
  __v: 0,
  userId: {
    assign: false,
    _id: "66586a325a4563bdb0ec0083",
    name: "allallallallla",
    email: "lededol321@agafx.com",
    role: "Patient",
    phone: "45645645645645",
    dateOfBirth: "",
    countryCode: "+267",
    privacyPolicyAccepted: false,
    isAdmin: false,
    isVerified: true,
    isDeleted: false,
    isBlocked: false,
    //   image: {
    //     publicFileURL: 'images/defaultImage/user.png',
    //     path: 'public\images\defaultImage\user.png'
    //   },
    subscription: "free",
    oneTimeCode: "Verified",
    answer: true,
    __v: 0,
  },
};

const AssignList = () => {
  const {
    data: therapist,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllTherapistQuery();

  if (isLoading) return <Loading />;
  // console.log(data?.data?.attributes);
  console.log(therapist?.data?.attributes);
  return (
    <div>
      <div className="p-10">
        <h1 className="text-[24px] font-semibold text-white rounded bg-primary p-[16px]">
          Lista de asignaciones de pacientes
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-5 overflow-hidden overflow-y-scroll ml-10">
        {therapist?.data?.attributes?.map((item) => (
          <TherapistCart key={item?._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AssignList;
