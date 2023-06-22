import { ADDED, DECRESEQUANTITY, INCREASEQUANTITY } from "./actionType";

const initialState = {
    uid: 1,
    products: []
}
const productReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADDED:

            return {
                ...state,
                uid: state.uid + 1,
                products: [
                    ...state.products, {
                        id: state.uid,
                        name: action.payload.name,
                        category: action.payload.category,
                        img: action.payload.img,
                        price: action.payload.price,
                        quantity: action.quantity,
                    }
                ]
            }
        case INCREASEQUANTITY:
            const increments = state.products.map((product) => {
                if (product.id === action.id) {
                    return {
                        ...product,
                        quantity: product.quantity - 1,

                    }
                }
                else {
                    return product
                }
            })
            return {
                ...state,
                products: increments
            }

        case DECRESEQUANTITY:
            const decrements = state.products.map((product) => {
                if (product.id === action.id) {
                    return {
                        ...product,
                        quantity: product.quantity + action.value,

                    }
                }
                else {
                    return product
                }
            })
            return {
                ...state,
                products: decrements
            }

        default:
            return state

    }

};

export default productReducer;