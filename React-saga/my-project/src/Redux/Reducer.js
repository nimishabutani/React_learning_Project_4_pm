import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART } from "./Constant";

 const cartData = (data = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log("add to cart", action);
            return [action.data, ...data];

        case REMOVE_TO_CART:
            console.log("remove to cart", action);
            data.length = data.length ? data.length - 1 : [];
            return [...data];

        case EMPTY_CART:
            console.log("empty  cart", action);
            data = []
            return [...data];

        default: return data
    }
}
export default cartData