import { ADDED, DECRESEQUANTITY, INCREASEQUANTITY } from "./actionType"

export const added = (name, category, img, price, quantity) => {
    return {
        type: ADDED,
        quantity:quantity,
        payload: {
            name, category, img, price, 
        }

    }
}
export const increment = (id) => {
    return {
        type: INCREASEQUANTITY,
        id: id

    }
}
export const decrement = (id,value) => {
    return {
        type: DECRESEQUANTITY,
        id: id,value

    }
}