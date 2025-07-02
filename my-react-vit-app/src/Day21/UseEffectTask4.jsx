import React, { useEffect, useState } from 'react'

const UseEffectTask4 = () => {

    let [state, setstate] = useState(0);
    let [api, setApi] = useState([])

    let fetching = async () => {
        let resObj = await fetch('https://api.github.com/users')
        let data = await resObj.json()
        setApi(data)
        console.log("iiiiiiiii");
    }

    console.log(api);
    
    useEffect(() => {
        fetching();
    },[])
    return (
        <div>
            useEffectTask 4
            <button onClick={() => { setstate(state += 1) }}> click : {state}</button>
            <div className='flex flex-wrap gap-10 justify-center'>
            {
                api.length > 0 && api.map((val, ind)=>{
                    return(
                        <div key={ind} className=''>
                            <img src={val.avatar_url} alt="" />
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default UseEffectTask4
