import React, { useEffect, useState } from 'react'
import axios from './../../node_modules/axios/lib/axios';

const UseFetch = (url) => {
    let [state, setstate] = useState(null)
    useEffect(() => {
        axios.get(url)
            .then((response) => {
                console.log(response.data);
                setstate(response.data);
            })
    }, [url])

    if(state == null)
    {
        return "Loading..."
    }
    else{
        return state;
    }
}

export default UseFetch
