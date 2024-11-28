import { Button, Form, Input, Select } from "antd";
const { TextArea } = Input;
import React, { useState } from "react";
import baseURL from "../../../config";
import Swal from "sweetalert2";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { useGetSingleSubscriptionQuery } from "../../../redux/Features/getSingleSubscriptionApi";
import Loading from "../../../Components/Loading/Loading";
import { usePostUpdateSubscriptionMutation } from "../../../redux/Features/postUpdateSubscriptionApi";

const EditSubscription = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);
  const { data, isLoading } = useGetSingleSubscriptionQuery(id);
  const [setSubsCription, res] = usePostUpdateSubscriptionMutation();
  if (isLoading) {
    return <Loading />;
  }

  console.log(data?.data?.attributes);
  const result = data?.data?.attributes;
  const handleEditSubscription = async (values) => {
    console.log(values);
    try {
      const response = await setSubsCription({ values, id });
      console.log(response);
      if (response.data?.statusCode === 200) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/subscription");
      }
    } catch (error) {
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
        <h1 className="text-[24px] font-semibold">Edit Subscription</h1>
      </div>

      <div className="p-5">
        <Form
          name="basic"
          // labelCol={{ span: 22 }}
          // wrapperCol={{ span: 40 }}
          layout="vertical"
          initialValues={{
            title: result?.title,
            price: result?.price,
            description: result?.description,
            duration: result?.duration,
            sessionCount: result?.sessionCount,
            planType: result?.planType,
            liveSession: result?.liveSession,
            // liveSessionDuaration: result?.liveSessionDuaration,
            // weeklyResponse: result?.weeklyResponse,
          }}
          onFinish={handleEditSubscription}
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
                type="text"
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
              />
            </Form.Item>
            {/* <Form.Item
                name="liveSession"
                label={<span className=" text-[18px] ">Live Session</span>}
                className="flex-1"
                rules={[
                  {
                    required: true,
                    message: "Please input Live Session!",
                  },
                ]}
              >
                <Input
                  // onChange={(e) => setBlogName(e.target.value)}
                  placeholder="Live Session"
                  className="p-4
              rounded w-full 
              justify-start 
              border-none
              mt-[12px]
              items-center 
              gap-4 inline-flex outline-none focus:border-none"
                  type="text"
                />
              </Form.Item> */}
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
                placeholder="Live session Count"
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
            Edit Subscription
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditSubscription;
