import React from 'react'
import { Alert } from 'react-bootstrap'
import AlertButton from './AlertButton'
import FormDataLogger from './FormDataLogger';
import TextInputPreview from './TextInputPreview';
import ParagraphToggle from './ParagraphToggle';
import DropdownMenu from './DropdownMenu';

// 11.	Alert Button
// Add a button that, when clicked, shows a browser alert with a predefined message.


// 12.	Console Log Form Data on Submit
// Create a basic form that captures user input. When submitted, the input values should be logged to the browser console.


// 13.	Live Text Preview
// Build an input field that updates a text element in real time as the user types.


// 14.	Paragraph Toggle Visibility
// Implement a button that toggles the visibility of a paragraph on the screen—hide it if visible, and show it if hidden.


// 15.	Dropdown Menu Selection Display
// Create a dropdown menu with multiple options. Display the currently selected value just below the dropdown.

const RunEventHandling = () => {
    return (
        <div>
            {/* // 11.	Alert Button */}
            {/* <AlertButton /> */}

            {/* // 12.	Console Log Form Data on Submit */}
            {/* <FormDataLogger /> */}

            {/* // 13.	Live Text Preview */}
            {/* <TextInputPreview /> */}

            {/* // 14.	Paragraph Toggle Visibility */}
            {/* <ParagraphToggle /> */}

            {/* // 15.	Dropdown Menu Selection Display */}
            <DropdownMenu />

        </div>
    )
}

export default RunEventHandling
