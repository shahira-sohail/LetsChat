import "./App.css";
import { useEffect, useState } from "react";
import { socket } from "./socket";

function App() {
  const [connectionStatus, setConnectionStatus] = useState("Connecting...");
  const [usernameInput, setUsernameInput] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [typingUsers, setTypingUsers] = useState([]);
  const [currentRoom, setCurrentRoom] = useState("");

  useEffect(() => {
    function handleConnect() {
      setConnectionStatus("Connected");
    }

    function handleDisconnect() {
      setConnectionStatus("Disconnected");
    }

    function handleChatMessage(chatMessage) {
      setMessages((previousMessages) => [
        ...previousMessages,
        chatMessage,
      ]);
    }

    function handleTyping(data){
      setTypingUsers((previousUsers) => {
        const otherUsers = previousUsers.filter(
          (name) => name !==data.username
        );
        if(data.isTyping){
          return[...otherUsers, data.username];
        }
        return otherUsers;
      });
    }

    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);
    socket.on("chatMessage", handleChatMessage);
    socket.on("typing", handleTyping);

    socket.connect();

    return () => {
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
      socket.off("chatMessage", handleChatMessage);
      socket.off("typing", handleTyping);
      socket.disconnect();
    };
  }, []);

  function joinChat(event) {
    event.preventDefault();

    const trimmedUsername = usernameInput.trim();

    if (!trimmedUsername || !socket.connected) {
      return;
    }

    socket.emit("setUsername", trimmedUsername);
    setUsername(trimmedUsername);

    const defaultRoom = "General";
    socket.emit("joinRoom", defaultRoom);
    setCurrentRoom(defaultRoom);
  }

  function sendMessage(event) {
    event.preventDefault();

    const trimmedMessage = message.trim();

    if (!trimmedMessage || !username || !socket.connected) {
      return;
    }

    socket.emit("chatMessage", trimmedMessage);
    socket.emit("typing", false);
    setMessage("");
  }

  return (
    <main className="app-shell">
      <header className="app-header">
        <h1 className="brand-title">LetsChat<span>.</span></h1>
        <p className={`server-status ${connectionStatus === "Connected" ? "is-connected" : ""}`}>
          <span className="status-dot"></span>
          {connectionStatus}
        </p>
      </header>

      {!username ? (
        <form onSubmit={joinChat}>
          <label htmlFor="username">Enter your username</label>
          <input
            id="username"
            value={usernameInput}
            onChange={(event) => setUsernameInput(event.target.value)}
            placeholder="e.g. Shahira"
            maxLength={20}
            required
          />
          <button type="submit" disabled={connectionStatus !== "Connected"}>
            Join Chat
          </button>
        </form>
      ) : (
        <section>
          <h2>Welcome, {username}!</h2>
          <label htmlFor="room">Choose a room:</label>
          <select
            id="room"
            value={currentRoom}
            onChange={(event) => {
              const selectedRoom = event.target.value;
              socket.emit("joinRoom", selectedRoom);
              setCurrentRoom(selectedRoom);
              setMessages([]);
              setTypingUsers([]);
            }}
          >
            <option value="General">General</option>
            <option value="Tech Support">Tech Support</option>
          </select>

          <div className="message-list">
            {messages.length === 0 ? (
              <div className="empty-state">
                <div className="empty-state-icon">✳</div>
                <h3>Your space, your conversation.</h3>
                <p>No messages here yet. Say hello and start the conversation.</p>
              </div>
            ) : (
              messages.map((chatMessage, index) => (
                <article key={`${chatMessage.time}-${index}`}>
                  <strong>{chatMessage.sender}</strong>
                  {" . "}
                  <time dateTime={chatMessage.time}>
                    {new Date(chatMessage.time).toLocaleTimeString([], {
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </time>
                  <p>{chatMessage.text}</p>
                </article>
              ))
            )}
          </div>

          {typingUsers.length > 0 && (
            <p className="typing-indicator">
            <span className="typing-dots">
              <span></span>
              <span></span>
              <span></span>
            </span>
              {typingUsers.join(", ")}{" "}
              {typingUsers.length === 1 ? "is" : "are"}typing...
            </p>
          )}

          <form onSubmit={sendMessage}>
            <input
              value={message}
              onChange={(event) => {
                const value = event.target.value;
                setMessage(value);
                socket.emit("typing", value.trim().length > 0);
              }}
              placeholder="Type a message..."
              maxLength={1000}
              required
            />
            <button type="submit">Send</button>
          </form>
        </section>
      )}
    </main>
  );
}

export default App;
