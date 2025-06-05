import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { socket } from "./socket.js";

const App = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      id: nanoid(4),
      message: message,
    };
    socket.emit("chat", payload);
    setMessage("");
  };
  useEffect(() => {
    console.log("useEffect");
    socket.on("chat", (payload) => {
      setChat((prev) => [...prev, payload]);
    });
    return () => socket.off("chat");
  }, []);
  return (
    <>
      <h1>Chatty</h1>
      {chat.map((item) => (
        <div key={item.id}>
          <p>
            {item.id} sends {item.message}
          </p>
        </div>
      ))}
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
};
export default App;
