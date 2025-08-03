import React, { useState } from 'react'

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        feedback: '',
        submittedFeedback: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        setFormData({ ...formData, submittedFeedback: formData.feedback, feedback: '' });
    };

    const handleInputChange = (e) => {
        const { value } = e.target;
        setFormData({ ...formData, feedback: value });
    };

    return (
        <div>
            <h2>Feedback Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="feedback">Your Feedback:</label>
                    <textarea id="feedback" value={formData.feedback} onChange={handleInputChange} placeholder="Enter your feedback here..." rows="4" cols="50" />
                </div>
                <button type="submit">Submit</button>
            </form>

            {formData.submittedFeedback && (
                <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
                    <h3>Submitted Feedback:</h3>
                    <p>{formData.submittedFeedback}</p>
                </div>
            )}
        </div>
    );
};

export default FeedbackForm
