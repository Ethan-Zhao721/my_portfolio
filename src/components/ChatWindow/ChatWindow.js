import React, { useState, useEffect } from 'react';
import styles from './ChatWindow.module.scss';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Simulate AI response
  const generateResponse = (message) => {
    return `AI: I received your message: "${message}"`;
  };

  const handleSend = () => {
    if (input.trim() === '') return;

    // Add user message to chat
    setMessages([...messages, { sender: 'user', text: input }]);

    // Simulate an AI response after a delay
    setTimeout(() => {
      const response = generateResponse(input);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'ai', text: response }
      ]);
    }, 1000);

    setInput(''); // Clear input field
  };

  return (
    <div className={styles['chat-window-container']}>
      <div className={styles['chat-window']}>
        <div className={styles['chat-header']}>AI Chat</div>
        <div className={styles['chat-messages']}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={
                message.sender === 'user'
                  ? styles['user-message']
                  : styles['ai-message']
              }
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className={styles['chat-input']}>
          <input
            className={styles['input-field']}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button className={styles['send-button']} onClick={handleSend}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
