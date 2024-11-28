import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import { MdOutlineAttachFile } from "react-icons/md";
import { Image } from "antd";
import baseAxios from "../../../Config";

const SinglePersonChatDetails = ({
  chat,
  chatList,
  currentChatId,
  currentChatPersonName,
  senderId,
  participantDetails,
  participantId,
}) => {
  const UserData = JSON.parse(localStorage.getItem("yourInfo"));
  const chatContainerRef = useRef(null);
  const [messages, setMessages] = useState("");
  const socket = useRef(null);
  const [chats, setChats] = useState([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    setChats(chat);
  }, [chat]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  });

  useEffect(() => {
    socket.current = io("ws://localhost:3000");
    socket.current.on(`new::${currentChatId}`, (messageData) => {
      console.log("Received message:", messageData);
      setChats((prevChats) => [...prevChats, messageData]);
    });
    return () => {
      socket.current.off(`new::${currentChatId}`);
    };
  }, [currentChatId]);

  // console.log(socket);

  const handleMessageSend = () => {
    if (messages.trim() !== "") {
      const dataToSend = {
        senderId: senderId,
        message: messages,
        participant: participantId,
      };
      socket.current.emit("message", dataToSend, (callbackResponse) => {
        setMessages("");
      });
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    // Handle file upload here
    console.log(file);
    try {
      const formData = new FormData();

      formData.append("senderId", senderId);
      formData.append("participant", participantId);
      if (file && messages) {
        formData.append("message", messages);
        formData.append("image", file);
        if (file.type === "application/pdf") {
          formData.append("messageType", "text/image");
        }
      } else if (file) {
        formData.append("image", file);
        if (file.type === "application/pdf") {
          formData.append("messageType", "pdf");
        } else {
          formData.append("messageType", "image");
        }
      }
      const response = await baseAxios.post("/message/file", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);
      setMessages("");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(messages);
  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleMessageSend();
    }
  };

  const getTimeAgo = (timestamp) => {
    const now = new Date();
    const date = new Date(timestamp);
    const secondsAgo = Math.floor((now - date) / 1000);
    const minutesAgo = Math.floor(secondsAgo / 60);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);
    const yearsAgo = Math.floor(daysAgo / 365);

    if (yearsAgo > 0) {
      return yearsAgo === 1 ? "hace 1 año" : `hace ${yearsAgo} años`;
    } else if (daysAgo > 0) {
      return daysAgo === 1 ? "ayer" : `hace ${daysAgo} dias`;
    } else if (hoursAgo > 0) {
      return hoursAgo === 1 ? "hace 1 hora" : `${hoursAgo} hours ago`;
    } else if (minutesAgo > 0) {
      return minutesAgo === 1 ? "hace 1 minuto" : `hace ${minutesAgo} minutos`;
    } else {
      return "Ahora";
    }
  };

  const imageUrl = import.meta.env.VITE_BASE_URL;

  return (
    <div className="mt-[24px] border-secondary border-[1px] bg-white h-[95vh] w-full rounded-2xl">
      <div className="p-[30px]">
        <h1 className="text-2xl font-semibold font-['Montserrat'] text-primary border-b-[1px] border-primary pb-[20px]">
          {currentChatPersonName}
        </h1>
        <div ref={chatContainerRef} className=" h-[400px] overflow-y-scroll">
          {chats
            ?.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
            .map((c) =>
              c?.senderId === UserData?._id ? (
                <div
                  className="flex flex-row-reverse gap-5 mt-[32px] mr-5 mb-5"
                  key={c._id}
                >
                  {UserData?.image?.publicFileURL ? (
                    <img
                      className="w-[60px] h-[60px] rounded-full border-2 border-primary"
                      src="https://i.ibb.co/GtxhMsK/aiman.jpg"
                      alt=""
                    />
                  ) : (
                    <img
                      className="w-[60px] h-[60px] rounded-full border-2 border-primary"
                      src={`${imageUrl}${UserData?.image?.publicFileURL}`}
                      alt=""
                    />
                  )}
                  <div className="flex flex-col gap-1 text-wrap">
                    <p className="text-end text-primary font-bold">
                      {UserData?.name}
                    </p>
                    <p className="max-w-[500px] bg-primary text-white border-[1px] border-secondary p-[20px] rounded-[10px] rounded-tr-none text-sm font-normal font-['Montserrat']">
                      {console.log("messageType", c?.messageType)}

                      {c?.messageType === "text/image" ? (
                        <div>
                          <p className="pb-2">{c?.message}</p>
                          <Image
                            width={300}
                            height={200}
                            className="rounded-[10px] rounded-tl-none text-zinc-800 text-sm font-['Montserrat']"
                            src={`${imageUrl}/${c?.publicFileURL}`.replace(
                              "\\",
                              "/"
                            )}
                            alt=""
                          />
                        </div>
                      ) : c?.messageType === "text" ? (
                        <p>{c?.message}</p>
                      ) : c?.messageType === "pdf" ? (
                        <div>
                          <iframe
                            className="w-[300px] h-[300px] rounded-[10px] rounded-tl-none text-zinc-800 text-sm font-['Montserrat']"
                            src={`${imageUrl}${c?.publicFileURL}`}
                            title="PDF Viewer"
                          ></iframe>
                        </div>
                      ) : (
                        <Image
                          width={300}
                          height={200}
                          className="w-[300px] h-[300px] rounded-[10px] rounded-tl-none text-zinc-800 text-sm font-['Montserrat']"
                          src={`${imageUrl}${c?.publicFileURL}`}
                          alt=""
                        />
                      )}
                    </p>
                    <p className="text-end my-auto text-zinc-400 text-sm font-normal font-['Montserrat']">
                      {getTimeAgo(c?.createdAt)}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex gap-5 mt-[32px] ml-5 mb-5" key={c._id}>
                  {!participantDetails?.participantDetails?.image
                    ?.publicFileURL ? (
                    <img
                      className="w-[60px] h-[60px] rounded-full border-2 border-primary"
                      src="https://i.ibb.co/GtxhMsK/aiman.jpg"
                      alt=""
                    />
                  ) : (
                    <img
                      className="w-[60px] h-[60px] rounded-full border-2 border-primary"
                      src={`${imageUrl}${participantDetails?.participantDetails?.image?.publicFileURL}`}
                      alt=""
                    />
                  )}
                  {/* <img
                    className="w-[60px] h-[60px] rounded-full border-2 border-primary"
                    src={`${imageUrl}${participantDetails?.participantDetails?.image?.publicFileURL}`}
                    alt=""
                  /> */}
                  <div className="flex flex-col gap-1 text-wrap">
                    <p className="text-start text-primary font-bold">{`${currentChatPersonName}`}</p>
                    <p className="max-w-[500px] font-medium border-[1px] border-secondary p-[8px] rounded-[10px] rounded-tl-none text-zinc-800 text-sm font-['Montserrat']">
                      {/* {c?.message ? c?.message : <img className="w-[300px] h-[300px] rounded-[10px] rounded-tl-none text-zinc-800 text-sm font-['Montserrat']" src={`${imageUrl}/${c?.publicFileURL}`} alt="" />} */}
                      {c?.messageType === "text/image" ? (
                        <div>
                          <p className="pb-2">{c?.message}</p>
                          <Image
                            width={300}
                            height={200}
                            className="rounded-[10px] rounded-tl-none text-zinc-800 text-sm font-['Montserrat']"
                            src={`${imageUrl}/${c?.publicFileURL}`}
                            alt=""
                          />
                        </div>
                      ) : c?.messageType === "text" ? (
                        <p>{c?.message}</p>
                      ) : (
                        <Image
                          width={300}
                          height={200}
                          className="w-[300px] h-[300px] rounded-[10px] rounded-tl-none text-zinc-800 text-sm font-['Montserrat']"
                          src={`${imageUrl}${c?.publicFileURL}`}
                          alt=""
                        />
                      )}
                    </p>
                    <p className="text-start my-auto text-zinc-400 text-sm font-normal font-['Montserrat']">
                      {getTimeAgo(c?.createdAt)}
                    </p>
                  </div>
                </div>
              )
            )}
        </div>
        <div className="flex gap-2 items-center">
          <MdOutlineAttachFile
            onClick={handleIconClick}
            size={30}
            className="cursor-pointer"
          />
          <input
            type="file"
            accept="image/*, .pdf"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileUpload}
          />
          <input
            value={messages}
            onChange={(e) => setMessages(e.target.value)}
            className="p-3 outline-primary border-[1px] border-secondary w-full rounded-[20px]"
            placeholder="Ingresa tu mensaje"
            type="text"
            onKeyDown={handleKeyPress}
          />
          <svg
            onClick={handleMessageSend}
            className="cursor-pointer"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.50503 16.6818C7.85503 10.8468 13.8625 6.5618 19.17 9.0768L49.03 23.2218C54.75 25.9293 54.75 34.0693 49.03 36.7768L19.17 50.9243C13.8625 53.4393 7.85753 49.1543 8.50503 43.3193L9.70503 32.4993H30C30.6631 32.4993 31.299 32.2359 31.7678 31.7671C32.2366 31.2982 32.5 30.6623 32.5 29.9993C32.5 29.3363 32.2366 28.7004 31.7678 28.2315C31.299 27.7627 30.6631 27.4993 30 27.4993H9.70753L8.50753 16.6818H8.50503Z"
              fill="#48dccc"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SinglePersonChatDetails;
