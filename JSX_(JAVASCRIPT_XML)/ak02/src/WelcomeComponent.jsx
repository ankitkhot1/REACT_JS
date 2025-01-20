import React from 'react';

const WelcomeComponent = () => {
  const dynamicData = "a syntax extension for JavaScript that looks similar to XML or HTML. JSX makes it easier to write and add HTML in React.";

  return (
    <div>
      <h1>Welcome to JSX</h1>
      <p>JSX is {dynamicData}</p>
    </div>
  );
}

export default WelcomeComponent;
