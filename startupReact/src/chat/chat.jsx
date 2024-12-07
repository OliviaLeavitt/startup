import React, { useState } from 'react';

export function Chat() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [chatText, setChatText] = useState([]);

  const sendMessage = () => {
    if (message.trim()) {
      setChatText(prev => [...prev, message]);
      setMessage('');
    }
  };

  return (
    <div>
      <fieldset>
        <legend>My Name</legend>
        <input
          id="my-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </fieldset>

      <fieldset disabled={!name}>
        <legend>Chat</legend>
        <input
          id="new-msg"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </fieldset>

      <div id="chat-text">
        {chatText.map((msg, index) => <p key={index}>{msg}</p>)}
      </div>
    </div>
  );
}
