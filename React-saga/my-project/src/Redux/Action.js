import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART } from "./Constant";

export const addToCart = (data) => {
    console.warn("action add cart called", data);
    return {
        type: ADD_TO_CART,
        data
    }
}

export const removetocart = (data) => {
    console.warn("action remove cart", data);
    return {
        type: REMOVE_TO_CART,
        data
    }

}
export const emptycart=(data)=>{
    console.warn("action Empty cart called");
    return{
        type:EMPTY_CART,
        data
    }
}