import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './chat.css';

export function Chat() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [chatText, setChatText] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    const ws = new WebSocket(`${protocol}://${window.location.host}/ws`);
    setSocket(ws);

    ws.onopen = () => {
      appendMsg('system', 'websocket', 'Connected');
    };

    ws.onmessage = async (event) => {
      const text = await event.data.text();
      const chat = JSON.parse(text);
      appendMsg('friend', chat.name, chat.msg);
    };

    ws.onclose = () => {
      appendMsg('system', 'websocket', 'Disconnected');
    };

    return () => {
      ws.close();
    };
  }, []);

  const appendMsg = (cls, from, msg) => {
    setChatText((prev) => [{ cls, from, msg }, ...prev]);
  };

  const sendMessage = () => {
    if (!message.trim() || !socket || socket.readyState !== WebSocket.OPEN) return;

    const chatMessage = { name, msg: message };
    socket.send(JSON.stringify(chatMessage));
    appendMsg('me', 'Me', message);
    setMessage('');
  };

  const clearChat = () => {
    setChatText([]);
  };

  return (
    <div className="container mt-4">
      <h1 id="chat-title">Meal plan with family and friends!</h1>

      <div className="mb-3">
        <label htmlFor="my-name" className="form-label">
          Your Name
        </label>
        <input
          id="my-name"
          type="text"
          className="form-control"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="new-msg" className="form-label">
          Chat
        </label>
        <div className="input-group">
          <input
            id="new-msg"
            type="text"
            className="form-control"
            placeholder="Type your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            disabled={!name}
          />
          <button
            className="btn btn-primary"
            onClick={sendMessage}
            disabled={!name}
          >
            Send
          </button>
        </div>
      </div>

      <div className="mb-3">
        <button
          className="btn btn-danger btn-sm"
          onClick={clearChat}
          disabled={!chatText.length}
        >
          Clear Chat
        </button>
      </div>

      <div
        id="chat-text"
        className="border rounded p-3"
        style={{
          height: '300px',
          overflowY: 'scroll',
          backgroundColor: '#95a480',
          marginTop: '20px',
          marginBottom: '20px',
        }}
      >
        <h2>Messages:</h2>
        {chatText.map((chat, index) => (
          <div
            key={index}
            className="mb-2 p-2 rounded bg-custom-message"
          >
            <strong>{chat.from}</strong>: {chat.msg}
          </div>
        ))}
      </div>
    </div>
  );
}
