import React from 'react';
import { AuthProvider, useAuth } from './AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
};

const Home = () => {
  const { isLoggedIn, user, logIn, logOut } = useAuth();

  const handleLogIn = () => {
    // Simulate a user logging in
    const user = { name: 'John Doe' };
    logIn(user);
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h1>Welcome, {user.name}!</h1>
          <button onClick={logOut}>Log Out</button>
        </>
      ) : (
        <>
          <h1>Please log in</h1>
          <button onClick={handleLogIn}>Log In</button>
        </>
      )}
    </div>
  );
};

export default App;
