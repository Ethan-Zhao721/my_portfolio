import React from 'react';
import { ReactTyped } from 'react-typed';


import './App.css';

function App() {
  return (
    <div className="App">
      <div className="intro">
        <ReactTyped
          strings={[
            "Hi, I'm Ethan.",
            "I'm a Full Stack Developer.",
            "I specialize in React, NodeJS, and Java ...",
            "Welcome to My Space and Talk to Me",
            "Let's connect! AI robot is waking up...."           
          ]}
          typeSpeed={40}
          backSpeed={55}
          backDelay={2500}        // Delay before erasing (in milliseconds)
          loop={false}            // Do not loop after finishing the last word
          showCursor={true}       // Show the cursor at the end          
        />
      </div>
    </div>
  );
}

export default App;
