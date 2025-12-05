import { useState } from "react";
import "./App.css";
import ChatMessages from "./components/ChatMessages";
import ChatInput from "./components/ChatInput";

function App() {
  //const chatMessages = array[0];
  //const setChatMessages = array[1]; // siempre hay que actualizar la data desde el set, nunca desde el array original.
  // si actualizamos el estado, se actualiza el html. Si no, no
  const [chatMessages, setChatMessages] = useState([
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
