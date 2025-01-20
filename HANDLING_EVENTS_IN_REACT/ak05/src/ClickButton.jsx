import React, { useState } from 'react';

const ClickButton = () => {
  // Initialize state with default text "Not Clicked"
  const [text, setText] = useState("Not Clicked");

  // Function to handle button click and toggle the text
  const handleClick = () => {
    setText(prevText => prevText === "Not Clicked" ? "Clicked!" : "Not Clicked");
  };

  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  );
}

export default ClickButton;
