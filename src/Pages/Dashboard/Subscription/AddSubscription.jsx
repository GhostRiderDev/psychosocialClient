import { Button, Form, Input, Select } from "antd";
const { TextArea } = Input;
import React, { useState } from "react";
import baseURL from "../../../config";
import Swal from "sweetalert2";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { usePostSubscriptionMutation } from "../../../redux/Features/postSubscriptionApi";

const AddSubscription = () => {
  const navigate = useNavigate();
  const [plan, setPlan] = useState("");
  const [setSubsCription, { isLoading }] = usePostSubscriptionMutation();
  console.log(plan);

  const handleAddSubscription = async (values) => {
    console.log(values);
    console.log();

    // try {
    //   const data = {
    //     ...values
    //   }
    //   console.log(data);
    //   const response = await baseURL.post("/subscription/create-plan", data, {
    //     headers: {
    //       "Content-Type": "application/json",
    //       authorization: `Bearer ${localStorage.getItem("token")}`,
    //     },
    //   });
    //   console.log("----------------------", response);
    //   if (response.data?.statusCode === 201) {
    //     Swal.fire({
    //       position: "top-center",
    //       icon: "success",
    //       title: response.data.message,
    //       showConfirmButton: false,
    //       timer: 1500,
    //     });
    //     setTimeout(() => {
    //       navigate("/subscription");
    //     }, 1500);
    //     // navigate("/subscription");
    //   }

    // } catch (error) {
    //   console.log(error);
    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: "Something went wrong!",
    //     message: error.response.data.message,
    //   });
    // }
    try {
      const response = await setSubsCription(values);
      console.log(response);
      if (response.data?.statusCode === 201) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          navigate("/subscription");
        }, 1500);
        // navigate("/subscription");
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        message: error.response.data.message,
      });
    }
  };

  return (
    <div className="overflow-y-auto h-[90vh]">
      <div
        onClick={() => navigate("/subscription")}
        className="mt-[44px] cursor-pointer  flex items-center gap-1 p-5"
      >
        <MdOutlineKeyboardArrowLeft size={34} />
        <h1 className="text-[24px]  font-semibold">Add Subscription</h1>
      </div>

      <div className="p-5">
        <Form
          name="basic"
          // labelCol={{ span: 22 }}
          // wrapperCol={{ span: 40 }}
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={handleAddSubscription}
          //   onFinishFailed={handleCompanyInformationFailed}
          autoComplete="off"
        >
          <div className="flex gap-5">
            <Form.Item
              name="title"
              label={<span className="text-[18px] ">Title</span>}
              className="flex-1"
              rules={[
                {
                  required: true,
                  message: "Please input Title!",
                },
              ]}
            >
              <Input
                placeholder="Title"
                className="p-4
              rounded w-full 
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none"
              />
            </Form.Item>
            <Form.Item
              name="price"
              label={<span className="text-[18px] ">Price</span>}
              className="flex-1"
              rules={[
                {
                  required: true,
                  message: "Please input Price!",
                },
              ]}
            >
              <Input
                placeholder="Price"
                className="p-4
              rounded w-full 
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none"
                type="number"
              />
            </Form.Item>
          </div>

          <div className="flex-1">
            <Form.Item
              name="duration"
              label={<span className="text-[18px]">Duration</span>}
              className="flex-1"
              rules={[
                {
                  required: true,
                  message: "Please input Duration!",
                },
              ]}
            >
              <Input
                // name="publisherName"
                // onChange={(e) => setPublisherName(e.target.value)}
                placeholder="Duration"
                className="p-4
              rounded w-full 
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none"
                type="number"
              />
            </Form.Item>
          </div>

          <div className="flex-1">
            <Form.Item
              name="sessionCount"
              label={<span className="text-[18px]">Session Count</span>}
              className="flex-1"
              rules={[
                {
                  required: true,
                  message: "Please input Live Session Count!",
                },
              ]}
            >
              <Input
                // name="publisherName"
                // onChange={(e) => setPublisherName(e.target.value)}
                placeholder="Live ession Count"
                className="p-4
              rounded w-full 
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none"
                type="number"
              />
            </Form.Item>
          </div>

          <div className="flex-1">
            <Form.Item
              name="planType"
              label={<span className="text-[18px]">Plan Type</span>}
              className="flex-1"
              rules={[
                {
                  // required: true,
                  message: "Please input Live Session Count!",
                },
              ]}
            >
              <Select
                defaultValue="Individual and Teen"
                // className="p-4
                // rounded w-full
                // justify-start
                // border-none
                // mt-[12px]
                // items-center
                // gap-4 inline-flex outline-none focus:border-none"
                style={{
                  width: "100%",
                  height: 60,
                  fontSize: 26,
                  borderRadius: 10,
                  border: "2px solid #54A630",
                }}
                // onChange={(value) => setPlan(value)}
                options={[
                  {
                    value: "Couple",
                    label: "Couple",
                  },
                  {
                    value: "Individual and Teen",
                    label: "Individual and Teen",
                  },
                ]}
              />
            </Form.Item>
          </div>

          <div className="flex-1">
            <Form.Item
              name="description"
              label={<span className="text-[18px]">Description</span>}
              className="flex-1"
              rules={[
                {
                  required: true,
                  message: "Please input Description!",
                },
              ]}
            >
              <TextArea
                rows={4}
                // name="publisherName"
                // onChange={(e) => setPublisherName(e.target.value)}
                placeholder="Description"
                className="p-4
              rounded w-full 
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none"
              />
            </Form.Item>
          </div>

          <Button
            htmlType="submit"
            // onClick={handleAddEvent}
            block
            className="block w-[500px] h-[56px] mt-[30px] px-2 py-4  text-white bg-gradient-to-r from-primary to-green-800 rounded-lg hover:bg-primary"
            style={{
              marginTop: "30px",
              backgroundColor: "#54A630",
              color: "#fff",
              size: "18px",
              height: "56px",
            }}
          >
            Add Subscription
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddSubscription;
