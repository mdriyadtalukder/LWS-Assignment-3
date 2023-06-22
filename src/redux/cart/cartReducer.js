import { AGAINADDED, CARTADDED, DECREMENT, DELETE, INCREMENT } from "./actionType";

const initialState = {
    carts: [],
}
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CARTADDED:

            return {
                ...state,
                carts: [
                    ...state.carts, {
                        id: action.payload.id,
                        name: action.payload.name,
                        category: action.payload.category,
                        img: action.payload.img,
                        price: action.payload.price,
                        quantity: action.payload.quantity,
                    }
                ]
            }

        case AGAINADDED:
            const again = state.carts.map((cart) => {
                if (cart.id === action.id) {
                    return {
                        ...cart,
                        quantity: cart.quantity + 1,
                    }
                }
                else {
                    return cart
                }
            })

            return {
                ...state,
                carts: again
            }

        case INCREMENT:
            const inc = state.carts.map((cart) => {
                if (cart.id === action.id) {
                    return {
                        ...cart,
                        quantity: cart.quantity + action.value
                    }
                }
                else {
                    return cart
                }
            })
            return {
                ...state,
                carts: inc
            }
        case DECREMENT:
            const dec = state.carts.map((cart) => {
                if (cart.id === action.id) {
                    return {
                        ...cart,
                        quantity: cart.quantity - action.value
                    }
                }
                else {
                    return cart
                }
            })
            return {
                ...state,
                carts: dec
            }
        case DELETE:
            const del = state.carts.filter((cart) => cart.id !== action.id)
            return {
                ...state,
                carts: del
            }
        default:
            return state;
    }

};

export default cartReducer;