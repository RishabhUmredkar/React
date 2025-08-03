import React from 'react'

const EmailFormat = () => {
   const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (email.includes('@') && email.includes('.')) {
      console.log('Valid Email:', email);
    } else {
      console.log('Invalid Email');
    }
  };

  return (
    <div>
      <h2>Email Format Validator</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleInputChange} placeholder="Enter your email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmailFormat
