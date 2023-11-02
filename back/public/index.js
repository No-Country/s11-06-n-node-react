const socket = io();
const log = document.getElementById("log"); //se guarda el historial traido de la bd
const chat = document.getElementById("chat"); //se guardan los mensajes nuevos
let buttonSend = document.getElementById("send");
let chatbox = document.getElementById("chatbox");
let email = document.getElementById("email");
let password = document.getElementById("password");
let login = document.getElementById("login");
let chatId;
let email2 = document.getElementById("email2");
let usersContainer = document.getElementById("users-container");
let inputContainer = document.getElementById("input-container");
const user = {
  name: localStorage.getItem("name"),
  lastname: localStorage.getItem("lastname"),
  avatar: localStorage.getItem("avatar"),
  idUser: localStorage.getItem("idUser"),
};

login.addEventListener("click", (e) => {
  const credentials = {
    email: email.value,
    password: password.value,
  };
  fetch("/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error de autenticación");
      }
    })
    .then((data) => {
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("idUser", data?.user?._id);
      localStorage.setItem("name", data?.user?.name);
      localStorage.setItem("lastname", data?.user?.lastname);
      localStorage.setItem("avatar", data?.user?.avatar);
      const token = localStorage.getItem("token");
      const idUser = localStorage.getItem("idUser");
      fetch("users", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Error de autenticación");
          }
        })
        .then((data) => {
          let usersData = "";
          data.forEach((user) => {
            usersData += `<button class="user-data" onclick="getChatHistory('${idUser}', '${user._id}')">${user.name} ${user.lastname}</button>`;
          });

          usersContainer.innerHTML = usersData;
        })
        .catch((error) => {
          console.error("Error en la solicitud:", error);
        });
    })
    .catch((error) => {
      console.error("Error en la solicitud:", error);
    });
});

async function getChatHistory(idUser, userId2) {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`/chat/history/${idUser}/${userId2}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      chatId = await response.json();
      if (chatId) {
        socket.emit("joinChat", chatId);
      }
    } else {
      console.error("Error al obtener el historial de chat");
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}

socket.on("log", (data) => {
  const messages = data?.messages || [data];
  messages.forEach((msg) => {
    chat.innerHTML += messageContainer(msg);
  });
});
if (buttonSend && chatbox) {
  buttonSend.addEventListener("click", sendMessage);
  chatbox.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  });
}

function sendMessage() {
  const messageText = chatbox.value.trim();
  if (messageText) {
    const message = { text: messageText, date: new Date() };
    const data = { user, message };
    socket.emit("message", data);
    chatbox.value = "";
  }
}

function messageContainer(msg) {
  return `
    <div class="msg-container">
      <div class="msg-user-avatar">
        <img src="${msg?.user?.avatar || "/assets/avatar.png"}"/>
      </div>
      <div class="msg">
        <p><span class="msg-user">${msg?.user?.name} ${
    msg?.user?.lastname
  }</span><span class="msg-message-data">${msg?.message?.date}</span> dice: </p>
        <p>${msg?.message?.text}</p>
      </div>
    </div>
  `;
}

const idUser = localStorage.getItem("idUser");
