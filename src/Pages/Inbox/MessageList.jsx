import SignleUser from "./SignleUser";
import PropTypes from "prop-types";

const MessageList = ({ chatList, handleChat, setParticipantDetails }) => {
  return (
    <div className="mt-[24px] bg-white border-secondary border-[1px] h-[95vh] w-[35vw] rounded-2xl">
      <div className="p-[30px]">
        <h1 className="text-2xl font-semibold font-['Montserrat'] text-primary border-b-[1px] border-primary pb-[20px]">
          Message List
        </h1>
        <div className="overflow-y-scroll h-[690px]">
          {chatList?.map((item, index) => {
            console.log("chat: ", item);
            return (
              item?.participantDetails && (
                <SignleUser
                  key={index}
                  setParticipantDetails={setParticipantDetails}
                  handleChat={handleChat}
                  status={false}
                  item={item}
                />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};
MessageList.propTypes = {
  chatList: PropTypes.array.isRequired,
  handleChat: PropTypes.func.isRequired,
  setParticipantDetails: PropTypes.func.isRequired,
};

export default MessageList;
