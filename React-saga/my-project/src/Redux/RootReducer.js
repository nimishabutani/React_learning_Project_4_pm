import { combineReducers } from "@reduxjs/toolkit";
import  cartData  from "./Reducer";
import productData from "../Redux/ProductReducer"

export default combineReducers({
    cartData,
    productData
})