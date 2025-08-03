import React, { useState } from 'react'

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    if (formData.username === '' || formData.password === '') {
      setFormData({...formData});
    } else {
      setFormData({...formData});

      console.log('Username:', formData.username);
      console.log('Password:', formData.password);
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={formData.username} onChange={handleInputChange} placeholder="Enter your username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={formData.password} onChange={handleInputChange} placeholder="Enter your password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm
