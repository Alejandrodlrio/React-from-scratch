import { useState } from "react";

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");

  function sendMessage() {
    if (inputText.trim() === "") return;

    const newChatMessages = [
      ...chatMessages, // The spread operator
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];
    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages, // The spread operator
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);
    setInputText("");
  }

  return (
    <div className="chat-input-container">
      <input
        className="input-bar"
        id="ph"
        type="text"
        placeholder="Send a message to chatbox"
        size="30"
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        value={inputText} //controlamos el input y lo vaciamos cuando ya hayamos enviado el texto
      />

      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
}

export default ChatInput;
