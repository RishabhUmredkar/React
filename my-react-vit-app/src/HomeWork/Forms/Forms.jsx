import React from 'react'
import LoginForm from './LoginForm'
import FeedbackForm from './FeedbackForm'
import ShoppingListForm from './ShoppingListForm'
import ContactUs from './ContactUs'

// 31.	Basic Login Form
// Create a login form with username and password fields. Handle the form submission without page reload.

// 32.	Feedback Submission Form
// Build a feedback form. Upon submission, display the entered feedback message just below the form.


// 33.	Email Format Validator
// Develop a form that includes an email input. Validate the entered email format and show a message if it’s invalid.


// 34.	Shopping List Entry Form
// Create a form where users can add new items to a shopping list, which is then displayed below the form.


// 35.	Simple Contact Us Form
// Build a contact form with name, email, and message input fields, and a submit button to simulate form submission.

const Forms = () => {
    return (
        <div>
            {/* // 31.	Basic Login Form */}
            {/* <LoginForm/> */}

            {/* // 32.	Feedback Submission Form */}
            {/* <FeedbackForm /> */}

            {/* // 33.	Email Format Validator */}
            {/* <EmailFormat /> */}

            {/* // 34.	Shopping List Entry Form */}
            {/* <ShoppingListForm /> */}


            {/* // 35.	Simple Contact Us Form */}
            <ContactUs />
        </div>
    )
}

export default Forms
