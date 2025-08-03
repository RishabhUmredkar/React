import React, { useState } from 'react'

const ParagraphToggle = () => {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <button onClick={toggleVisibility}>
                {isVisible ? 'Hide' : 'Show'} Paragraph
            </button>
            {isVisible && <p>This is a toggleable paragraph.</p>}
        </div>
    )
}

export default ParagraphToggle
