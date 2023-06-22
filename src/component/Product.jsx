import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartAdded, cartAgainAdded } from '../redux/cart/action';
import { increment } from '../redux/products/action';

const Product = ({ product }) => {
    const { name, category, img, price, quantity, id } = product;
    const carts = useSelector((state) => state.carts.carts);
    const dispatch = useDispatch();


    const cartAdd = (event) => {
        event.preventDefault();
        const valid = carts.filter((cart) => cart.id === id);
        console.log(valid.length)
        if (valid.length === 1) {
            dispatch(cartAgainAdded(id));
            dispatch(increment(id))
        }
        else {
            dispatch(cartAdded(name, category, img, Number(price), 1, id));
            dispatch(increment(id))

        }

    }

    return (
        <div class="productContainer" id="lws-productContainer">
            <div class="lws-productCard">
                <img class="lws-productImage" src={img} alt="product" />
                <div class="p-4 space-y-2">
                    <h4 class="lws-productName">{name}</h4>
                    <p class="lws-productCategory">{category}</p>
                    <div class="flex items-center justify-between pb-2">
                        <p class="productPrice">BDT <span class="lws-price">{price}</span></p>
                        <p class="productQuantity">QTY <span class="lws-quantity">{quantity}</span></p>
                    </div>
                    <button onClick={cartAdd} class="lws-btnAddToCart" disabled={quantity===0 && true}>Add To Cart</button>
                </div>
            </div>

        </div>
    );
};

export default Product;