import React, { Fragment, useState } from 'react'

const UseStateHookTask11 = () => {
    let [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "item 4", "Item 5"]);

    return (
        <div>
            <div>
                {items.map((val, index) => (
                    <Fragment key={index}>
                        <h1 id="heading">{val}</h1>
                        <button onClick={() => { const newItems = [...items];
                                newItems.splice(index, 1);
                                setItems(newItems);}}>
                            remove</button>
                    </Fragment>
                ))}
            </div>
        </div>
    )
}

export default UseStateHookTask11;
