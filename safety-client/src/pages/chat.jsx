// src/pages/Chat.jsx
import { useState } from "react";
import "../pages/chat.css"; // adjust path if your chat.css is elsewhere
import { getBotReply } from "../api/Chatbotlogic";

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hello! How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg = {
      id: Date.now(),
      sender: "user",
      text: trimmed,
    };

    // show user message immediately
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsSending(true);

    try {
      // get rule-based “AI” reply
      const replyText = await getBotReply(trimmed);

      const botMsg = {
        id: Date.now() + 1,
        sender: "bot",
        text: replyText,
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      const botMsg = {
        id: Date.now() + 1,
        sender: "bot",
        text:
          "Sorry, I couldn’t fetch the information right now. Please try again in a moment.",
      };
      setMessages((prev) => [...prev, botMsg]);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="chat-page">
      <header className="chat-header">
        <h1>Chat Support</h1>
        <p>Talk to support in real time.</p>
      </header>

      <div className="chat-window">
        <div className="chat-messages">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`chat-bubble ${
                msg.sender === "user"
                  ? "chat-bubble-user"
                  : "chat-bubble-bot"
              }`}
            >
              {msg.text.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </div>
          ))}

          {isSending && (
            <div className="chat-bubble chat-bubble-bot typing">
              typing…
            </div>
          )}
        </div>

        <form className="chat-input-row" onSubmit={handleSend}>
          <input
            type="text"
            placeholder="Type your message…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" disabled={isSending}>
            {isSending ? "Sending…" : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}

