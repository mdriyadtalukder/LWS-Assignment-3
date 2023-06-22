import { AGAINADDED, CARTADDED, DECREMENT, DELETE, INCREMENT } from "./actionType";

export const cartAdded = (name, category, img, price, quantity, id) => {
    return {
        type: CARTADDED,
        payload: {
            name, category, img, price, quantity, id
        }
    }
}
export const cartAgainAdded = (id) => {
    return {
        type: AGAINADDED,
        id
    }
}
export const incrementAdd = (id,value) => {
    return {
        type: INCREMENT,
        id: id,
        value:value
    }
}
export const decrementtAdd = (id,value) => {
    return {
        type: DECREMENT,
        id: id,
        value:value

    }
}
export const deleteCart = (id) => {
    return {
        type: DELETE,
        id: id
    }
}