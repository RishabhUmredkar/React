import { configureStore } from "@reduxjs/toolkit";
import kuchTo from "./slice"

export let store = configureStore({
    reducer :{
         cartItem : kuchTo
    }
})