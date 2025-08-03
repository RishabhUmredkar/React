import React, { useState } from 'react'

const DropdownMenu = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelect = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <select onChange={handleSelect}>
                <option value="">Select an option</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
            </select>
            {selectedOption && <p>You selected: {selectedOption}</p>}
        </div>
    )
}

export default DropdownMenu
