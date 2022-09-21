import { products } from "../../utils/data"

const initialState = {
    products: products,
    carts: [],
}

const productReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default productReducer