import React from "react";
import axios from "axios";
import io from "socket.io-client";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import MessageContainer from "../components/MessageContainer";
import InputMessage from "../components/InputMessage";
import InfoFriendChat from "../components/InfoFriendChat";

const socket = io(`${import.meta.env.VITE_API_URL}/`);

const ChatIdPage = () => {
  const userDetail = useSelector((state) => state.user.userDetail);
  let { iduser } = useParams();
  const [userData, setUserData] = useState();
  const [currentMessage, setCurrentMessage] = useState("");
  const [chatId, setChatId] = useState();
  const cookies = Cookies.get("data");
  const [chatHistory, setChatHistory] = useState([]);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (cookies !== undefined) {
      if (JSON.parse(cookies).accessToken) {
        axios
          .get(`${import.meta.env.VITE_API_URL}/users/${iduser}`, {
            headers: {
              Authorization: `Bearer ${JSON.parse(cookies).accessToken}`,
            },
          })
          .then((res) => {
            setUserData(res.data);
          });
      }
    }
  }, [iduser, cookies]);

  useEffect(() => {
    if (userDetail?._id) {
      axios
        .get(
          `${import.meta.env.VITE_API_URL}/chat/history/${
            userDetail._id
          }/${iduser}`,
          {
            headers: {
              Authorization: `Bearer ${JSON.parse(cookies).accessToken}`,
            },
          }
        )
        .then((response) => {
          setChatId(response.data._id);
          socket.emit("joinChat", response.data._id);
        });
    }
  }, [userDetail]);

  useEffect(() => {
    const handleLog = (data) => {
      if (data?.messages?.length > 0) {
        setChatHistory(data.messages);
      } else {
        setChatHistory((prevHistory) => [...prevHistory, data]);
      }
    };
    socket.on("log", handleLog);
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
    return () => {
      socket.off("log", handleLog);
    };
  }, [chatHistory]);

  const SubmitMessage = (e) => {
    e.preventDefault();
    if (chatId) {
      const completeMessage = { text: currentMessage, date: new Date() };
      const data = { id: chatId, user: userDetail, message: completeMessage };
      socket.emit("message", data);
      setCurrentMessage("");
    }
  };

  return (
    <div className="w-full h-screen  flex  flex-col ">
      <InfoFriendChat user={userData} />
      <MessageContainer
        chatHistory={chatHistory}
        chatContainerRef={chatContainerRef}
      />

      <InputMessage
        SubmitMessage={SubmitMessage}
        currentMessage={currentMessage}
        setCurrentMessage={setCurrentMessage}
      />
    </div>
  );
};

export default ChatIdPage;
