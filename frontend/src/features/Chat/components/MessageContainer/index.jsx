import ChatBubbles from "../InputMessage/ChatBubbles";

function MessageContainer({ chatContainerRef, chatHistory }) {

  return (
      <div className="w-full h-3/5 flex my-10 flex-col">
        <div
          ref={chatContainerRef}
          className="mx-5 mb-2 max-h-4/5 grow bg-gray overflow-y-auto no-custom-scrollbar"
          
        >
          {chatHistory?.map((message, index) => (
            <ChatBubbles key={index} message={message?.message?.text} id={message?.user?._id} />
           
          ))}
        </div>
      
      </div>
  );
}

export default MessageContainer;
