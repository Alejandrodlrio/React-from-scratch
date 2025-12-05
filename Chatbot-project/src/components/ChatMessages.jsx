import { useRef, useEffect } from "react";
import ChatMsg from "./ChatMsg";
function ChatMessages({ chatMessages }) {
  const chatMesssagesRef = useRef(null);

  useEffect(() => {
    const chatContainer = chatMesssagesRef.current;
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div className="chat-messages-container" ref={chatMesssagesRef}>
      {chatMessages.map((content) => {
        return (
          <ChatMsg
            message={content.message}
            sender={content.sender}
            key={content.id}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;
