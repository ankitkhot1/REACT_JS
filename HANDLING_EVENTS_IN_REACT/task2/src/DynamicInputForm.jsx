import React, { useState } from 'react';

const DynamicInputForm = () => {
  // Initialize state with an empty string
  const [inputValue, setInputValue] = useState('');

  // Function to handle input change and update state
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <form>
        <label>
          Enter text:
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
        </label>
      </form>
      <p>Dynamic Value: {inputValue}</p>
    </div>
  );
}

export default DynamicInputForm;
