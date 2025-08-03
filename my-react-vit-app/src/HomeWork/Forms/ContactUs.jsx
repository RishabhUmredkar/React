import React, { useState } from 'react'

const ContactUs = () => {
 const [formData, setFormData] = useState({
    name: '', email: '', message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Form submitted with data:', formData);
    alert('Form submitted! Check the console for data.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Your Email" />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            rows="4"
            cols="50"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};


export default ContactUs
