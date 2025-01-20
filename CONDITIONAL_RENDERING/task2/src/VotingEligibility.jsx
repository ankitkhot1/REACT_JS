import React, { useState } from 'react';

const VotingEligibility = () => {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <label>
        Enter your age: 
        <input 
          type="number" 
          value={age} 
          onChange={handleChange}
          style={{ marginLeft: '10px' }}
        />
      </label>
      {age !== '' && (
        <p>
          {age >= 18 ? 'You are eligible to vote' : 'You are not eligible to vote'}
        </p>
      )}
    </div>
  );
};

export default VotingEligibility;
