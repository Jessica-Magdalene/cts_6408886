import React, { useState } from 'react';

// Login button component
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

// Logout button component
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

// Greeting shown to logged-in users
function UserGreeting() {
  return (
    <div>
      <h1>Welcome back</h1>
      <p>You can now book your tickets.</p>
      <p><strong>Flight Details:</strong></p>
      <ul>
        <li>Flight: AI-203</li>
        <li>From: Delhi</li>
        <li>To: Mumbai</li>
        <li>Time: 10:00 AM</li>
      </ul>
      <button>Book Ticket</button>
    </div>
  );
}

// Greeting shown to guests
function GuestGreeting() {
  return (
    <div>
      <h1>Please sign up.</h1>
      <p>Browse flight details below.</p>
      <p><strong>Flight Details:</strong></p>
      <ul>
        <li>Flight: AI-203</li>
        <li>From: Delhi</li>
        <li>To: Mumbai</li>
        <li>Time: 10:00 AM</li>
      </ul>
    </div>
  );
}

// Greeting handler
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

// App component
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => setIsLoggedIn(true);
  const handleLogoutClick = () => setIsLoggedIn(false);

  let button = isLoggedIn
    ? <LogoutButton onClick={handleLogoutClick} />
    : <LoginButton onClick={handleLoginClick} />;

  return (
    <div style={{ padding: '20px' }}>
      <Greeting isLoggedIn={isLoggedIn} />
      <br />
      {button}
    </div>
  );
}

export default App;
