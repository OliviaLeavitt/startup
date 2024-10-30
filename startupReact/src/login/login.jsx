import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login process
    if (username && password) {
      // Call the onLogin prop to set the logged-in state
      onLogin();
      // Redirect to home page
      navigate('/home');
    }
  };

  return (
    <main className="card shadow-lg p-5 d-flex align-items-center justify-content-center vh-100">
      <h2 className="text-center mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
            placeholder="Enter your username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-custom btn-block">
          Login
        </button>
      </form>

      <p className="text-center mt-3">
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>

      {/* Placeholder for displaying logged-in user's name */}
      {username && (
        <div id="welcomeMessage" className="welcome text-center mt-3">
          <h4>Welcome, {username}!</h4>
        </div>
      )}
    </main>
  );
}
