import React, { useState } from 'react';
import { loginUser } from '../../api'; // Assuming you have API functions for login and registration
import Registration from '../registration/Registration';
import './Login.css'
// Login Component
const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      // Call API function to log in
      const user = await loginUser({ email, password });

      console.log("get data", user);
      // Assuming the API returns the user object upon successful login

      // Reset state values to null after successful login
      setEmail('');
      setPassword('');

      // Call the onLogin callback with the user data if needed
      // onLogin(user);
    } catch (error) {
      console.error('Login failed:', error.message);
      // Handle login failure, show error message, etc.
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email..."
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password..."
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
        
      </form>
    </div>
  );
};

export default Login;
