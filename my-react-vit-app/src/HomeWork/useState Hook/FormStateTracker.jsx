import React from 'react'

const FormStateTracker = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
  return (
    <div>
      <form>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      </form>
      <p>Real-time form state will be shown here as you type...</p>
        <div>
            <h3>Form Data:</h3>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
        </div>
    </div>
  )
}

export default FormStateTracker
