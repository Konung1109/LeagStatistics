import './LoginForm.css'
import { useState, useEffect } from 'react';
export default function LoginForm({hideClick, onLoginSuccess}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/statistics/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();

      if (response.ok) {
        setLoginMessage(result.message || "Login successful");
        onLoginSuccess(result.token); 
        hideClick();
      } else {
        setLoginMessage(result.message || "Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setLoginMessage("An error occurred while logging in");
    }
  };
  const handleOverlayClick = (e) => {
  
    if (e.target.classList.contains('popup-overlay')) {
      hideClick();
    }
  };
    return <>
        <div className="popup-overlay" onClick={handleOverlayClick}>
      <div className="popup-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Your username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
            />
          </div>
          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>
        <h1>{loginMessage}</h1>
      </div>
    </div>
  
    </>
}