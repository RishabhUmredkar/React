import React, { useState } from 'react';

function EventTask8() {
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div>
            <h3>List item highlights on hover</h3>
            <ul>
                {items.map((item, idx) => (
                    <li
                     key={idx}
                     onMouseEnter={()=>setHoveredIndex(idx)}
                     onMouseLeave={()=>setHoveredIndex(null)}
                    style={{
                            padding: '8px 16px',
                            margin: '4px 0',
                            background: hoveredIndex === idx ? '#cce5ff' : '#f8f9fa',
                            cursor: 'pointer',
                            borderRadius: '4px',
                            transition: 'background 0.2s'
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>

            
        </div>
    );
}

export default EventTask8;
