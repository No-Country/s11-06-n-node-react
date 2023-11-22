import React from "react";

const InputMessage = ({ SubmitMessage, currentMessage, setCurrentMessage }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="mx-auto lg:px-10 max-w-7xl w-full">
        <form className="flex justify-center" onSubmit={SubmitMessage}>
          <textarea
            className="rounded-lg bg-white px-5 py-1 cursor-pointer w-full cursor-text overflow-hidden overflow-wrap break-word"
            placeholder="Escribe un mensaje"
            onChange={(e) => setCurrentMessage(e.target.value)}
            value={currentMessage}
            style={{ maxHeight: "30px", resize: "none" }}
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
  );
};

export default InputMessage;
