import React, { useState } from 'react';

import ChatWindow from './components/ChatWindow/ChatWindow';
import TypingEffect from './components/TypeEffect/TypingEffect';
import './App.scss';  // Assuming you'll also use SCSS for App styling



function App() {
  const [showChatWindow, setShowChatWindow] = useState(false);
  const handleTypingComplete = () => {
    setShowChatWindow(true);
  };
  
  return (
    <div className="App">
        <div className="left-section">
          <TypingEffect onTypingComplete={handleTypingComplete} />
        </div>
        
        <div className="right-section" >
          {showChatWindow && <ChatWindow/>}
        </div>
        
    </div>
  );
}

export default App;
