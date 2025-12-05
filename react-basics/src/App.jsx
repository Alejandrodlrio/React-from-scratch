import { useRef, useState } from "../react";
import { Chatbot } from "../chatbot";
import "./App.css";
import RobotProfileImage from "./assets/robot.png";
import UserProfileImage from "./assets/user.png";

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

function ChatMsg(props) {
  const message = props.message;
  const sender = props.sender;

  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img src={RobotProfileImage} className="chat-message-profile" />
      )}
      <div className="message-content">{message}</div>

      {sender === "user" && (
        <img src={UserProfileImage} className="chat-message-profile" />
      )}
      {/*<img src={`./img/${sender}.png`} width="50" />*/}
    </div>
  );
}

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

function App() {
  //const chatMessages = array[0];
  //const setChatMessages = array[1]; // siempre hay que actualizar la data desde el set, nunca desde el array original.
  // si actualizamos el estado, se actualiza el html. Si no, no
  const [chatMessages, setChatMessages] = React.useState([
    {
      message: "Hello ChatBot",
      sender: "user",
      id: "id1",
    },
    {
      message: "Hello! How can I help you",
      sender: "robot",
      id: "id2",
    },
    {
      message: "What day is today",
      sender: "user",
      id: "id3",
    },
    {
      message: "Today is November 7",
      sender: "robot",
      id: "id4",
    },
  ]);

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
