import React, { useState, useEffect } from 'react';

export function Chat() {
  // State to manage user name, current message, chat history, and WebSocket connection
  const [name, setName] = useState(''); // User's name
  const [message, setMessage] = useState(''); // Current message to send
  const [chatText, setChatText] = useState([]); // Array of chat messages
  const [socket, setSocket] = useState(null); // WebSocket instance

  // Initialize WebSocket connection when the component mounts
  useEffect(() => {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss'; // Use the appropriate protocol (ws/wss)
    const ws = new WebSocket(`${protocol}://${window.location.host}/ws`);
    setSocket(ws); // Save the WebSocket instance to state

    // Handle WebSocket connection opening
    ws.onopen = () => {
      appendMsg('system', 'websocket', 'connected');
    };

    // Handle incoming messages
    ws.onmessage = async (event) => {
      const text = await event.data.text(); // Read the message content
      const chat = JSON.parse(text); // Parse the JSON message
      appendMsg('friend', chat.name, chat.msg); // Append the received message
    };

    // Handle WebSocket connection closure
    ws.onclose = () => {
      appendMsg('system', 'websocket', 'disconnected');
    };

    // Cleanup WebSocket connection when the component unmounts
    return () => {
      ws.close();
    };
  }, []); // Empty dependency array ensures this runs only once

  // Function to add a message to the chatText state
  const appendMsg = (cls, from, msg) => {
    setChatText((prev) => [{ cls, from, msg }, ...prev]); // Add new message at the top
  };

  // Function to send a message via WebSocket
  const sendMessage = () => {
    // Prevent sending if there's no message, WebSocket is not ready, or user isn't connected
    if (!message.trim() || !socket || socket.readyState !== WebSocket.OPEN) return;

    const chatMessage = { name, msg: message }; // Create the message object
    socket.send(JSON.stringify(chatMessage)); // Send the message as JSON
    appendMsg('me', 'me', message); // Append the sent message locally
    setMessage(''); // Clear the input field
  };

  return (
    <div>
      {/* User Name Input */}
      <fieldset>
        <legend>My Name</legend>
        <input
          id="my-name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </fieldset>

      {/* Chat Input and Send Button (disabled if no name is entered) */}
      <fieldset disabled={!name}>
        <legend>Chat</legend>
        <input
          id="new-msg"
          type="text"
          placeholder="Type your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()} // Send on Enter key press
        />
        <button onClick={sendMessage}>Send</button>
      </fieldset>

      {/* Chat Messages Display */}
      <div id="chat-text">
        {chatText.map((chat, index) => (
          <div key={index}>
            {/* Apply the class and display message */}
            <span className={chat.cls}>{chat.from}</span>: {chat.msg}
          </div>
        ))}
      </div>
    </div>
  );
}
