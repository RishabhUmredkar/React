import React, { Fragment, useState, useRef } from 'react';

const EventTask6 = () => {
    const [items, setItems] = useState(["text1", "text2", "text3", "text4", "text5"]);
    const dragItem = useRef();
    const dragOverItem = useRef();

    const handleDragStart = (index) => {
        dragItem.current = index;
    };

    const handleDragEnter = (index) => {
        dragOverItem.current = index;
    };

    const handleDragEnd = () => {
        const newItems = [...items];
        const draggedItemContent = newItems[dragItem.current];
        newItems.splice(dragItem.current, 1);
        newItems.splice(dragOverItem.current, 0, draggedItemContent);
        setItems(newItems);
        dragItem.current = null;
        dragOverItem.current = null;
    };

    return (
        <div>
            <ol>
                {items.map((item, i) => (
                    <Fragment key={i}>
                        <li
                            draggable="true"
                            onDragStart={() => handleDragStart(i)}
                            onDragEnter={() => handleDragEnter(i)}
                            onDragEnd={handleDragEnd}
                            style={{ cursor: "grab", userSelect: "none" }}
                        >
                            {item}
                        </li>
                    </Fragment>
                ))}
            </ol>
        </div>
    );
};

export default EventTask6;
