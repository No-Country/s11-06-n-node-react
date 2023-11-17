import React from "react";
import { useSelector } from "react-redux";

const ChatBubbles = ({ message, id }) => {
  const userDetail = useSelector((state) => state.user.userDetail);
  if (userDetail._id == id) {
    return (
      <div className="flex p-3 justify-end max-h-full">
        <div className="px-3 rounded-t-lg rounded-bl-lg border-1 bg-[#E6EDF4] max-h-full break-all">
          <div>
            <p>{message}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
        <div className="flex p-3 justify-start max-h-full">
          <div className="px-3 rounded-t-lg rounded-br-lg border-1 bg-white max-h-full break-all">
            <div>
              <p>{message}</p>
            </div>
          </div>
        </div>
      );
  }
 
};

export default ChatBubbles;
