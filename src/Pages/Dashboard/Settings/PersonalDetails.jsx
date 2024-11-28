import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload, message, Input } from "antd";

function PersonalDetails() {
  const [imageUrl, setImageUrl] = useState(
    "https://i.ibb.co/Vg9pCrY/upload-Photo.png"
  ); // State to store the image URL

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");

  const props = {
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    listType: "picture",
    showUploadList: false, // Disable the default upload list
    beforeUpload(file) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const img = document.createElement("img");
          img.src = reader.result;
          img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            ctx.fillStyle = "red";
            ctx.textBaseline = "middle";
            ctx.font = "33px Arial";
            ctx.fillText("", 20, 20);
            canvas.toBlob((result) => {
              resolve(result);
              setImageUrl(URL.createObjectURL(result)); // Update the image URL
            });
          };
        };
      });
    },
  };

  return (
    <div>
      <div>
        <h1 className="text-[24px] font-semibold mb-[24px]">
          Personal Information
        </h1>
      </div>
      <div className="rounded-xl border-1 h-[300px] p-[24px] flex justify-between bg-white border-secondary">
        <div className="w-[250px]">
          <img className="w-[200px] h-[160px]" src={imageUrl} alt="" />{" "}
          {/* Update the src attribute */}
          <div className="mt-[20px] flex justify-center items-center">
            <Upload
              {...props}
              onChange={(info) => {
                if (info.file.status !== "uploading") {
                  console.log(info.file, info.fileList);
                }
                if (info.file.status === "done") {
                  message.success(
                    `${info.file.name} file uploaded successfully`
                  );
                } else if (info.file.status === "error") {
                  message.error(`${info.file.name} file upload failed.`);
                }
              }}
            >
              <Button
                className="border-none text-primary hover:text-primary"
                icon={<UploadOutlined className="text-primary" />}
              >
                Upload
              </Button>
            </Upload>
          </div>
        </div>
        <div className="flex flex-col w-full pl-5 gap-4">
          <div className="flex gap-4 justify-between">
            <Input
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
              className="p-4 bg-white rounded border border-primary w-full justify-start items-center gap-4 inline-flex focus:border-primary "
              type="text"
            />
            <Input
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
              className="p-4 bg-white rounded border border-primary justify-start items-center gap-4 inline-flex focus:border-primary "
              type="text"
            />
          </div>
          <div>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="mindgaze.admin@gmail.com"
              className="p-4 bg-white rounded border border-primary w-full justify-start items-center gap-4 inline-flex focus:border-primary "
              type="text"
            />
          </div>
          <div className="flex gap-4 justify-between">
            <Input
              onChange={(e) => setDateOfBirth(e.target.value)}
              placeholder="Date of Birth"
              className="p-4 bg-white rounded border border-primary w-full justify-start items-center gap-4 inline-flex focus:border-primary "
              type="text"
              suffix={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z"
                    stroke="#54A630"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            />
            <Input
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
              className="p-4 bg-white rounded border border-primary w-full justify-start items-center gap-4 inline-flex focus:border-primary "
              type="data"
              suffix={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.6569 16.6569C16.7202 17.5935 14.7616 19.5521 13.4138 20.8999C12.6327 21.681 11.3677 21.6814 10.5866 20.9003C9.26234 19.576 7.34159 17.6553 6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z"
                    stroke="#54A630"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z"
                    stroke="#54A630"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            />
          </div>
          <div>
            <button className="text-[18px] cursor-pointer p-[15px] border-[1px] bg-primary text-white rounded-[4px] border-primary py-2 ">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;
