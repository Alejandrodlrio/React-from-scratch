import userProfileImage from "../assets/user.png";
import robotProfileImage from "../assets/robot.png";

function ChatMsg(props) {
  const message = props.message;
  const sender = props.sender;

  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img src={robotProfileImage} className="chat-message-profile" />
      )}
      <div className="message-content">{message}</div>

      {sender === "user" && (
        <img src={userProfileImage} className="chat-message-profile" />
      )}
      {/*<img src={`./img/${sender}.png`} width="50" />*/}
    </div>
  );
}

export default ChatMsg;
