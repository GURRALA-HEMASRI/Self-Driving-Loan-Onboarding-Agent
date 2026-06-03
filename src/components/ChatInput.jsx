import { useState } from "react";

function ChatInput({
  onSendMessage,
  disabled
}) {
  const [input, setInput] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    onSendMessage(input);

    setInput("");
  };

  return (
    <form
      className="chat-input-form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Type here..."
        value={input}
        disabled={disabled}
        onChange={(e) =>
          setInput(e.target.value)
        }
      />

      <button
        type="submit"
        disabled={disabled}
      >
        Send
      </button>
    </form>
  );
}

export default ChatInput;