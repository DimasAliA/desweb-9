// loginform.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(''); // Reset error message on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve registered users from localStorage
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    // Check if the entered email and password match any registered user
    const user = registeredUsers.find((user) => user.email === formData.email && user.password === formData.password);

    if (user) {
      // Login successful
      console.log('Login successful:', user);
      setError('');

      // Redirect to the profile page
      navigate('/profile');
    } else {
      // Login failed
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="login-card">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Welcome to Sosmed</h2>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {error && <span className="error-message">{error}</span>}
        <p className="forgot-password-link">
          <Link to="/forgot-password">Forgot your password?</Link>
        </p>
        <button type="submit" className="login-btn">
          Login
        </button>
        <p className="or-divider">OR</p>
        <button type="button" className="google-login-btn">
          Login with Google
        </button>
      </form>
    </div>
  );
};

export default Login;
