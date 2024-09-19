
import React, { useState } from 'react';
import { ReactTyped } from 'react-typed';
import styles from './TypingEffect.module.scss';  // SCSS module import

const TypingEffect = ({ onTypingComplete }) => {
    const fullText = `Hi, I'm Ethan.
    I'm a Full Stack Developer.
    I specialize in React, NodeJS, and Java ...`;
    const [typedText, setTypedText] = useState("");
    const [showFullText, setShowFullText] = useState(false);  // To control showing full text
    const [showLastSentence, setShowLastSentence] = useState(false);  // Control to delay last sentence

  const handleTypingComplete = () => {
    // Call the parent function to show chat window
    
    setTimeout(() => {
        setShowLastSentence(true);
        setShowFullText(true);
        // Once the last sentence appears, trigger the onTypingComplete function
        if (onTypingComplete) {
          onTypingComplete();
        }
      }, 2000);
  };

  const handleTypingProgress = (typedString) => {
    setTypedText(typedString);  // Update the full text to keep it visible
  };

  return (
    <div className={styles['typing-effect']}>
     {showFullText ? (<div className="full-text">{fullText}</div>) : <ReactTyped
        strings={[
          "Hi, I'm Ethan.",
          "I'm a Full Stack Developer.",
          "I specialize in React, NodeJS, and Java ...",
          "Welcome to My Space and Let's connect!",
          "AI robot is waking up...."
        ]}
        typeSpeed={50}
        backSpeed={20}
        onComplete={handleTypingComplete}
        showCursor={false}
        onStringTyped={(arrayPos, self) => {
            handleTypingProgress(self.strings.slice(0, arrayPos + 1).join(' '));
        }}
      />}
      
    </div>
  );
};

export default TypingEffect;