import React from 'react'
import UseFetch from './UseFetch'

const ShowProducts = () => {
    let data = UseFetch('https://dummyjson.com/products')
    console.log(data);
    console.log(data.products);
    return (
        <div>
            <div> {data == "Loading..." ? data : (data.products.length > 0 && data.products.map((val, i) => {
                console.log(val);
                return (
                    <div key={i}>
                        <p>{val.title}</p>
                        <img src={val.images[0]} width="200ps" alt="" />
                    </div>
                )
            }))}
            </div>
        </div>
    )
}

export default ShowProducts
