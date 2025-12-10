import React, { useState, useEffect, useRef } from 'react';
import styles from './styles.module.css';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    try {
      const response = await fetch('https://rag-chatbot-eight-plum.vercel.app/api/v1/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let botMessage = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        botMessage += decoder.decode(value);
        setMessages([...newMessages, { sender: 'bot', text: botMessage }]);
      }
    } catch (error) {
      setMessages([...newMessages, { sender: 'bot', text: 'Sorry, something went wrong.' }]);
    }
  };

  return (
    <div className={styles.chatbotWidget}>
      <button className={styles.chatToggleButton} onClick={toggleChat}>
        {isOpen ? 'Close' : 'Chat'}
      </button>
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.messages}>
            {messages.map((msg, index) => (
              <div key={index} className={`${styles.message} ${styles[msg.sender]}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSendMessage} className={styles.inputForm}>
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Type a message..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;
