import React, { useEffect, useState } from 'react'

const UseEffectTask3 = () => {
    let [state, setstate] = useState(0);
    let [total1, setTotal1] = useState(0);
    let [total2, setTotal2] = useState(1000);

    console.log("console");

    useEffect(() => {

        setTotal2((prev) => {
            return total2 += total1
        })
    }, [total1])


    return (
        <div>
            <button onClick={() => {
                setstate(state += 1);
            }}>add</button>
            <p> Total : {total1}</p>
            <p> Total : {total2}</p>
        </div>
    );
}

export default UseEffectTask3