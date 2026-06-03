function ChatMessage({ message }) {
  return (
    <div
      className={`message ${
        message.sender === "agent"
          ? "agent-message"
          : "user-message"
      }`}
    >
      <div className="message-content">
        {message.text}
      </div>
    </div>
  );
}

export default ChatMessage;