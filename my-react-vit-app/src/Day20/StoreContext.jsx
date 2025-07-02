import React, { createContext } from 'react'


export let helper = createContext()
const StoreContext = ({ children }) => {
    let a = 10
    let b = 20
    let c = []
    let d = {}

    return (
        <helper.Provider value={{ a, b, c, d }}>{children}</helper.Provider>

    )
}

export default StoreContext
