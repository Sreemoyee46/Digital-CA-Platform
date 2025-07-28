import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  // Get login function from auth context
  const { login } = useAuth();
  const navigate = useNavigate();

  // State for username and password inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    console.log('Logging in with:', username, password);
    login(username, password);
    navigate('/dashboard');
  }

  // Handle username input change
  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  // Handle password input change
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  return (
    <>
      <div className="login-header">Digital CA</div>
      <div className="auth-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <label>
            Username
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              required
              autoComplete="username"
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
              autoComplete="current-password"
            />
          </label>
          <button type="submit" className="btn-primary">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign up here</Link>
        </p>
      </div>
    </>
  );
}

export default Login;
