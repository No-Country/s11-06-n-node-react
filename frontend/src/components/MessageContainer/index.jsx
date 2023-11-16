import Friends from "../ListCardFriends/index";
import Sidebar from "../Sidebar/Sidebar";
import InfoFriend from "../InfoFriendChat/index";
import axios from "axios";
import io from "socket.io-client";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
const socket = io(`${import.meta.env.VITE_API_URL}/`);

function MessageContainer() {
  const userDetail = useSelector((state) => state.user.userDetail);
  let { iduser } = useParams();
  const [user, setUser] = useState();
  const [nameFriend, setNameFriend] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [storedMessages, setStoredMessages] = useState([]);
  const [firstTime, setFirstTime] = useState(false);
  const [chatId, setChatId] = useState();
  const cookies = Cookies.get("data");

  /* useEffect(() => {
    const receivedMEssage = (message) => {
      setMessages([message, ...messages]);
    };
    socket.on("message", receivedMEssage);
    return () => {
      socket.off("message", receivedMEssage);
    };
  }, [messages]); */

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
            setUser(res.data);
            axios
              .get(
                `${import.meta.env.VITE_API_URL}/chat/history/${
                  userDetail._id
                }/${user?._id}`,
                {
                  headers: {
                    Authorization: `Bearer ${JSON.parse(cookies).accessToken}`,
                  },
                }
              )
              .then((response) => {
                setChatId(response.data);
                if (chatId) {
                  socket.emit("joinChat", chatId);
                }
              });
          });
      }
    }
  }, [iduser]);

  socket.on("log", (data) => {
    console.log(data);
  });

  if (!firstTime) {
    /*  axios.get(url + "ruta de consulta").then((res) => {
      setStoredMessages(res.data.messages);
    }); */
  }

  const SubmitMessage = (e) => {
    e.preventDefault();
    const completeMessage = { text: message, date: new Date() };
    const data = { user, completeMessage };
    socket.emit("message", data);
    const newMessage = {
      body: message,
      from: "yo",
    };
    setMessages([newMessage, ...messages]);
    setMessage("");
  };

  return (
    <div className=" flex h-auto">
      <div className="w-56">
        <div className="w-56">
          <Sidebar />
        </div>
      </div>
      <div className="w-11/12  flex  flex-col">
        <div className="w-full items-center justify-center">
          <InfoFriend user={user} />
        </div>
        <div className="mx-5 mb-2 h-4/5 grow bg-gray">
          {/* {messages.map((message, index) => {
                    <div key={index} className={`flex p-3 ${message.from === 'Yo'? 'justify-end': 'justify-start'}`}>
                        <div className={`bg-greenPrimary px-3 rounded-lg border-1 ${message.from ==='Yo' ? 'bg-greenSecundary' : ': bg-greenPrimary'} `}>
                            <div> <small>{message.from} : {message.body}</small></div>
                        </div>
                    </div>
                })} */}
        </div>
        <div className="w-full h-10 my-4">
          <div className="w-full flex items-center justify-center ">
            <form
              className="w-2/4 flex justify-center"
              onSubmit={SubmitMessage}
            >
              <input
                type="text"
                className=" rounded-lg bg-white px-5 py-1 cursor-pointer"
                placeholder="Escribe un mensaje"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
              <button
                type="submit"
                className="ml-4 bg-greenPrimary px-3 rounded-lg text-white"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-auto">
        <Friends />
      </div>
    </div>
  );
}

export default MessageContainer;
