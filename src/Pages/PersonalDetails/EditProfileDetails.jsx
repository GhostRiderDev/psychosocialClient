import { Button, Form, Input, Upload } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { LuImagePlus } from "react-icons/lu";
import "react-phone-number-input/style.css";
import Swal from "sweetalert2";
import baseURL from "../../config";
import { useGetSingleUserQuery } from "../../redux/Features/getSingleUserApi";
import Loading from "../../Components/Loading/Loading";

const EditProfileDetails = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  console.log(id);
  const [currentUser, setCurrentUser] = useState();
  const {data,isError,isLoading} = useGetSingleUserQuery({id});
 
  const user = data?.data?.attributes;
  console.log(user);

  const baseUrl = import.meta.env.VITE_BASE_URL;
  console.log(baseUrl);

  const [phoneNumber, setPhoneNumber] = useState(`${user?.phone}`);
  const [email, setEmail] = useState(user?.email);
  const [fileList, setFileList] = useState([]);
    const [imageUrl, setImageUrl] = useState(`${baseUrl}${user?.image?.publicFileURL}`);
    useEffect(() => {
      setImageUrl(`${baseUrl}${user?.image?.publicFileURL}`);
      setEmail(user?.email);
      setPhoneNumber(`${user?.phone}`)
    }, [data]);
    if (isLoading) {
      return <Loading />;
    }
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
                  setImageUrl(URL.createObjectURL(result));
                  // console.log(result);// Update the image URL
                });
              };
            };
          });
        },
      };
console.log(phoneNumber);
console.log("=================>",fileList);
  const handleUpdateProfile = async (values) => {
    console.log(values);
    const updateProfile = {
      ...values,
      image: fileList[0]?.originFileObj,
      phone:phoneNumber,
    };
    console.log("aiman======>",updateProfile);
    const formData = new FormData();
    formData.append("name", updateProfile?.name);
    formData.append("email", updateProfile?.email);
    formData.append("phone", updateProfile?.phone);
    if (fileList[0]?.originFileObj) {
      formData.append("image", fileList[0]?.originFileObj);
    }
    try {
      const response = await baseURL.post(
        `/user/update`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            authentication: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(`${localStorage.getItem("token")}`);
      console.log(response?.data);
      if (response?.status == 200) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: response?.data?.message,
          showConfirmButton: false,
          timer: 1500,
        });
        localStorage.removeItem("yourInfo");
        localStorage.setItem(
          "yourInfo",
          JSON.stringify(response?.data?.user)
        );
        console.log(response.data);
        navigate("/", { replace: true });
        setTimeout(() => window.location.reload(), 1700);
      }
    } catch (error) {
      console.log("Registration Fail", error);
      Swal.fire({
        icon: "error",
        title: "Error...",
        text: error?.response?.data?.message,
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
    console.log(updateProfile);
  };

  return (
    <div>
      <div
        onClick={() => navigate("/personal-details")}
        className="flex cursor-pointer  items-center pt-[40px] pl-5 mb-[63px]"
      >
        <MdOutlineKeyboardArrowLeft size={30} />
        <h1 className="text-[20px] font-medium"> Editar perfil</h1>
      </div>
      <div className="ml-[24px] p-[36px] rounded-xl">
        <Form
          name="basic"
          labelCol={{ span: 22 }}
          wrapperCol={{ span: 40 }}
          layout="vertical"
          initialValues={{
            name: user?.name,
            email: user?.email,
            phoneNumber: user?.phone,
          }}
          autoComplete="off"
          onFinish={handleUpdateProfile}
        >
          <div className="flex gap-5  rounded-xl">
            <div className="w-[33%] bg-white rounded-xl  ml-[24px] flex flex-col justify-center items-center ">
              <div className="w-[242px] h-[242px] relative rounded-full flex flex-col justify-center items-center">
                <Upload
                  {...props}
                  name="avatar"
                  listType="picture-circle"
                  showUploadList={false}
                  action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                  onChange={({ fileList: newFileList }) => {
                    setFileList(newFileList);
                  }}
                >
                  <img
                    className="w-[242px] h-[242px] rounded-full flex justify-center items-center opacity-50"
                    src={imageUrl}
                    alt=""
                  />
                  <Button
                    className="border-none text-[16px] bg-[white] absolute text-primary hover:text-primary"
                    icon={<LuImagePlus size={17} className="text-[#3BA6F6]" />}
                  >
                    Cambiar foto
                  </Button>
                </Upload>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-[20px] ">
                  {user?.role?.toUpperCase()}
                </p>
                <h1 className=" text-[30px] font-medium">
                  {user?.name?.toUpperCase()}
                </h1>
              </div>
            </div>

            <div className="flex-1 w-[66%]">
              <div className="flex flex-col gap-[24px]">
                <div className="flex gap-[25px]">
                  <div className="flex-1">
                    <Form.Item
                      label={
                        <span className=" text-[18px] font-medium">Nombre</span>
                      }
                      name="name"
                      className="flex-1"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Name!",
                        },
                      ]}
                      initialValue={user?.name}

                    >
                      <Input
                        placeholder="Name"
                        className="p-4 
                          rounded w-full 
                          justify-start 
                          border-2 
                          border-secondary
                          mt-[12px]
                          items-center 
                          gap-4 inline-flex"
                          
                      />
                    </Form.Item>
                  </div>
                </div>
                <div className="flex-1">
                  <Form.Item
                    label={
                      <span className=" text-[18px] font-medium">Email</span>
                    }
                    name="email"
                    className="flex-1"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Email!",
                      },
                    ]}
                    initialValue={email ||user?.email}
                  >
                    <Input
                      placeholder="Email"
                     
                      className="p-4 
                          rounded w-full 
                          justify-start 
                          border-2 
                          border-secondary
                          mt-[12px]
                          items-center 
                          gap-4 inline-flex"
                          readOnly
                    />
                  </Form.Item>
                </div>
                <div className="flex-1">
                  <label
                    htmlFor=""
                    className=" text-[18px] font-medium mb-[12px]"
                  >
                    Telefono
                  </label>
                  <PhoneInput
                    placeholder="Ingrese su número de teléfono"
                    international
                    // countryCallingCodeEditable
                    style={{
                      marginTop: "12px",
                    }}
                    defaultCountry="US"
                    value={phoneNumber?.toString()}
                    onChange={(value) => setPhoneNumber(value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <Button
            style={{
              marginTop: "30px",
              backgroundColor: "#54A630",
              color: "#fff",
              size: "18px",
              height: "56px",
            }}
            htmlType="submit"
            className="text-[18px] w-full mt-[50px] mb-[20px] cursor-pointer h-[60px] bg-secondary text-white"
          >
            Update profile
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditProfileDetails;
