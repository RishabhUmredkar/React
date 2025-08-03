import { createSlice } from "@reduxjs/toolkit"


let initialState = {
    count: 10
}
let cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
    addToCart: (state, action) => {
            return { ...state, count: state.count + action.payload }
        },
    RemoveFromCart: (state, action) => {
      return { ...state, count: state.count - (action.payload || 1) };
    },
    EmptyCart: () => {
      return initialState;
    },
    }
})


export let { addToCart, RemoveFromCart, EmptyCart } = cartSlice.actions
export default cartSlice.reducer;


