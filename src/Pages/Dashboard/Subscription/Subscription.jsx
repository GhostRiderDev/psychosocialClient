import { Button, Form, Input } from "antd";
const { TextArea } = Input;
import React from "react";
import baseURL from "../../../config";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { useGetAllSubscriptionsQuery } from "../../../redux/Features/getAllSubscriptionsApi";
import Loading from "../../../Components/Loading/Loading";
import SubscriptionCart from "../../../Components/SubsCription/SubscriptionCart";

function Subscription() {
  const { data, isSuccess, isLoading } = useGetAllSubscriptionsQuery();
  const navigate = useNavigate();
  if (isLoading) {
    return <Loading />;
  }
  console.log(data?.data);
  const result = data?.data;
  return (
    <div className="">
      <div>
        <div className="flex justify-between items-center p-5">
          <p className="font-semibold text-[24px]">Subscriptions</p>
          <div
            onClick={(e) => navigate("/add-subscriptions")}
            className="flex gap-2 items-center py-[15px]
                 px-[40px]
                  bg-primary
                  rounded-lg
                  text-white
                  cursor-pointer
                  "
          >
            <FaPlus size={17} />
            <p>Add Subscriptions</p>
          </div>
        </div>
        <div
          className="overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 200px)" }}
        >
          {
            data?.data?.length ? <div className="grid grid-cols-3 gap-5 p-5 overflow-y-auto">
            {isSuccess &&
              result?.map((item) => {
                return <SubscriptionCart key={item?._id} item={item} />;
              })}
          </div> : <p className="flex justify-center text-[50px]  h-[90vh] items-center">Subscription Not Found</p>
          }
          
        </div>
      </div>
    </div>
  );
}

export default Subscription;
