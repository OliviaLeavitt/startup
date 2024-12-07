import React, { useState, useEffect } from "react";

export function Chat() {
  const [socket, setSocket] = useState(null);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const protocol = window.location.protocol === "http:" ? "ws" : "wss";
    const newSocket = new WebSocket(`${protocol}://${window.location.host}/ws`);

    newSocket.onopen = () => {
      setConnected(true);
      appendMsg("system", "websocket", "connected");
    };

    newSocket.onmessage = async (event) => {
      const text = await event.data.text();
      const chat = JSON.parse(text);
      appendMsg("friend", chat.name, chat.msg);
    };

    newSocket.onclose = () => {
      setConnected(false);
      appendMsg("system", "websocket", "disconnected");
    };

    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  const appendMsg = (cls, from, msg) => {
    setMessages((prevMessages) => [
      { cls, from, msg },
      ...prevMessages,
    ]);
  };

  const sendMessage = () => {
    if (message && socket) {
      appendMsg("me", "me", message);
      socket.send(JSON.stringify({ name, msg: message }));
      setMessage("");
    }
  };

  return (
    <div className="chat-app">
      <div className="name">
        <fieldset id="name-controls">
          <legend>My Name</legend>
          <input
            id="my-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </fieldset>
      </div>

      <fieldset id="chat-controls" disabled={!connected || !name}>
        <legend>Chat</legend>
        <input
          id="new-msg"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
        />
        <button onClick={sendMessage}>Send</button>
      </fieldset>

      <div id="chat-text">
        {messages.map((msg, index) => (
          <div key={index}>
            <span className={msg.cls}>{msg.from}</span>: {msg.msg}
          </div>
        ))}
      </div>
    </div>
  );
}
